
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-bold text-autosya-primary">Autos<span className="text-autosya-secondary">Ya</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-autosya-dark hover:text-autosya-secondary transition-colors font-medium">Inicio</Link>
          <Link to="/comprar" className="text-autosya-dark hover:text-autosya-secondary transition-colors font-medium">Comprar</Link>
          <Link to="/vender" className="text-autosya-dark hover:text-autosya-secondary transition-colors font-medium">Vender</Link>
          <Link to="/contacto" className="text-autosya-dark hover:text-autosya-secondary transition-colors font-medium">Contacto</Link>
        </nav>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-autosya-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
