
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UserPlus, Shield, User } from 'lucide-react';

interface UserProfile {
  id: string;
  email: string | null;
  full_name: string | null;
  created_at: string;
  roles: { role: string }[];
}

const AdminUserManager: React.FC = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select(`
          id,
          email,
          full_name,
          created_at
        `);

      if (profilesError) throw profilesError;

      // Fetch user roles separately
      const usersWithRoles = await Promise.all(
        profiles.map(async (profile) => {
          const { data: roles } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', profile.id);

          return {
            ...profile,
            roles: roles || []
          };
        })
      );

      setUsers(usersWithRoles);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: "Failed to load users",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleAdminRole = async (userId: string, hasAdmin: boolean) => {
    try {
      if (hasAdmin) {
        // Remove admin role
        const { error } = await supabase
          .from('user_roles')
          .delete()
          .eq('user_id', userId)
          .eq('role', 'admin');

        if (error) throw error;
      } else {
        // Add admin role
        const { error } = await supabase
          .from('user_roles')
          .insert({
            user_id: userId,
            role: 'admin'
          });

        if (error) throw error;
      }

      toast({
        title: "Success",
        description: `Admin role ${hasAdmin ? 'removed from' : 'granted to'} user`,
      });
      
      fetchUsers();
    } catch (error) {
      console.error('Error updating user role:', error);
      toast({
        title: "Error",
        description: "Failed to update user role",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-nour-blue">User Management</h2>
        <Button className="bg-nour-blue hover:bg-nour-light-blue">
          <UserPlus className="w-4 h-4 mr-2" />
          Invite User
        </Button>
      </div>

      <div className="grid gap-4">
        {users.map((user) => {
          const hasAdminRole = user.roles.some(role => role.role === 'admin');
          
          return (
            <Card key={user.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-nour-light-blue rounded-full flex items-center justify-center">
                    {hasAdminRole ? (
                      <Shield className="w-5 h-5 text-nour-blue" />
                    ) : (
                      <User className="w-5 h-5 text-nour-blue" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {user.full_name || user.email || 'Unknown User'}
                    </h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">
                      Joined: {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Badge variant={hasAdminRole ? "default" : "secondary"}>
                    {hasAdminRole ? 'Admin' : 'User'}
                  </Badge>
                  <Button
                    size="sm"
                    variant={hasAdminRole ? "destructive" : "default"}
                    onClick={() => toggleAdminRole(user.id, hasAdminRole)}
                  >
                    {hasAdminRole ? 'Remove Admin' : 'Make Admin'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdminUserManager;
