
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CarCardProps {
  imageUrl: string;
  name: string;
  price: string;
  year: string;
  mileage: string;
  location: string;
}

const CarCard = ({ imageUrl, name, price, year, mileage, location }: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-autosya-dark">{name}</h3>
        <p className="text-xl font-bold text-autosya-primary mt-1">{price}</p>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {year}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2c-.2.3-.1.7.1 1 .2.3.6.4.9.3.6-.3 1.3-.1 1.7.5.4.7.2 1.6-.5 1.9-.3.2-.5.4-.5.8 0 .5.4.9.9.9H7"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <path d="M16 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            </svg>
            {mileage} km
          </div>
          <div className="flex items-center text-sm text-gray-600 col-span-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
              <path d="M12 21c-5.5 0-10-4.5-10-10S6.5 1 12 1s10 4.5 10 10-4.5 10-10 10"></path>
              <path d="M12 12v9"></path>
              <path d="M12 12 8.5 8.5"></path>
              <path d="M12 12l7 3"></path>
            </svg>
            {location}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-autosya-secondary hover:bg-autosya-secondary/90 text-white">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
