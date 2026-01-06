import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '../../assets/logo.png';
import {vars, quickLinks} from '../../config/variables';


const WHATSAPP_NUMBER = vars.Num_CTA; 
const WHATSAPP_MESSAGE = vars.CTA_message;

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-custom section-padding py-0">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                <img src={logo} alt="SoptAir LOGO" className="" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground"><span className={`bg-clip-text text-transparent bg-gradient-to-l from-[${vars.grd_color1}] to-[${vars.grd_color2}] text-2xl`}>{vars.Logo_Titel1}</span> {vars.Logo_Titel2} </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4" />
                  Contactez-Nous
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-card shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-heading font-bold text-lg text-foreground">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex-1 py-6 px-4">
              <div className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3 rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground font-medium transition-all duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="p-4 border-t border-border">
              <Button asChild variant="whatsapp" size="lg" className="w-full">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4" />
                  Contactez-Nous
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
