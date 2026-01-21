import React from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { items, isDrawerOpen, toggleDrawer, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  if (!isDrawerOpen) return null;

  return (
    <div aria-modal="true" className="fixed inset-0 z-[60] flex justify-end" role="dialog">
      <div 
        className="absolute inset-0 bg-background-dark/30 backdrop-blur-[2px] transition-opacity" 
        onClick={toggleDrawer}
      ></div>
      <aside className="relative w-full max-w-[500px] h-full bg-background-light shadow-2xl flex flex-col transform transition-transform border-l border-[#eaddcf] bg-paper-texture animate-[slideIn_0.3s_ease-out]">
        <div className="px-8 py-6 border-b border-text-main/10 flex items-center justify-between bg-white/40 backdrop-blur-md sticky top-0 z-10">
          <h2 className="font-serif text-2xl font-light text-text-main">Your Cart <span className="text-base text-text-sub font-display ml-2">({items.length})</span></h2>
          <button onClick={toggleDrawer} className="p-2 rounded-full hover:bg-black/5 transition-colors text-text-main">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10">
          {items.length === 0 ? (
             <div className="text-center py-20 opacity-50">
                 <span className="material-symbols-outlined text-6xl mb-4">shopping_bag</span>
                 <p className="font-serif text-xl">Your bag is empty.</p>
             </div>
          ) : (
             <div className="space-y-6">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-5 md:gap-6 py-2 group">
                    <div className="w-24 h-32 md:w-28 md:h-36 flex-shrink-0 relative overflow-hidden rounded-t-[3rem] rounded-b-lg shadow-md border border-white/50">
                        <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                        <div className="flex justify-between items-start gap-4">
                            <h3 className="font-serif text-lg md:text-xl text-text-main leading-snug">{item.name}</h3>
                            <span className="font-medium text-text-main font-serif italic">${item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-text-sub mt-1 font-light tracking-wide">{item.color || item.category}</p>
                        </div>
                        <div className="flex items-end justify-between mt-4">
                        <div className="flex items-center border border-text-main/20 rounded-full px-1 py-1 gap-1 bg-white/40">
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="size-7 flex items-center justify-center text-text-main hover:text-primary transition-colors rounded-full hover:bg-white/50"
                            >
                            <span className="material-symbols-outlined text-[16px]">remove</span>
                            </button>
                            <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="size-7 flex items-center justify-center text-text-main hover:text-primary transition-colors rounded-full hover:bg-white/50"
                            >
                            <span className="material-symbols-outlined text-[16px]">add</span>
                            </button>
                        </div>
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs uppercase tracking-widest text-text-sub/70 hover:text-primary border-b border-transparent hover:border-primary transition-colors pb-0.5"
                        >
                            Remove
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
             </div>
          )}
        </div>

        <div className="p-6 md:p-8 bg-white/60 backdrop-blur-md border-t border-text-main/10 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center text-xl font-serif text-text-main">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-text-sub flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">local_shipping</span>
              Shipping & taxes calculated at checkout
            </p>
          </div>
          <button 
            onClick={() => {
                toggleDrawer();
                navigate('/bag');
            }}
            className="w-full py-4 bg-primary text-white text-base font-bold tracking-wide rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hover:rounded-[50%_50%_30%_70%/50%_50%_70%_30%] transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-primary/40 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Proceed to Checkout
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
            <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </aside>
    </div>
  );
};
