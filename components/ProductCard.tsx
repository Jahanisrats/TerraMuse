import React from 'react';
import { Product } from '../types';
import { useCart } from '../CartContext';

interface ProductCardProps {
  product: Product;
  aspectRatio?: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, aspectRatio = "aspect-[3/5]", className = "" }) => {
  const { addToCart } = useCart();

  return (
    <div className={`product-card group break-inside-avoid ${className}`}>
      <div className={`relative overflow-hidden rounded-xl bg-[#eaddcf] mb-4 ${aspectRatio}`}>
        {product.badge && (
           <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm z-20">
             {product.badge}
           </div>
        )}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
        <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        />
        <button 
            className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm z-20 hover:bg-primary hover:text-white"
            onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
            }}
        >
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-lg text-text-main group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-xs text-text-sub uppercase tracking-wider mt-1">{product.color || product.subTitle || product.category}</p>
        </div>
        <span className="font-display font-medium text-text-main">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};
