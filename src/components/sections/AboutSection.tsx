import {vars, stats} from '../../config/variables';



export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              A Propos De <span className="text-primary">{vars.about.company_name}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Depuis plus de {vars.about.year} ans, Soptair est le leader {vars.about.domain3}. Notre équipe de techniciens certifiés s'engage à fournir des services de qualité exceptionnelle, {vars.about.grantissant}.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Nous combinons expertise technique, équipements de pointe et un service client irréprochable pour répondre {vars.about.domain1}. {vars.about.domain32}, faites confiance à notre professionnalisme.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.title}
                  className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-card transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 hidden md:flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-2xl text-primary">
                        {stat.number}
                      </p>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={vars.about_img.src}
                alt={vars.about_img.alt}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-xl border border-border max-w-xs">
              <p className="font-heading font-bold text-lg text-foreground mb-2">
                Certifiés & Assurés
              </p>
              <p className="text-sm text-muted-foreground">
                Tous nos techniciens sont certifiés et assurés pour votre tranquillité d'esprit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
