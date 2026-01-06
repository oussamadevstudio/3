import { Star, Quote } from "lucide-react";
import {reviews} from '../../config/variables';



export const ReviewsSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Avis <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez ce que nos clients satisfaits disent de nos services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="grid grid-rows-[auto_1fr_auto] bg-card rounded-2xl p-8 border border-border shadow-card card-hover"
            >
              <div>
                  {/* Quote Icon */}
                <div className="flex gap-2 mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{review.review}"
              </p>

              {/* Reviewer Name */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground">
                  {review.name}
                </p>
                <p className="text-sm text-muted-foreground">Client vérifié</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
