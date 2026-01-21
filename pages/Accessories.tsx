import React from 'react';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';

export const Accessories: React.FC = () => {
  const accessoryProducts = PRODUCTS.filter(p => p.category === 'Accessories');

  return (
    <main className="flex-grow w-full px-6 lg:px-12 pb-20 pt-8 relative">
        <section className="relative w-full mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:pr-12 order-2 lg:order-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-text-sub text-sm tracking-wider uppercase">
                        <span>Home</span>
                        <span className="w-4 h-px bg-primary/40"></span>
                        <span className="text-primary font-semibold">Accessories</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-serif text-text-main mb-6 leading-tight">
                        Curated <br/>
                        <span className="italic text-primary">Artifacts</span>
                    </h1>
                    <p className="text-lg text-text-main/70 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
                        Discover our hand-selected collection of artisan jewelry, woven textures, and earth-inspired accents designed to ground your spirit.
                    </p>
                </div>
                <div className="relative order-1 lg:order-2 h-[400px] lg:h-[500px] w-full flex justify-center lg:justify-end">
                    <div className="absolute inset-0 bg-accent-sage/20 rounded-t-[50%] rounded-b-[2rem] transform translate-x-4 translate-y-4 lg:w-[90%] lg:ml-auto"></div>
                    <div className="relative w-full lg:w-[90%] h-full rounded-t-[50%] rounded-b-[2rem] overflow-hidden shadow-xl z-10 group">
                        <img alt="Accessories collection featured image" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjigXpglYo4leeMTu45JnJkXx1nU7aJ7aUJaK5Vls2fysIVGtOYNRfMNV8VXiQ1ihTdUwvRZ5lDgtW8FvbPBX_vVJdvj7bbHDa7EZ5luhhWn04fvDCuFcGcyLUxT0fti3ZyV5hMgMiDJ6y-0b8iShRwhJLgaxudU9NJCTrxfIML9RAFHhh4993OmrPc_GTpk_UKfiRw_MfNTepMM3BhuURPqBPoEyY83NR6_AOCBLi_5BJ9WlBUBpLPyDwcb6GET8T2R6YZnaPSE4"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative flex flex-col lg:flex-row gap-12 lg:gap-20">
             {/* Spinning decoration */}
             <div className="absolute -top-20 -left-20 w-96 h-96 pointer-events-none opacity-20 text-accent-sage z-0 hidden lg:block">
                 <svg className="w-full h-full animate-spin-super-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" fill="none" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10"></circle>
                 </svg>
             </div>

             <aside className="w-full lg:w-64 flex-shrink-0 relative z-10">
                <div className="lg:sticky lg:top-32 space-y-8 lg:pr-8 border-b lg:border-b-0 lg:border-r border-primary/20 pb-8 lg:pb-0">
                    <div className="hidden lg:block space-y-8">
                        <div>
                            <h3 className="font-serif text-lg font-medium mb-4 text-text-main">Category</h3>
                            <ul className="space-y-3">
                                <li><a className="text-primary font-medium flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>All Accessories</a></li>
                                <li><a className="text-text-sub hover:text-primary transition-colors" href="#">Jewelry</a></li>
                                <li><a className="text-text-sub hover:text-primary transition-colors" href="#">Bags & Totes</a></li>
                            </ul>
                        </div>
                        <div>
                             <h3 className="font-serif text-lg font-medium mb-4 text-text-main">Material</h3>
                             <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-text-sub hover:text-primary cursor-pointer"><div className="w-4 h-4 border border-current rounded flex items-center justify-center"></div> Gold Vermeil</li>
                                <li className="flex items-center gap-2 text-text-sub hover:text-primary cursor-pointer"><div className="w-4 h-4 border border-current rounded flex items-center justify-center"></div> Sterling Silver</li>
                             </ul>
                        </div>
                    </div>
                </div>
             </aside>

             <div className="flex-grow relative z-10">
                 <div className="flex justify-between items-center mb-8">
                     <span className="text-sm text-text-sub font-display">Showing {accessoryProducts.length} results</span>
                     <div className="flex items-center gap-2 cursor-pointer group">
                         <span className="text-sm font-medium text-text-main group-hover:text-primary">Sort by: Featured</span>
                         <span className="material-symbols-outlined text-[18px] text-text-sub group-hover:text-primary">expand_more</span>
                     </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                     {accessoryProducts.map((product, idx) => (
                         <div key={product.id} className={`${idx % 2 === 1 ? 'md:mt-12' : ''}`}>
                             <ProductCard 
                                product={product} 
                                aspectRatio="aspect-[4/5]" 
                                className="h-full"
                             />
                         </div>
                     ))}
                 </div>

                 <div className="mt-20 flex justify-center">
                    <button className="group relative px-8 py-3 bg-transparent border border-primary text-text-main font-bold tracking-wide rounded-full hover:bg-primary hover:text-white transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">Load More Artifacts</span>
                    </button>
                 </div>
             </div>
        </section>
    </main>
  );
};
