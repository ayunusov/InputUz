import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/ab03f0a0257f6a08b899ffa1ce7c0111a7ecdaf6.png";

export function Hero() {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="INPUT"
            className="h-96 mb-1"
            style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
          />
          <h1 className="text-black mb-6">
            The Pillar of Legal Certainty in Uzbekistan
          </h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We empower organizations to achieve excellence through innovative strategies, 
            expert guidance, and tailored solutions. With decades of combined experience, 
            our team transforms challenges into opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}