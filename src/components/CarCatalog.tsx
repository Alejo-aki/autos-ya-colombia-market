
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import CarCard from './CarCard';

const CarCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample cars data
  const cars = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80",
      name: "Toyota Corolla",
      price: "$45,000,000 COP",
      year: "2018",
      mileage: "65,000",
      location: "Bogotá, Colombia"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Ford Fiesta",
      price: "$60,000,000 COP",
      year: "2020",
      mileage: "32,000",
      location: "Medellín, Colombia"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Chevrolet Spark",
      price: "$25,000,000 COP",
      year: "2015",
      mileage: "98,000",
      location: "Cali, Colombia"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Mazda 3",
      price: "$55,000,000 COP",
      year: "2019",
      mileage: "45,000",
      location: "Barranquilla, Colombia"
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80",
      name: "Renault Sandero",
      price: "$32,000,000 COP",
      year: "2017",
      mileage: "72,000",
      location: "Cartagena, Colombia"
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Kia Sportage",
      price: "$75,000,000 COP",
      year: "2021",
      mileage: "18,000",
      location: "Bucaramanga, Colombia"
    }
  ];
  
  return (
    <section className="py-16 bg-autosya-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-autosya-primary mb-8 text-center">Autos Disponibles</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <Input
                placeholder="Buscar por marca, modelo, año..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Marca" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="chevrolet">Chevrolet</SelectItem>
                  <SelectItem value="mazda">Mazda</SelectItem>
                  <SelectItem value="renault">Renault</SelectItem>
                  <SelectItem value="kia">Kia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="range1">$0 - $30,000,000</SelectItem>
                  <SelectItem value="range2">$30,000,000 - $60,000,000</SelectItem>
                  <SelectItem value="range3">$60,000,000 - $90,000,000</SelectItem>
                  <SelectItem value="range4">$90,000,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-center md:justify-end">
            <Button className="bg-autosya-primary hover:bg-autosya-primary/90">
              Buscar
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard 
              key={car.id}
              imageUrl={car.imageUrl}
              name={car.name}
              price={car.price}
              year={car.year}
              mileage={car.mileage}
              location={car.location}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" className="border-autosya-primary text-autosya-primary hover:bg-autosya-primary hover:text-white">
            Ver más autos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarCatalog;
