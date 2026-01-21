import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';

export const Accessories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const accessoryProducts = useMemo(() => PRODUCTS.filter(p => p.category === 'Accessories'), []);

  // Extract unique categories and materials
  const categories = useMemo(() => {
    const cats = new Set(accessoryProducts.map(p => p.subCategory).filter((c): c is string => !!c));
    return Array.from(cats);
  }, [accessoryProducts]);

  const materials = useMemo(() => {
    const mats = new Set(accessoryProducts.map(p => p.material).filter((m): m is string => !!m));
    return Array.from(mats);
  }, [accessoryProducts]);

  const filteredProducts = useMemo(() => {
    let result = [...accessoryProducts];

    if (selectedCategory) {
      result = result.filter(p => p.subCategory === selectedCategory);
    }

    if (selectedMaterial) {
      result = result.filter(p => p.material === selectedMaterial);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }
    // 'featured' uses default order

    return result;
  }, [accessoryProducts, selectedCategory, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedMaterial(null);
  };

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

             {/* Mobile Filters Toggle */}
             <div className="lg:hidden w-full mb-6 z-20">
                <button
                  onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 border border-primary/20 rounded-lg text-text-main hover:bg-primary/5 transition-colors"
                >
                  <span className="font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined">filter_list</span>
                    Filters
                  </span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${isMobileFiltersOpen ? 'rotate-180' : ''}`}>expand_more</span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isMobileFiltersOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-white/50 p-4 rounded-lg border border-primary/10 space-y-6">
                    <div>
                        <h3 className="font-serif text-lg font-medium mb-3 text-text-main">Category</h3>
                        <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => setSelectedCategory(null)}
                              className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedCategory === null ? 'bg-primary text-white' : 'bg-transparent text-text-sub border border-primary/20'}`}
                            >
                              All
                            </button>
                            {categories.map(cat => (
                              <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                                className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-transparent text-text-sub border border-primary/20'}`}
                              >
                                {cat}
                              </button>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="font-serif text-lg font-medium mb-3 text-text-main">Material</h3>
                        <div className="flex flex-wrap gap-2">
                            {materials.map(mat => (
                              <button
                                key={mat}
                                onClick={() => setSelectedMaterial(mat === selectedMaterial ? null : mat)}
                                className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedMaterial === mat ? 'bg-primary text-white' : 'bg-transparent text-text-sub border border-primary/20'}`}
                              >
                                {mat}
                              </button>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>
             </div>

             <aside className="hidden lg:block w-64 flex-shrink-0 relative z-10">
                <div className="sticky top-32 space-y-8 pr-8 border-r border-primary/20">
                    <div>
                        <h3 className="font-serif text-lg font-medium mb-4 text-text-main">Category</h3>
                        <ul className="space-y-3">
                            <li>
                              <button
                                onClick={() => setSelectedCategory(null)}
                                className={`text-left w-full transition-colors flex items-center gap-2 ${selectedCategory === null ? 'text-primary font-medium' : 'text-text-sub hover:text-primary'}`}
                              >
                                {selectedCategory === null && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
                                All Accessories
                              </button>
                            </li>
                            {categories.map(cat => (
                              <li key={cat}>
                                <button
                                  onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                                  className={`text-left w-full transition-colors flex items-center gap-2 ${selectedCategory === cat ? 'text-primary font-medium' : 'text-text-sub hover:text-primary'}`}
                                >
                                  {selectedCategory === cat && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
                                  {cat}
                                </button>
                              </li>
                            ))}
                        </ul>
                    </div>

                    {materials.length > 0 && (
                      <div>
                           <h3 className="font-serif text-lg font-medium mb-4 text-text-main">Material</h3>
                           <ul className="space-y-3">
                              {materials.map(mat => (
                                <li key={mat}>
                                  <button
                                    onClick={() => setSelectedMaterial(mat === selectedMaterial ? null : mat)}
                                    className={`text-left w-full flex items-center gap-2 transition-colors cursor-pointer ${selectedMaterial === mat ? 'text-primary font-medium' : 'text-text-sub hover:text-primary'}`}
                                  >
                                    <div className={`w-4 h-4 border border-current rounded flex items-center justify-center ${selectedMaterial === mat ? 'bg-primary text-white border-primary' : ''}`}>
                                      {selectedMaterial === mat && <span className="material-symbols-outlined text-[10px]">check</span>}
                                    </div>
                                    {mat}
                                  </button>
                                </li>
                              ))}
                           </ul>
                      </div>
                    )}

                    {(selectedCategory || selectedMaterial) && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-primary underline hover:text-text-main transition-colors"
                      >
                        Clear All Filters
                      </button>
                    )}
                </div>
             </aside>

             <div className="flex-grow relative z-10 min-h-[500px]">
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                     <span className="text-sm text-text-sub font-display">Showing {filteredProducts.length} results</span>
                     <div className="flex items-center gap-2">
                         <span className="text-sm font-medium text-text-main whitespace-nowrap">Sort by:</span>
                         <div className="relative">
                            <select
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                              className="appearance-none bg-transparent border-none text-text-sub font-display text-sm focus:ring-0 cursor-pointer pr-8 py-1 hover:text-primary transition-colors"
                            >
                              <option value="featured">Featured</option>
                              <option value="price-asc">Price: Low to High</option>
                              <option value="price-desc">Price: High to Low</option>
                            </select>
                            <span className="material-symbols-outlined text-[18px] text-text-sub absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
                         </div>
                     </div>
                 </div>

                 {filteredProducts.length > 0 ? (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                       {filteredProducts.map((product, idx) => (
                           <div key={product.id} className={`${idx % 2 === 1 ? 'md:mt-12' : ''}`}>
                               <ProductCard
                                  product={product}
                                  aspectRatio="aspect-[4/5]"
                                  className="h-full"
                               />
                           </div>
                       ))}
                   </div>
                 ) : (
                   <div className="flex flex-col items-center justify-center py-20 text-center">
                     <span className="material-symbols-outlined text-4xl text-text-sub/50 mb-4">search_off</span>
                     <h3 className="text-xl font-serif text-text-main mb-2">No artifacts found</h3>
                     <p className="text-text-sub mb-6">Try adjusting your filters to discover more items.</p>
                     <button
                        onClick={clearFilters}
                        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                     >
                        Clear Filters
                     </button>
                   </div>
                 )}

                 {filteredProducts.length > 0 && filteredProducts.length < accessoryProducts.length && (
                    <div className="mt-20 flex justify-center">
                        <p className="text-text-sub text-sm">Viewing filtered selection</p>
                    </div>
                 )}
             </div>
        </section>
    </main>
  );
};
