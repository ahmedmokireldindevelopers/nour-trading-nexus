
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } = '@/hooks/use-toast';
import { Loader2, Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface Product {
  id: string;
  name_en: string;
  name_ar: string;
  description_en: string | null;
  description_ar: string | null;
  category: string;
  specifications: any;
  features_en: string[] | null;
  features_ar: string[] | null;
  images: string[] | null;
  is_active: boolean;
}

const AdminProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const categories = ['pex-pipes', 'electrical-wires', 'dibond-installations', 'accessories'];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to load products",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (product: Product) => {
    setSaving(product.id);
    try {
      const { error } = await supabase
        .from('products')
        .update({
          name_en: product.name_en,
          name_ar: product.name_ar,
          description_en: product.description_en,
          description_ar: product.description_ar,
          category: product.category,
          features_en: product.features_en,
          features_ar: product.features_ar,
          is_active: product.is_active,
          updated_at: new Date().toISOString()
        })
        .eq('id', product.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product updated successfully",
      });
      
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: "Error",
        description: "Failed to save product",
        variant: "destructive",
      });
    } finally {
      setSaving(null);
    }
  };

  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
      
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (id: string, field: string, value: any) => {
    setProducts(prev => prev.map(product => 
      product.id === id ? { ...product, [field]: value } : product
    ));
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
        <h2 className="text-3xl font-bold text-nour-blue">Product Management</h2>
        <Button onClick={() => setShowAddForm(true)} className="bg-nour-blue hover:bg-nour-light-blue">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="grid gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {editingProduct === product.id ? (
                      <Input
                        value={product.name_en}
                        onChange={(e) => handleInputChange(product.id, 'name_en', e.target.value)}
                        className="font-bold"
                      />
                    ) : (
                      product.name_en
                    )}
                    <Badge variant={product.is_active ? "default" : "secondary"}>
                      {product.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Category: {product.category}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingProduct(editingProduct === product.id ? null : product.id)}
                  >
                    {editingProduct === product.id ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {editingProduct === product.id ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Arabic Name</Label>
                    <Input
                      value={product.name_ar}
                      onChange={(e) => handleInputChange(product.id, 'name_ar', e.target.value)}
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Select
                      value={product.category}
                      onValueChange={(value) => handleInputChange(product.id, 'category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>English Description</Label>
                    <Textarea
                      value={product.description_en || ''}
                      onChange={(e) => handleInputChange(product.id, 'description_en', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Arabic Description</Label>
                    <Textarea
                      value={product.description_ar || ''}
                      onChange={(e) => handleInputChange(product.id, 'description_ar', e.target.value)}
                      rows={3}
                      dir="rtl"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Arabic Name</h4>
                    <p className="text-gray-600" dir="rtl">{product.name_ar}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">English Description</h4>
                    <p className="text-gray-600">{product.description_en || 'No description'}</p>
                  </div>
                </div>
              )}

              {editingProduct === product.id && (
                <div className="flex justify-end">
                  <Button
                    onClick={() => handleSave(product)}
                    disabled={saving === product.id}
                    className="bg-nour-blue hover:bg-nour-light-blue"
                  >
                    {saving === product.id ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminProductManager;
