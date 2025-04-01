
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Footer = () => {
  return (
    <footer className="bg-autosya-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-autosya-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@autosya.com" className="hover:text-autosya-secondary transition-colors">info@autosya.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-autosya-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+5712345678" className="hover:text-autosya-secondary transition-colors">+57 123 456 7890</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-autosya-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                  <path d="M12 21c-5.5 0-10-4.5-10-10S6.5 1 12 1s10 4.5 10 10-4.5 10-10 10"></path>
                  <path d="M12 12v9"></path>
                  <path d="M12 12 8.5 8.5"></path>
                  <path d="M12 12l7 3"></path>
                </svg>
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
          
          {/* Column 2: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-autosya-secondary transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-autosya-secondary transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-autosya-secondary transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Horario de atención</h4>
              <p className="text-sm text-gray-300">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-300">Sábados: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
          
          {/* Column 3: Language Selector */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Preferencias</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Idioma</label>
              <Select defaultValue="es">
                <SelectTrigger className="bg-white/10 border-0 focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="en">Inglés</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutosYa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
