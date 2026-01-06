import { Clock, Banknote, Wind, Fan, Flame, Thermometer, FileText, Users, Award, Wrench, Phone, Mail, MapPin } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const vars = {
    Logo_Titel1 : "Mr",
    Logo_Titel2 : "frigoriste",
    grd_color1 : "#1f84e2",
    grd_color2 : "#f97a1f",
    
    Num_CTA : "0661089027",//0
    Num_Call : "+212 661089027",
    Num_Link : "tel:+212661089027",
    CTA_message : "Bonjour, je souhaite avoir plus d'informations sur vos services HVAC.",

    email : "email@email.com",
    email_Link : "mailto:email@email.com",

    location : "HGW6+8P2, Casablanca",
    location_Link : "https://www.google.com/maps/place/Ste+Climatisation+H.A+sarl(au)+maroc/@34.2695528,-7.8308637,9z/data=!4m10!1m2!2m1!1shvac!3m6!1s0xda759fa18b458d3:0x3e1c235b1c2fe203!8m2!3d34.2695528!4d-6.6113813!15sCgRodmFjWgYiBGh2YWOSARZhaXJfY29uZGl0aW9uaW5nX3N0b3Jl4AEA!16s%2Fg%2F11stw29txf?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAMhttps://www.google.com/maps/place/Mr+frigoriste+sarl/@33.5468373,-8.8948535,9z/data=!4m10!1m2!2m1!1shvac!3m6!1s0xda7cb1917f7f6df:0x999d46b047edba25!8m2!3d33.5957647!4d-7.4882246!15sCgRodmFjkgEPaHZhY19jb250cmFjdG9y4AEA!16s%2Fg%2F11bvt6lmvn?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",

    working_dispo : "24/7 Disponible",
    working_hours : "Lun-Dim: Service continu",
    
    copyright_name : "Mr frigoriste sarl",

    color1 : "",
    color2: "",
    color3: "",

    //different nich

    //HERO
    
    H1_titel : {
        normal : "Solutions CVC professionnelles", 
        span : "pour votre confort"},

    hero_paragraph : "Services d’installation, d’entretien et de réparation experts pour les systèmes de chauffage, ventilation et climatisation (CVC). Faites confiance à nos techniciens certifiés pour tous vos besoins en CVC",

    hero_features : [
      {
        icon: Clock,
        title: "Urgence 24h/24",
        description: "Disponible à tout moment",
      },
      {
        icon: Users,
        title: "Techniciens experts",
        description: "Professionnels certifiés",
      },
      {
        icon: Banknote,
        title: "Paiement en espèces",
        description: "Méthode de paiement simple",
      },
    ],

    hero_bg : "linear-gradient(135deg, hsl(209 90% 49%) 0%, hsl(209 90% 35%) 100%)",

    
    //Services
    services_paragraph : "Nous offrons une gamme complète de services HVAC pour répondre à tous vos besoins en chauffage, ventilation et climatisation.",

    

    //About
    about : {year : "15",
        company_name : "Soptair",
        domain3 : "des solutions de chauffage, ventilation et climatisation",
        grantissant : "garantissant le confort de votre maison ou entreprise tout au long de l'année",
        domain1 : "à tous vos besoins HVAC",
        domain32 : "Que ce soit pour une installation, une maintenance ou une réparation urgente"
    },

    about_img : {
        src : "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
        alt : "HVAC Professional at work"},

    about_numbers : {happy_cost : "", years : "", mergency_serv: "", Techs : ""}, 
    

    //Footer
    Our_services : [],

    about_foot : "",






}

