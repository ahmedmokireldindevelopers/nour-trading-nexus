
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save, Edit } from 'lucide-react';

interface ContentItem {
  id: string;
  section: string;
  key: string;
  content_en: string | null;
  content_ar: string | null;
}

const AdminContentManager: React.FC = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('website_content')
        .select('*')
        .order('section', { ascending: true });

      if (error) throw error;
      setContent(data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
      toast({
        title: "Error",
        description: "Failed to load content",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (item: ContentItem) => {
    setSaving(item.id);
    try {
      const { error } = await supabase
        .from('website_content')
        .update({
          content_en: item.content_en,
          content_ar: item.content_ar,
          updated_at: new Date().toISOString()
        })
        .eq('id', item.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content updated successfully",
      });
      
      setEditingItem(null);
      fetchContent();
    } catch (error) {
      console.error('Error saving content:', error);
      toast({
        title: "Error",
        description: "Failed to save content",
        variant: "destructive",
      });
    } finally {
      setSaving(null);
    }
  };

  const handleInputChange = (id: string, field: string, value: string) => {
    setContent(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  const groupedContent = content.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, ContentItem[]>);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-nour-blue">Content Management</h2>
        <Button onClick={fetchContent} variant="outline">
          Refresh Content
        </Button>
      </div>

      {Object.entries(groupedContent).map(([section, items]) => (
        <Card key={section}>
          <CardHeader>
            <CardTitle className="capitalize">{section} Section</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold capitalize">{item.key}</h4>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingItem(editingItem === item.id ? null : item.id)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    {editingItem === item.id ? 'Cancel' : 'Edit'}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`${item.id}-en`}>English Content</Label>
                    {editingItem === item.id ? (
                      <Textarea
                        id={`${item.id}-en`}
                        value={item.content_en || ''}
                        onChange={(e) => handleInputChange(item.id, 'content_en', e.target.value)}
                        className="mt-1"
                        rows={3}
                      />
                    ) : (
                      <div className="mt-1 p-3 bg-gray-50 rounded-md min-h-[80px]">
                        {item.content_en || 'No content'}
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor={`${item.id}-ar`}>Arabic Content</Label>
                    {editingItem === item.id ? (
                      <Textarea
                        id={`${item.id}-ar`}
                        value={item.content_ar || ''}
                        onChange={(e) => handleInputChange(item.id, 'content_ar', e.target.value)}
                        className="mt-1"
                        rows={3}
                        dir="rtl"
                      />
                    ) : (
                      <div className="mt-1 p-3 bg-gray-50 rounded-md min-h-[80px]" dir="rtl">
                        {item.content_ar || 'لا يوجد محتوى'}
                      </div>
                    )}
                  </div>
                </div>

                {editingItem === item.id && (
                  <div className="flex justify-end">
                    <Button
                      onClick={() => handleSave(item)}
                      disabled={saving === item.id}
                      className="bg-nour-blue hover:bg-nour-light-blue"
                    >
                      {saving === item.id ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4 mr-2" />
                      )}
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminContentManager;
