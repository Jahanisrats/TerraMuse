import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { Apparel } from './pages/Apparel';
import { Accessories } from './pages/Accessories';
import { Editorial } from './pages/Editorial';
import { Journal } from './pages/Journal';
import { NewArrivals } from './pages/NewArrivals';
import { ShoppingBag } from './pages/ShoppingBag';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // We use different nav style for New Arrivals & Editorial, handling that inside those components if needed,
  // but for simplicity we keep the main Navbar visible on all pages, 
  // except we might want to hide it on specific layout if the design demanded it.
  // Here, NewArrivals and Accessories implement their own sticky headers, so we might want to render Navbar conditionally or handle styling.
  // Based on the provided design, the Navbar is consistent.
  
  // Actually, NewArrivals and Accessories use `Navigation sticky={true}` in the draft logic. 
  // Let's stick to a single global Navbar for consistency in this App structure to avoid prop drilling complexity in the main file,
  // unless we detect the route.
  
  // Refined approach: The pages (Apparel, etc) have specific header needs.
  // To keep it simple and cleaner, let's remove the Navbar from here and let pages include it if they need custom styling,
  // OR make the global Navbar smart.
  // Given the design, a global sticky Navbar works best.
  
  return (
    <div className="relative flex flex-col min-h-screen w-full z-10">
       <Navbar />
       {children}
       <footer className="bg-primary/5 border-t border-primary/10 py-12 px-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-text-main">spa</span>
                <h2 className="font-serif text-xl font-bold tracking-tight text-text-main">TerraMuse</h2>
            </div>
            <p className="text-text-sub text-sm max-w-xs">An artistic sanctuary for the free-spirited.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-text-main">
            <a className="hover:text-primary transition-colors cursor-pointer">Our Story</a>
            <a className="hover:text-primary transition-colors cursor-pointer">Sustainability</a>
            <a className="hover:text-primary transition-colors cursor-pointer">Careers</a>
            <a className="hover:text-primary transition-colors cursor-pointer">Terms</a>
          </div>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full border border-text-main/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer">
                <span className="font-bold text-xs">IG</span>
             </div>
             <div className="w-8 h-8 rounded-full border border-text-main/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer">
                <span className="font-bold text-xs">PI</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgCsgf-kNsPC6OEIBtlEKVS_W7QbtQECXUPLpeHKwcM-NRT6utMp4v6Z8xS6E8LSIW9ZjjhE0ttAr-Dy1uLwmDKsyRiUKbjR9uITBYLOlw-bQXiF2UvD1BQ70MNXopS6qRqVMUaapsK5WKPIK6tzHEUYZ2noiIDHZVHp_TvV7iHy7Ed4hcSj2I_v5R2h1dstGjLfmkIr84xzK5eVd4WvcOm5WerNgkC7GHVSVyJBc8lVF1OHDHFe70wwks71yYmy39MSLVzae4ZMI')"}}></div>
        <Layout>
            <CartDrawer />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/apparel" element={<Apparel />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/editorial" element={<Editorial />} />
            <Route path="/bag" element={<ShoppingBag />} />
            </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;