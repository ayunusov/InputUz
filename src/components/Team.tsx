import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Nurulloh Yunusov",
      role: "Founding and Managing Partner",
      linkedin: "https://www.linkedin.com/in/nurulloh-yunusov-b64b6399/",
      email: "n.yunusov@input.uz",
    },
    {
      name: "Abdulaziz Yunusov",
      role: "Associate",
      linkedin: "https://www.linkedin.com/in/yunusovabdulaziz/",
      email: "a.yunusov@input.uz",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind our success. Our diverse team brings together 
            decades of experience across multiple industries and disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-100 flex flex-col items-center justify-center p-8 hover:bg-gray-50 transition-colors">
                <h4 className="text-black mb-1 text-center">{member.name}</h4>
                <p className="text-gray-600 mb-4 text-center">{member.role}</p>
                <div className="flex space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}