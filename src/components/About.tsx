import { Target, Lightbulb, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">
            Regulatory Solutions for a Compliant Future
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            INPUT is a regulatory advisory firm helping
            businesses navigate Uzbekistan's complex licensing
            and compliance landscape. We specialize in obtaining
            operational permits, technical certificates, and
            safety approvals across sectors such as energy,
            construction, and industrial services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Target className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-black mb-3">
              End-to-End Support
            </h3>
            <p className="text-gray-600">
              Comprehensive assistance for license and permit
              acquisition, guiding you through every step of the
              regulatory process.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Lightbulb className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-black mb-3">
              Strategic Identification
            </h3>
            <p className="text-gray-600">
              Expert identification of regulatory requirements
              based on your specific business activities and
              operational needs.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-black mb-3">
              Full Compliance Guidance
            </h3>
            <p className="text-gray-600">
              Ensuring complete compliance with national
              legislation, so you can operate with confidence
              and legal certainty.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 max-w-3xl mx-auto">
            Whether you're launching a new venture or scaling
            operations, INPUT ensures you're legally equipped to
            move forward with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}