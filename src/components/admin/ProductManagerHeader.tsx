
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ProductManagerHeaderProps {
  onAddProduct: () => void;
}

const ProductManagerHeader: React.FC<ProductManagerHeaderProps> = ({ onAddProduct }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-3xl font-bold text-nour-blue">Product Management</h2>
      <Button onClick={onAddProduct} className="bg-nour-blue hover:bg-nour-light-blue">
        <Plus className="w-4 h-4 mr-2" />
        Add Product
      </Button>
    </div>
  );
};

export default ProductManagerHeader;
