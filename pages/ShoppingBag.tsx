import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

export const ShoppingBag: React.FC = () => {
  const { items, total, updateQuantity, removeFromCart } = useCart();

  return (
    <main className="flex-grow relative px-6 lg:px-12 py-10 lg:py-16">
         {/* Bg decoration */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-sage/10 mix-blend-multiply filter blur-3xl rounded-full opacity-50 dark:opacity-10 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 mix-blend-multiply filter blur-3xl rounded-full opacity-60 dark:opacity-10 -translate-x-1/4 translate-y-1/4"></div>
         </div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-12 flex items-baseline gap-4 border-b border-text-main/10 pb-6">
                <h1 className="text-4xl lg:text-5xl font-serif font-light text-text-main dark:text-[#eaddcf]">Shopping Bag</h1>
                <span className="text-xl text-text-sub font-light">({items.length} items)</span>
            </div>

            {items.length === 0 ? (
                <div className="text-center py-20">
                     <p className="text-2xl font-serif mb-6">Your bag is currently empty.</p>
                     <Link to="/new-arrivals" className="text-primary hover:underline underline-offset-4">Continue Shopping</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-8 flex flex-col gap-0">
                        {items.map((item) => (
                            <div key={item.id} className="group py-8 first:pt-0 border-b border-text-main/10 relative animate-fadeIn">
                                <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                                    <div className="w-full sm:w-40 lg:w-48 aspect-[3/4] bg-[#f0ece6] rounded-xl overflow-hidden relative shadow-sm">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"/>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-2xl font-serif text-text-main dark:text-[#eaddcf]">{item.name}</h3>
                                                <span className="text-lg font-medium text-text-main dark:text-[#eaddcf]">${item.price.toFixed(2)}</span>
                                            </div>
                                            <p className="text-text-sub text-sm tracking-wide">{item.color} {item.category === "Apparel" ? "/ Medium" : ""}</p>
                                            <p className="text-text-sub/80 text-xs mt-1">In Stock - Ships in 2-3 business days</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-6 sm:mt-0">
                                             <div className="flex items-center gap-3">
                                                <span className="text-sm text-text-sub mr-2">Qty</span>
                                                <div className="flex items-center border border-text-main/20 rounded-full h-10 px-1">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-full flex items-center justify-center text-text-sub hover:text-primary transition-colors hover:bg-black/5 rounded-full">
                                                        <span className="material-symbols-outlined text-[16px]">remove</span>
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-medium text-text-main dark:text-[#eaddcf]">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-full flex items-center justify-center text-text-sub hover:text-primary transition-colors hover:bg-black/5 rounded-full">
                                                        <span className="material-symbols-outlined text-[16px]">add</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="font-serif italic text-text-sub hover:text-primary transition-colors text-lg decoration-1 underline-offset-4 hover:underline">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                         <div className="pt-8">
                            <Link to="/new-arrivals" className="inline-flex items-center gap-2 text-primary font-medium hover:text-text-main transition-colors group">
                                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-4 mt-8 lg:mt-0">
                         <div className="bg-[#f4efe9] dark:bg-[#24211e] rounded-[2rem] p-8 lg:p-10 sticky top-28 shadow-xl shadow-[#6B3E2D]/5 animate-[fadeIn_0.5s_ease-out_0.2s_both]">
                            <h2 className="font-serif text-2xl mb-8 text-text-main dark:text-[#eaddcf]">Order Summary</h2>
                            <div className="space-y-4 text-text-main/80 dark:text-[#eaddcf]/80 pb-6 border-b border-text-main/10">
                                <div className="flex justify-between text-sm">
                                    <span>Subtotal</span>
                                    <span className="font-medium">${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Shipping</span>
                                    <span className="text-accent-sage font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Estimated Tax</span>
                                    <span className="font-medium">$0.00</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-6">
                                <span className="text-lg font-bold text-text-main dark:text-[#eaddcf]">Total</span>
                                <span className="text-xl font-serif font-bold text-text-main dark:text-[#eaddcf]">${total.toFixed(2)}</span>
                            </div>
                            <button className="w-full py-4 bg-primary text-white text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-[#964a3a] transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5 mb-4">
                                Checkout
                            </button>
                            <p className="text-center text-xs text-text-sub flex items-center justify-center gap-1 opacity-70">
                                <span className="material-symbols-outlined text-[14px]">lock</span>
                                Secure Checkout
                            </p>
                         </div>
                    </div>
                </div>
            )}
         </div>
    </main>
  );
};