export const services = [
  {
    icon: Wind,
    title: "Climatisation",
    description: "Installation et maintenance de systèmes de climatisation pour un confort optimal.",
    features: [
      "Installation professionnelle",
      "Maintenance préventive",
      "Réparation rapide",
      "Conseil personnalisé",
    ],
    whatsappMessage: "Bonjour, je souhaite demander un devis pour un service de Climatisation.",
  },
  {
    icon: Fan,
    title: "Ventilation",
    description: "Systèmes de ventilation modernes pour une qualité d'air intérieur optimale.",
    features: [
      "VMC simple et double flux",
      "Extraction d'air",
      "Filtration avancée",
      "Économies d'énergie",
    ],
    whatsappMessage: "Bonjour, je souhaite demander un devis pour un service de Ventilation.",
  },
  {
    icon: Flame,
    title: "Désenfumage",
    description: "Solutions de désenfumage conformes aux normes de sécurité incendie.",
    features: [
      "Conformité réglementaire",
      "Installation certifiée",
      "Maintenance annuelle",
      "Intervention urgente",
    ],
    whatsappMessage: "Bonjour, je souhaite demander un devis pour un service de Désenfumage.",
  },
  {
    icon: Thermometer,
    title: "Chauffage Central",
    description: "Installation et entretien de systèmes de chauffage central performants.",
    features: [
      "Chaudières modernes",
      "Radiateurs efficaces",
      "Plancher chauffant",
      "Optimisation thermique",
    ],
    whatsappMessage: "Bonjour, je souhaite demander un devis pour un service de Chauffage Central.",
  },
  {
    icon: FileText,
    title: "Contrat de Maintenance",
    description: "Contrats d'entretien réguliers pour garantir la longévité de vos équipements.",
    features: [
      "Visites régulières",
      "Priorité intervention",
      "Pièces garanties",
      "Tarifs préférentiels",
    ],
    whatsappMessage: "Bonjour, je souhaite demander un devis pour un Contrat de Maintenance.",
  },
];


//About Stats 

export const stats = [
  {
    icon: Users,
    number: "500+",
    title: "Happy Customers",
  },
  {
    icon: Award,
    number: "15+",
    title: "Years of Experience",
  },
  {
    icon: Clock,
    number: "24/7",
    title: "Emergency Service",
  },
  {
    icon: Wrench,
    number: "50+",
    title: "Professional Technicians",
  },
];



//Work Slider

export const projects = [
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    title: "Installation Climatisation Bureau",
    description: "Installation complète d'un système de climatisation multi-split pour un espace de bureau de 500m². Performance optimale et économies d'énergie garanties.",
    service: "Climatisation",
  },
  {
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop",
    title: "Rénovation Chauffage Central",
    description: "Modernisation complète du système de chauffage central d'une maison individuelle avec installation d'une chaudière à condensation haute performance.",
    service: "Chauffage Central",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2011&auto=format&fit=crop",
    title: "Système Ventilation Industriel",
    description: "Conception et installation d'un système de ventilation industriel pour un entrepôt de 2000m² avec extraction d'air et filtration avancée.",
    service: "Ventilation",
  },
  {
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
    title: "Désenfumage Centre Commercial",
    description: "Installation d'un système de désenfumage conforme aux dernières normes de sécurité pour un centre commercial récemment rénové.",
    service: "Désenfumage",
  },
];


//Reviews

export const reviews = [
  {
    name: "Youcef Azrgui",
    review: "I purchased seven 9000 BTU units from Soptair for a riad in Rabat. The customer service is fast and professional. They even recommended reputable installers after asking them which installers in Rabat-Salé were reliable. Their advice allowed us to install them quickly and professionally. Thank you to the entire team.",
    rating: 5,
  },
  {
    name: "Mourad EL",
    review: "I would like to share my experience purchasing various air conditioning equipment from SoptAir. I commend Mr. Toafik and Ms. Amal for their exceptional assistance, which often extended beyond their regular business hours. They were always responsive to my calls and messages. I am grateful for their professionalism and advice, which helped me choose the best products to suit my needs.",
    rating: 5,
  },
  {
    name: "Omar El Qadiri",
    review: "Excellent service at very good prices. I thank Amal for her warm welcome and helpfulness throughout the entire process; the delivery was on time.I highly recommend them.",
    rating: 5,
  },
];




//Contact 

export const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    info: vars.Num_Call,
    description: "Appelez-nous pour toute urgence",
    link: vars.Num_Link,
    clickable: true,
  },
  {
    icon: Mail,
    title: "Email",
    info: vars.email,
    description: "Envoyez-nous un email",
    link: vars.email_Link,
    clickable: true,
  },
  {
    icon: MapPin,
    title: "Location",
    info: vars.location,
    description: "Notre zone d'intervention",
    link: vars.location_Link,
    clickable: true,
  },
  {
    icon: Clock,
    title: "Working Hours",
    info: vars.working_dispo,
    description: vars.working_hours,
    link: null,
    clickable: false,
  },
];




//Footer Services Menu

export const fservices = [
  { name: "Climatisation", href: "#services" },
  { name: "Ventilation", href: "#services" },
  { name: "Désenfumage", href: "#services" },
  { name: "Chauffage Central", href: "#services" },
  { name: "Maintenance", href: "#services" },
];


//Footer Social Media


export const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];



// Quick Links

export const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];