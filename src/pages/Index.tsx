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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBuilding}
            alt="Modern rental property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220_25%_10%_/_0.95)] via-[hsl(220_25%_10%_/_0.85)] to-transparent"></div>
        </div>

        {/* Call Button - Top Right */}
        <a 
          href="tel:+917569408577"
          className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.494 4.483a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          Call
        </a>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Logo & Tagline */}
          <div className="mb-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
              SNR Infra BuildTech
            </h1>
            <p className="text-white/90 text-base sm:text-lg">
              Built on Trust, Rooted in Quality
            </p>
          </div>

          {/* Main Headline */}
          <div className="mb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
              CONSTRUCT YOUR RENTAL PROPERTY
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-3">
              in <span className="font-bold text-accent">9 Months</span> at <span className="text-accent font-bold">Unbeatable Rates!</span>
            </p>
            <PriceBadge price="₹1,799 / sqft" className="mb-4" />
          </div>

          {/* OUR SERVICES Grid */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white mb-3">OUR SERVICES</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center gap-2 hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg ring-2 ring-white/30">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white font-semibold text-xs text-center leading-tight max-w-[120px] drop-shadow-lg">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us - Compact */}
          <div className="mb-4 bg-card/20 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <h3 className="text-base font-bold text-white mb-2 text-center">WHY CHOOSE US</h3>
            <div className="space-y-1.5 text-white/90 text-xs">
              <p className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-accent" />
                Professional Expertise
              </p>
              <p className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-accent" />
                Transparent Reporting
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent" />
                Cost & Time Efficiency
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => setFormOpen(true)}
            size="lg"
            className="btn-gradient text-lg px-10 py-5 h-auto font-bold hover:scale-105 transition-transform w-full"
          >
            GET QUOTE
          </Button>
        </div>
      </section>


      {/* Lead Form Modal */}
      <LeadForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Index;
