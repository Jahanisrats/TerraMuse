import React from 'react';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';

export const NewArrivals: React.FC = () => {
  // Just grabbing a few products to simulate new arrivals
  const newArrivals = [PRODUCTS[0], PRODUCTS[12], PRODUCTS[11], PRODUCTS[10], PRODUCTS[9]];

  return (
    <div className="flex flex-col min-h-screen w-full">
         <section className="relative w-full pt-16 pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0 flex justify-center items-start pt-10 opacity-30 pointer-events-none">
                <div className="w-[800px] h-[800px] rounded-full bg-sand/40 blur-3xl mix-blend-multiply"></div>
                <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-accent-sage/20 blur-3xl mix-blend-multiply"></div>
            </div>
            <div className="relative z-10 container mx-auto px-6 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-accent-sage font-bold mb-3 block">Spring Collection 2024</span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-text-main dark:text-[#eaddcf] leading-tight relative">
                    Fresh From <br/>
                    <span className="font-hand text-6xl md:text-8xl lg:text-9xl text-primary -mt-4 block transform -rotate-2">the Earth</span>
                </h1>
                <div className="absolute -top-10 -left-10 w-20 h-20 border border-primary/20 rounded-full opacity-60 hidden md:block"></div>
                <p className="mt-8 max-w-lg mx-auto text-text-sub text-lg leading-relaxed">
                    Pieces inspired by the raw beauty of nature. Breathable linens, hand-dyed cottons, and silhouettes that flow with the wind.
                </p>
            </div>
         </section>

         {/* Filter Bar */}
         <div className="sticky top-[81px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-y border-text-main/10 py-4 mb-12">
            <div className="container mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-text-sub overflow-x-auto no-scrollbar">
                    <span className="font-serif text-text-main whitespace-nowrap">Filter by:</span>
                    <button className="px-4 py-1.5 rounded-full border border-text-main/20 hover:border-primary hover:text-primary transition-colors bg-white/50 dark:bg-black/20 whitespace-nowrap">All Categories</button>
                    <button className="px-4 py-1.5 rounded-full border border-text-main/20 hover:border-primary hover:text-primary transition-colors bg-white/50 dark:bg-black/20 whitespace-nowrap">Dresses</button>
                    <button className="px-4 py-1.5 rounded-full border border-text-main/20 hover:border-primary hover:text-primary transition-colors bg-white/50 dark:bg-black/20 whitespace-nowrap">Tops</button>
                </div>
                <div className="flex items-center gap-6 ml-auto">
                    <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                        Sort <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </button>
                </div>
            </div>
         </div>

         <main className="flex-grow px-6 lg:px-12 pb-24 container mx-auto relative">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 relative z-10">
                
                {/* Featured Item Large */}
                <div className="lg:col-span-8">
                     <ProductCard product={newArrivals[0]} aspectRatio="aspect-[4/3] md:aspect-[16/10]" />
                </div>

                {/* Secondary Featured */}
                <div className="lg:col-span-4 mt-12 lg:mt-0">
                     <ProductCard product={newArrivals[1]} aspectRatio="aspect-[3/4]" className="lg:translate-y-8" />
                </div>

                {/* Quote Break */}
                <div className="lg:col-span-12 py-16 flex justify-center relative">
                    <p className="font-serif italic text-2xl md:text-3xl text-center max-w-2xl text-text-main/80 leading-relaxed">
                        "Clothing that feels like a second skin, embracing the natural rhythms of your body."
                    </p>
                </div>

                {/* Grid Items */}
                <div className="md:col-span-1 lg:col-span-4">
                    <ProductCard product={newArrivals[2]} />
                </div>
                <div className="md:col-span-1 lg:col-span-4 lg:translate-y-16">
                     <ProductCard product={newArrivals[3]} aspectRatio="aspect-[4/5]" />
                </div>
                <div className="md:col-span-1 lg:col-span-4">
                     <ProductCard product={newArrivals[4]} aspectRatio="aspect-[4/5] rounded-[2rem] rounded-br-[8rem]" />
                </div>

                <div className="col-span-1 lg:col-span-12 flex justify-center mt-12 lg:mt-24">
                    <button className="group relative px-10 py-4 bg-transparent border border-primary text-primary hover:text-white hover:bg-primary text-sm font-bold tracking-widest uppercase transition-all duration-500 overflow-hidden rounded-full">
                        <span className="relative z-10">Load More</span>
                    </button>
                </div>
             </div>
         </main>
    </div>
  );
};
