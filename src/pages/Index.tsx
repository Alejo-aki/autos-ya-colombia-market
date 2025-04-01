
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CarCatalog from '@/components/CarCatalog';
import SellerSection from '@/components/SellerSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CarCatalog />
        <SellerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
