import React from 'react';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';

export const Apparel: React.FC = () => {
  const apparelProducts = PRODUCTS.filter(p => p.category === 'Apparel');

  return (
    <main className="flex-grow px-6 lg:px-12 pb-20 w-full max-w-[1600px] mx-auto relative z-10">
        <div className="pt-8 pb-12">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-6 font-display">
                <Link to="/" className="text-text-sub hover:text-primary transition-colors">Home</Link>
                <span className="text-text-sub/40">/</span>
                <span className="text-primary font-medium">Apparel</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-main font-light mb-4">
                        The Collection
                    </h1>
                    <p className="text-text-sub max-w-lg text-lg font-light leading-relaxed">
                        Pieces woven from the earth, designed for the wandering soul. Discover our latest curation of sustainable linen and gauze.
                    </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-sub font-medium pb-1">
                    <span>Showing {apparelProducts.length} Products</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
            <aside className="w-full lg:w-64 flex-shrink-0">
                <div className="lg:sticky lg:top-32 space-y-8 pr-4">
                    <div className="border-b border-text-main/10 pb-6">
                         <div className="flex items-center justify-between mb-4 group cursor-pointer">
                            <h3 className="font-serif text-lg text-text-main flex items-center gap-2">Category</h3>
                            <span className="material-symbols-outlined text-lg opacity-40">remove</span>
                         </div>
                         <ul className="space-y-3 text-sm font-medium text-text-sub">
                            <li><a className="hover:text-primary transition-colors flex items-center justify-between" href="#">All Apparel <span className="opacity-40 font-light">24</span></a></li>
                            <li><a className="text-primary transition-colors flex items-center justify-between" href="#">Dresses & Jumpsuits <span className="opacity-40 font-light">8</span></a></li>
                            <li><a className="hover:text-primary transition-colors flex items-center justify-between" href="#">Tops & Blouses <span className="opacity-40 font-light">12</span></a></li>
                        </ul>
                    </div>
                     <div className="pb-6">
                        <div className="flex items-center justify-between mb-4 group cursor-pointer">
                            <h3 className="font-serif text-lg text-text-main flex items-center gap-2">Color</h3>
                             <span className="material-symbols-outlined text-lg opacity-40">add</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button aria-label="Terracotta" className="w-6 h-6 rounded-full bg-[#8c3a28] ring-2 ring-offset-2 ring-transparent hover:ring-text-main/20 transition-all"></button>
                            <button aria-label="Sage" className="w-6 h-6 rounded-full bg-[#5d6b58] ring-2 ring-offset-2 ring-transparent hover:ring-text-main/20 transition-all"></button>
                            <button aria-label="Sand" className="w-6 h-6 rounded-full bg-[#e3d8c8] border border-black/10 ring-2 ring-offset-2 ring-transparent hover:ring-text-main/20 transition-all"></button>
                            <button aria-label="Clay" className="w-6 h-6 rounded-full bg-[#b87a6d] ring-2 ring-offset-2 ring-transparent hover:ring-text-main/20 transition-all"></button>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="flex-grow min-w-0">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                     {apparelProducts.map((product) => (
                         <div key={product.id} className="break-inside-avoid mb-8">
                             <ProductCard product={product} />
                         </div>
                     ))}
                </div>
                <div className="mt-16 flex justify-center">
                    <button className="px-8 py-3 border border-text-main/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-bold tracking-widest uppercase rounded-full">
                        Load More
                    </button>
                </div>
            </div>
        </div>
    </main>
  );
};
