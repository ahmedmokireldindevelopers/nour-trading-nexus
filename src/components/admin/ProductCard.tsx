
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Loader2, Edit, Trash2, Save, X } from 'lucide-react';
import { Product, PRODUCT_CATEGORIES } from '@/types/product';

interface ProductCardProps {
  product: Product;
  isEditing: boolean;
  isSaving: boolean;
  onEdit: () => void;
  onDelete: (id: string) => void;
  onSave: (product: Product) => void;
  onInputChange: (field: string, value: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isEditing,
  isSaving,
  onEdit,
  onDelete,
  onSave,
  onInputChange,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              {isEditing ? (
                <Input
                  value={product.name_en}
                  onChange={(e) => onInputChange('name_en', e.target.value)}
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
              onClick={onEdit}
            >
              {isEditing ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(product.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Arabic Name</Label>
              <Input
                value={product.name_ar}
                onChange={(e) => onInputChange('name_ar', e.target.value)}
                dir="rtl"
              />
            </div>
            <div>
              <Label>Category</Label>
              <Select
                value={product.category}
                onValueChange={(value) => onInputChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PRODUCT_CATEGORIES.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>English Description</Label>
              <Textarea
                value={product.description_en || ''}
                onChange={(e) => onInputChange('description_en', e.target.value)}
                rows={3}
              />
            </div>
            <div>
              <Label>Arabic Description</Label>
              <Textarea
                value={product.description_ar || ''}
                onChange={(e) => onInputChange('description_ar', e.target.value)}
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

        {isEditing && (
          <div className="flex justify-end">
            <Button
              onClick={() => onSave(product)}
              disabled={isSaving}
              className="bg-nour-blue hover:bg-nour-light-blue"
            >
              {isSaving ? (
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
  );
};

export default ProductCard;
