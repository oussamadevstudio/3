import {contactInfo} from '../../config/variables';


export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Contactez-<span className="text-primary">Nous</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            N'hésitez pas à nous contacter pour toute question ou demande de devis. Nous sommes là pour vous aider.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => {
            const CardWrapper = item.clickable ? "a" : "div";
            const wrapperProps = item.clickable
              ? {
                  href: item.link,
                  target: item.link?.startsWith("http") ? "_blank" : undefined,
                  rel: item.link?.startsWith("http") ? "noopener noreferrer" : undefined,
                }
              : {};

            return (
              <CardWrapper
                key={index}
                {...wrapperProps}
                className={`bg-card rounded-2xl p-6 border border-border shadow-card text-center ${
                  item.clickable
                    ? "cursor-pointer card-hover hover:border-primary"
                    : "opacity-90"
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>

                {/* Info */}
                <p className="text-primary font-medium mb-2">{item.info}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
