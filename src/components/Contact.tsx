import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Contact us today to discuss how 
            we can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-black mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-black mb-1">Location</h4>
                  <p className="text-gray-600">
                    Tashkent, Uzbekistan
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-black mb-1">Phone</h4>
                  <p className="text-gray-600">+998 90 940 7 940</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-black mb-1">Email</h4>
                  <p className="text-gray-600">info@input.uz</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-black mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.664344822831!2d69.24004431543657!3d41.31151107927087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tashkent, Uzbekistan Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}