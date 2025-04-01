
import React from 'react';
import { Button } from "@/components/ui/button";

const SellerSection = () => {
  return (
    <section className="py-16 bg-autosya-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres vender tu auto?</h2>
          <p className="text-xl mb-8">
            Publica tu auto en minutos y llega a miles de compradores en Colombia
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="w-16 h-16 bg-autosya-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Toma fotos</h3>
              <p className="text-white/80">
                Toma buenas fotos de tu auto por dentro y por fuera
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="w-16 h-16 bg-autosya-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Crea tu anuncio</h3>
              <p className="text-white/80">
                Describe tu auto y establece un precio competitivo
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="w-16 h-16 bg-autosya-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"></path>
                  <path d="m21 15-3-3-3 3"></path>
                  <path d="M18 12v8"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Publica y vende</h3>
              <p className="text-white/80">
                Recibe contactos y vende tu auto de forma segura
              </p>
            </div>
          </div>
          
          <Button className="bg-autosya-accent text-autosya-primary hover:bg-autosya-accent/90 font-bold text-lg px-8 py-6">
            Publica tu auto ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
