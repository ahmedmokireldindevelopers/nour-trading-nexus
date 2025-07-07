
import React from 'react';
import { Loader2 } from 'lucide-react';
import { useProductManager } from '@/hooks/useProductManager';
import ProductCard from './ProductCard';
import ProductManagerHeader from './ProductManagerHeader';

const AdminProductManager: React.FC = () => {
  const {
    products,
    loading,
    saving,
    editingProduct,
    showAddForm,
    setEditingProduct,
    setShowAddForm,
    handleSave,
    handleDelete,
    handleInputChange,
  } = useProductManager();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ProductManagerHeader onAddProduct={() => setShowAddForm(true)} />

      <div className="grid gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isEditing={editingProduct === product.id}
            isSaving={saving === product.id}
            onEdit={() => setEditingProduct(editingProduct === product.id ? null : product.id)}
            onDelete={handleDelete}
            onSave={handleSave}
            onInputChange={(field, value) => handleInputChange(product.id, field, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminProductManager;
