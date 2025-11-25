import logo1 from "figma:asset/35aa55d2c88cc6478d82d4335c12f1ed10918ec8.png";
import logo2 from "figma:asset/d090669c281d9aec785cd64d000ee2d9af63a741.png";
import logo3 from "figma:asset/508699f8e9f75b913a0ba4852ee64a2432dedadf.png";
import logo4 from "figma:asset/35b361f21c9bbba03ea1d63ded4ea332c233391e.png";
import logo5 from "figma:asset/0c9547a53d929a61711a504b86b0e96da458da5f.png";
import logo6 from "figma:asset/85d99a7f80d98fce8ce26f09208a1a55d58af6d0.png";
import logo7 from "figma:asset/158d50495fcddcf437537e0b0e687099c9d00824.png";
import logo8 from "figma:asset/ac9c158a2db5a7a2fc70cf1c0dd57e05cebd9aea.png";
import logo9 from "figma:asset/91335c7d0af32692871aeed07096059f093c3911.png";
import logo10 from "figma:asset/44f698cae713dd4d072c7c2570952dbe1d1ca9fa.png";

export function ClientLogos() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-center text-gray-600">Trusted by Leading Companies</h3>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center space-x-16 px-8 flex-shrink-0">
            {logos.map((logo, index) => (
              <img key={`set1-${index}`} src={logo} alt="Client logo" className="h-16 object-contain" />
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 px-8 flex-shrink-0">
            {logos.map((logo, index) => (
              <img key={`set2-${index}`} src={logo} alt="Client logo" className="h-16 object-contain" />
            ))}
          </div>
          
          {/* Another duplicate for smooth infinite scroll */}
          <div className="flex items-center space-x-16 px-8 flex-shrink-0">
            {logos.map((logo, index) => (
              <img key={`set3-${index}`} src={logo} alt="Client logo" className="h-16 object-contain" />
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}