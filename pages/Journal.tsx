import React from 'react';

export const Journal: React.FC = () => {
  return (
    <main className="flex-grow w-full relative z-10 pb-24">
        {/* Header */}
        <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent-sage/20 mix-blend-multiply filter blur-[80px] rounded-full opacity-60"></div>
            <div className="absolute top-[100px] left-[-100px] w-[400px] h-[400px] bg-primary/10 mix-blend-multiply filter blur-[80px] rounded-full opacity-50"></div>
        </div>

        <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 text-center px-6 flex flex-col items-center justify-center animate-fadeIn">
            <div className="w-16 h-16 text-primary mb-6 opacity-90 transform -rotate-12">
                 <svg fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 85 C50 85 48 60 30 40 C20 28 10 30 5 40 C0 30 5 15 25 10 C40 5 48 30 50 40 C52 30 60 5 75 10 C95 15 100 30 95 40 C90 30 80 28 70 40 C52 60 50 85 50 85 Z" opacity="0.6"></path>
                    <path d="M50 95 L50 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                 </svg>
            </div>
            <span className="font-display uppercase tracking-[0.3em] text-xs font-semibold text-text-sub mb-3">Stories & Musings</span>
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-text-main dark:text-[#eaddcf] tracking-tight">
                The Journal
            </h1>
        </section>

        {/* Featured */}
        <section className="px-4 md:px-6 lg:px-12 max-w-[1400px] mx-auto mb-24 relative">
             <div className="group relative w-full cursor-pointer">
                <div className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-[2rem] shadow-xl shadow-text-main/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                    <img alt="Journal Hero" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjigXpglYo4leeMTu45JnJkXx1nU7aJ7aUJaK5Vls2fysIVGtOYNRfMNV8VXiQ1ihTdUwvRZ5lDgtW8FvbPBX_vVJdvj7bbHDa7EZ5luhhWn04fvDCuFcGcyLUxT0fti3ZyV5hMgMiDJ6y-0b8iShRwhJLgaxudU9NJCTrxfIML9RAFHhh4993OmrPc_GTpk_UKfiRw_MfNTepMM3BhuURPqBPoEyY83NR6_AOCBLi_5BJ9WlBUBpLPyDwcb6GET8T2R6YZnaPSE4"/>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 lg:p-16 z-20 flex flex-col items-start justify-end pointer-events-none">
                    <div className="bg-background-light/95 dark:bg-background-dark/90 backdrop-blur-md p-6 md:p-10 rounded-tr-[3rem] rounded-bl-[1.5rem] rounded-br-lg rounded-tl-lg shadow-lg border border-white/20 max-w-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <div className="flex items-center gap-3 mb-3 text-xs font-bold tracking-widest uppercase text-accent-sage">
                            <span>Oct 12, 2023</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>Editorial</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-text-main dark:text-[#eaddcf] mb-4">
                            The Art of <br/><span className="italic font-light text-primary">Slow Living</span>
                        </h2>
                        <p className="text-text-main/80 dark:text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3 mb-6 font-light">
                            In a world that demands speed, we choose rhythm. Discover how reconnecting with nature's pace can transform your wardrobe and your spirit.
                        </p>
                        <span className="inline-flex items-center gap-2 font-script text-2xl text-primary hover:text-text-main transition-colors group-hover:translate-x-2 duration-300">
                            Read Full Story <span className="material-symbols-outlined text-[20px] pt-1">arrow_right_alt</span>
                        </span>
                    </div>
                </div>
             </div>
        </section>

        {/* Grid */}
        <section className="px-6 lg:px-12 max-w-[1280px] mx-auto relative">
             <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] bg-accent-teal/10 organic-blob-1 mix-blend-multiply blur-3xl z-0 pointer-events-none"></div>
             <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 organic-blob-2 mix-blend-multiply blur-3xl z-0 pointer-events-none"></div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start relative z-10">
                <article className="flex flex-col gap-6 group cursor-pointer">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-[#f0ebe5]">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                        <img alt="Natural pigments" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeIod0vV17vUMpC7TkI79sNAxa6yB3-WWXfI-E3vWaFqHqVzduEbM2-p3OIp5ZaRs3p7kZbINwKpbAz8GF6HjF9catpYnPmJTzqhT7ofkDUnYPfhhur8CzAxasfyJyiBVQZj2qp3CiTm_JlrvQAGCzj9wDE_3YS2FcaMHClMAis3AW3vfxrhSkdI3EQ96iEkvdSFnV137Fh33KYSdwjppQv-t_qdKh-hdlZb_iyKvNF0WPmDMqmMueVGr0edkXoi2n-go9bUg7SOM"/>
                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm z-20">Sep 28</div>
                    </div>
                    <div className="space-y-3 px-2">
                         <h3 className="text-2xl md:text-3xl font-serif leading-tight text-text-main dark:text-[#eaddcf] group-hover:text-primary transition-colors">
                            Dyeing with Earth: <br/> <span className="italic text-text-sub font-light">A Guide to Natural Pigments</span>
                         </h3>
                         <div className="pt-2">
                             <span className="font-script text-xl text-accent-sage group-hover:text-primary transition-colors flex items-center gap-2">Read More</span>
                         </div>
                    </div>
                </article>

                <article className="flex flex-col gap-6 group cursor-pointer md:mt-32">
                     <div className="relative w-full aspect-[4/5] overflow-hidden rounded-tr-[5rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg bg-[#f0ebe5]">
                        <div className="absolute inset-0 bg-accent-sage/10 group-hover:bg-transparent transition-colors z-10"></div>
                        <img alt="Artisan working" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvug5DmWwLVYz3uIwMFPrYKSjKaN3iZUuxn9rIcoEX1vtZY_YUxyUtESLkQJ4peYEcK0HAUZ7F906u6-HTvEVkPhfNXjvQPeQkhAMJzkCVBiMj7CdjBOPck5wE6djRaQNv3CVzROifcu_VuGaFZ9IMH6ziH5e9MLvL88pxVfutBuwOPYEdFhv5iFTcNqaFu8LQXOUMJCkiGBxQGOMNlUHPoLhQC_qbr2JeE-F4vARZ7oOhB5p-rFSO6OVIwvpXAdQkG2vXw_0mOsA"/>
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm z-20">Sep 15</div>
                     </div>
                     <div className="space-y-3 px-2">
                         <h3 className="text-2xl md:text-3xl font-serif leading-tight text-text-main dark:text-[#eaddcf] group-hover:text-primary transition-colors">
                            Behind the Seams: <br/> <span className="italic text-text-sub font-light">Our Sustainable Journey</span>
                         </h3>
                         <div className="pt-2">
                             <span className="font-script text-xl text-accent-sage group-hover:text-primary transition-colors flex items-center gap-2">Read More</span>
                         </div>
                    </div>
                </article>
             </div>
        </section>
    </main>
  );
};
