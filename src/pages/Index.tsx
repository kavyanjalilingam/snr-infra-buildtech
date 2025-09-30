import { useState } from "react";
import { Button } from "@/components/ui/button";
import PriceBadge from "@/components/PriceBadge";
import ServiceCard from "@/components/ServiceCard";
import LeadForm from "@/components/LeadForm";
import heroBuilding from "@/assets/hero-building.jpg";
import {
  FileText,
  ClipboardCheck,
  Shield,
  Users,
  HardHat,
  Handshake,
  Award,
  TrendingUp,
  Clock
} from "lucide-react";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  const services = [
    {
      icon: FileText,
      title: "Provides Building Plans",
      description: "Professional architectural designs"
    },
    {
      icon: ClipboardCheck,
      title: "Provides Project Estimation Report",
      description: "Detailed cost breakdown and timeline"
    },
    {
      icon: Shield,
      title: "100% Money Safety",
      description: "Your investment is secure"
    },
    {
      icon: Users,
      title: "End-to-End Assistance",
      description: "Complete project support"
    },
    {
      icon: HardHat,
      title: "Civil Supervision",
      description: "Expert quality monitoring"
    },
    {
      icon: Handshake,
      title: "Vendor Coordination",
      description: "Seamless vendor management"
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: "High Rental Yield",
      subtitle: "Maximize your rental income"
    },
    {
      icon: TrendingUp,
      title: "Maximum Units",
      subtitle: "Optimize space utilization"
    },
    {
      icon: Shield,
      title: "100% Money Safety",
      subtitle: "Your investment is secure"
    },
    {
      icon: Users,
      title: "End-to-End Assistance",
      subtitle: "Complete project support"
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

          {/* Highlights Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <highlight.icon className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{highlight.title}</p>
                  <p className="text-white/70 text-xs">{highlight.subtitle}</p>
                </div>
              </div>
            ))}
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

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            OUR SERVICES
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            End-to-End Project Management • Civil Supervision • Vendor Coordination
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => {
                const servicesSection = document.getElementById('why-choose-us');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-primary hover:underline text-sm"
            >
              View services →
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 px-4 sm:px-6 lg:px-8">
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
