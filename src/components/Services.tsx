import { FileText, Award, ClipboardCheck, Shield } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Licensing Services",
      description: "Expert assistance in obtaining operational licenses for construction, industrial mountaineering, high-risk facilities, and infrastructure projects including bridges, tunnels, and pipelines.",
    },
    {
      icon: ClipboardCheck,
      title: "Permitting Support",
      description: "Comprehensive permit acquisition services ensuring your business operations meet all regulatory requirements and national standards in Uzbekistan.",
    },
    {
      icon: Award,
      title: "Certification Guidance",
      description: "Technical certification support for safety approvals, operational certificates, and compliance documentation across energy, construction, and industrial sectors.",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Strategic advisory on architectural-urban planning documentation, hazardous production facilities, and ensuring full adherence to Uzbekistan's regulatory framework.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive licensing, permitting, and certification services designed to help 
            your business operate legally and efficiently in Uzbekistan's regulatory environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-black mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}