import { useState } from "react";
import { Button } from "@/components/ui/button";
import PriceBadge from "@/components/PriceBadge";
import LeadForm from "@/components/LeadForm";
import heroBuilding from "@/assets/hero-building.jpg";
import servicePlans from "@/assets/service-building-plans.jpg";
import serviceEstimation from "@/assets/service-estimation.jpg";
import serviceMoneySafety from "@/assets/service-money-safety.jpg";
import serviceAssistance from "@/assets/service-assistance.jpg";
import serviceSupervision from "@/assets/service-supervision.jpg";
import serviceVendor from "@/assets/service-vendor.jpg";
import serviceLabour from "@/assets/service-labour.jpg";
import {
  Award,
  TrendingUp,
  Clock
} from "lucide-react";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  const services = [
    {
      image: servicePlans,
      title: "Provides Building Plans",
      description: "Professional architectural designs"
    },
    {
      image: serviceEstimation,
      title: "Provides Project Estimation Report",
      description: "Detailed cost breakdown and timeline"
    },
    {
      image: serviceLabour,
      title: "10+ Years Skilled Labour Providence",
      description: "Experienced workforce"
    },
    {
      image: serviceSupervision,
      title: "Civil Supervision",
      description: "Expert quality monitoring"
    }
  ];

  return (
    <div className="h-screen bg-background overflow-hidden">
      {/* Hero Section - Single Page */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBuilding}
            alt="Modern rental property"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220_25%_10%_/_0.92)] via-[hsl(220_25%_10%_/_0.75)] to-transparent"></div>
        </div>

        {/* Call Button - Top Right */}
        <a 
          href="tel:+917569408577"
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground rounded-full font-semibold shadow-lg hover:scale-105 transition-transform text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.494 4.483a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          Call
        </a>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center px-4 py-6">
          <div className="w-full max-w-md">
            {/* Logo & Tagline */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-20">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
                SNR INFRA BUILDTECH
              </h1>
              <p className="text-white/90 text-base md:text-lg mt-1 font-medium tracking-tight">
                Built on Trust, Rooted in Quality
              </p>
            </div>
            {/* Main Headline */}
            <div className="mb-4">
              <h2 className="text-base font-bold text-white leading-tight mb-1">
                We Build Your Dream Home
              </h2>
              <p className="text-sm text-white/90 mb-2">
                in <span className="font-bold text-accent">9 Months</span> at <span className="text-accent font-bold">Unbeatable Rates!</span>
              </p>
              <PriceBadge price="₹1,799 / sqft" className="mb-3" />
            </div>

            {/* OUR SERVICES - Left Aligned & Compact */}
            <div className="mb-3">
              <h3 className="text-sm font-bold text-white mb-2 text-left">OUR SERVICES</h3>
              <div className="space-y-2 text-white/90 text-xs">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow-lg flex-shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-white font-medium text-xs leading-tight">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us - Left Aligned & Compact */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white mb-2 text-left">WHY CHOOSE US</h3>
              <div className="space-y-2 text-white/90 text-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8 text-accent flex-shrink-0 p-1.5 bg-white/10 rounded-full" />
                  <p className="text-white font-medium text-xs leading-tight">Professional Expertise</p>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-8 h-8 text-accent flex-shrink-0 p-1.5 bg-white/10 rounded-full" />
                  <p className="text-white font-medium text-xs leading-tight">Transparent Reporting</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-8 h-8 text-accent flex-shrink-0 p-1.5 bg-white/10 rounded-full" />
                  <p className="text-white font-medium text-xs leading-tight">Cost & Time Efficiency</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => setFormOpen(true)}
              size="lg"
              className="btn-gradient text-base px-8 py-4 h-auto font-bold hover:scale-105 transition-transform w-full"
            >
              GET QUOTE
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      <LeadForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Index;
