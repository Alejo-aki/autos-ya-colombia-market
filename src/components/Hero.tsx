
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-autosya-primary/90 to-autosya-primary/70">
        {/* Background image - using a div with background for better control */}
        <div 
          className="absolute inset-0 mix-blend-overlay bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" 
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Encuentra o vende tu auto usado fácilmente
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            La plataforma más segura y confiable de Colombia
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-autosya-secondary hover:bg-autosya-secondary/90 text-white px-6 py-3 text-lg rounded-md">
              Comprar auto
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-3 text-lg rounded-md">
              Vender auto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
