import React from 'react';
import { Link } from 'react-router-dom';

export const Editorial: React.FC = () => {
  return (
    <main className="flex flex-col w-full">
        {/* Banner */}
        <section className="relative w-full py-20 lg:py-32 px-6 lg:px-12 overflow-hidden bg-paper">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Image */}
                    <div className="w-full lg:w-3/5 relative group">
                        <div className="relative w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden shadow-xl shadow-ink/5" style={{borderRadius: "2rem 5rem 2rem 5rem"}}>
                            <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
                            <img 
                                alt="Woman in linen dress walking through tall sunlit grass" 
                                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYjflNsIEudIDhKGRi615w0HufTZfPKQp6Phdu24j3vByjY335E3lFq-26JdmAnmuo7Vs3wIvvs5ck3Q_palySxw4q8l9Yn5G3cSrFUZqOVhFIIeK-aiL-QVQyxB0_oLYHYKxk1RK8maBWnjpM1mpouzWGq19qoRQdiRjZeuZwEv1nVMizILCubGQ_SdmrexW31GD6-JVCmcjRTvzqla67sWJPcQBzn3lXct6Fx3RB9B4kehkYmY8C2viWybBT_3Ns7VuI2PLkl8"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-4 md:bottom-8 md:-right-8 bg-cream/90 backdrop-blur px-6 py-4 rounded-tl-2xl rounded-br-2xl shadow-sm border border-paper hidden md:block">
                            <p className="font-serif italic text-ink text-sm">Spring Collection '24</p>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="w-full lg:w-2/5 flex flex-col gap-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <span className="inline-block text-primary uppercase tracking-[0.2em] text-xs font-bold">Philosophy</span>
                            <h1 className="text-5xl lg:text-6xl font-serif font-light text-ink italic leading-[1.1]">
                                Curated for <br/> <span className="not-italic font-normal">the Soul</span>
                            </h1>
                        </div>
                        <div className="relative">
                            <div className="hidden lg:block absolute -left-6 top-2 bottom-2 w-[1px] bg-ink/20"></div>
                            <p className="text-ink/80 text-lg leading-relaxed font-light">
                                Fashion is more than fabric; it is a canvas for your spirit. We blend sustainable practices with artisanal craft to bring you pieces that tell a story—woven from the earth, designed for the wanderer.
                            </p>
                        </div>
                        <div className="pt-4 flex justify-center lg:justify-start">
                            <button className="group flex items-center gap-3 px-8 py-4 bg-ink text-cream rounded-full hover:bg-primary transition-all duration-300 shadow-lg shadow-ink/20 hover:shadow-primary/30">
                                <span className="font-bold tracking-wide text-sm uppercase">Explore Our Story</span>
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Newsletter */}
        <section className="relative w-full py-24 lg:py-40 bg-cream">
            <svg className="absolute top-10 left-0 w-64 h-64 text-secondary/20 -translate-x-1/2" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 200C100 200 80 150 20 120C-40 90 20 20 20 20" stroke="currentColor" strokeWidth="1.5"></path>
                <path d="M100 200C100 200 120 140 180 100" stroke="currentColor" strokeWidth="1.5"></path>
            </svg>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-10">
                    <div className="space-y-4">
                        <span className="material-symbols-outlined text-4xl text-primary animate-pulse">filter_vintage</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-ink italic">Join the Tribe</h2>
                        <p className="text-ink/70 text-base md:text-lg max-w-md mx-auto leading-relaxed">
                            Receive weekly musings, first access to artisanal drops, and exclusive gallery invites directly to your inbox.
                        </p>
                    </div>
                    <form className="w-full max-w-md flex flex-col gap-8 items-center mt-4 group">
                        <div className="relative w-full">
                            <input className="w-full bg-transparent border-0 border-b border-primary/40 px-0 py-4 text-center text-ink text-lg placeholder-ink/30 focus:ring-0 focus:border-primary transition-colors duration-300 peer" placeholder="Enter your email address" type="email"/>
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-out peer-focus:w-full"></div>
                        </div>
                        <button className="relative overflow-hidden rounded-full bg-secondary text-white px-10 py-3.5 font-bold tracking-wider text-sm hover:bg-primary transition-colors duration-300 shadow-md hover:shadow-lg shadow-secondary/20" type="button">
                            <span className="relative z-10 flex items-center gap-2">
                                SIGN UP
                                <span className="material-symbols-outlined text-sm">mail</span>
                            </span>
                        </button>
                    </form>
                    <p className="text-xs text-ink/40 font-medium tracking-wide">
                        RESPECTING YOUR PRIVACY & PEACE.
                    </p>
                </div>
            </div>
        </section>
    </main>
  );
};