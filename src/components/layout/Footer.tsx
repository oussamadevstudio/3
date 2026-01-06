import logo from '../../assets/logo.png'
import {vars, fservices, socialLinks, quickLinks} from '../../config/variables';




export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-hvac-navy text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src={logo} alt="SoptAir LOGO" className="" />
              </div>
              <span className="font-heading font-bold text-xl"><span className="bg-clip-text text-transparent bg-gradient-to-l from-[#1f84e2] to-[#f97a1f] text-2xl">{vars.Logo_Titel1}</span> {vars.Logo_Titel2}</span>
            </a>
            <p className="text-white/70 leading-relaxed mb-6">
              Votre partenaire de confiance {vars.about.domain1} depuis plus de {vars.about.year} ans.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-white/70">
              <p>📞 {vars.Num_Call}</p>
              <p>✉️ {vars.email}</p>
              <p>📍 {vars.location}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {fservices.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleNavClick(service.href)}
                    className="text-white/70 hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Follow Us</h3>
            <p className="text-white/70 mb-6">
              Suivez-nous sur les réseaux sociaux pour les dernières actualités et offres.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} {vars.copyright_name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
