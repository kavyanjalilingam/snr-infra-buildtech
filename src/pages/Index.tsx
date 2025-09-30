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
      image: serviceMoneySafety,
      title: "100% Money Safety",
      description: "Your investment is secure"
    },
    {
      image: serviceAssistance,
      title: "End-to-End Assistance",
      description: "Complete project support"
    },
    {
      image: serviceSupervision,
      title: "Civil Supervision",
      description: "Expert quality monitoring"
    },
    {
      image: serviceVendor,
      title: "Vendor Coordination",
      description: "Seamless vendor management"
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

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Logo & Tagline */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              SNR Infra BuildTech
            </h1>
            <p className="text-white/90 text-sm sm:text-base">
              Built on Trust, Rooted in Quality
            </p>
          </div>

          {/* Main Headline */}
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              CONSTRUCT YOUR<br />RENTAL PROPERTY
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-6">
              in <span className="font-bold">9 Months</span> at <span className="text-accent font-bold">Unbeatable Rates!</span>
            </p>
            <PriceBadge price="₹1,799 / sqft" className="mb-8" />
          </div>

          {/* OUR SERVICES Grid */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">OUR SERVICES:</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="text-center">
                    <p className="text-white font-semibold text-xs leading-tight">{service.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => setFormOpen(true)}
            size="lg"
            className="btn-gradient text-xl px-12 py-6 h-auto font-bold hover:scale-105 transition-transform"
          >
            GET QUOTE
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            WHY CHOOSE US?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl card-elegant bg-card">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Professional Expertise</h3>
              <p className="text-muted-foreground">
                Years of experience in construction management
              </p>
            </div>
            <div className="text-center p-6 rounded-xl card-elegant bg-card">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Transparent Reporting</h3>
              <p className="text-muted-foreground">
                Clear communication at every project stage
              </p>
            </div>
            <div className="text-center p-6 rounded-xl card-elegant bg-card">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Cost & Time Efficiency</h3>
              <p className="text-muted-foreground">
                Deliver on time, within budget
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Button
              onClick={() => setFormOpen(true)}
              size="lg"
              className="btn-gradient text-xl px-12 py-6 h-auto font-bold hover:scale-105 transition-transform"
            >
              GET QUOTE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">SNR Infra BuildTech</h3>
          <p className="text-sm mb-4">Built on Trust, Rooted in Quality</p>
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} SNR Infra BuildTech — All rights reserved.
          </p>
        </div>
      </footer>

      {/* Lead Form Modal */}
      <LeadForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Index;
