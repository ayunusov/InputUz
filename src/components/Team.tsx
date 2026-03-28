import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Nurulloh Yunusov",
      role: "Founding and Managing Partner",
      linkedin: "https://www.linkedin.com/in/nurulloh-yunusov-b64b6399/",
      email: "n.yunusov@input.uz",
      description:
        "Legal professional with extensive experience advising on licensing and regulatory compliance for hazardous industrial facilities. Proven record of supporting EPC contractors and project owners through complex licensing procedures and successfully assisting more than ten international companies in meeting national regulatory requirements.",
      // optional avatar: "../assets/nurulloh.png",
    },
    {
      name: "Jamshid Khasanov",
      role: "Partner",
      linkedin: null,
      email: "j.khasanov@input.uz",
      description:
        "Lawyer with more than 10 years of legal experience in international and local companies and in legal consulting, specialized in commercial, corporate, labor, state procurement, privacy protection and full legal support of commercial organizations.",
    },
    {
      name: "Odilkhon Zokirov",
      role: "Partner",
      linkedin: "https://www.linkedin.com/in/odilkhon-zokirov-890731a5/",
      email: "o.zokirov@input.uz",
      description:
        "Legal professional with over 10 years of experience in IT, corporate, commercial, and litigation law. Proven track record in supporting international transactions, contract negotiation, and dispute resolution.",
    },
    // Add more members here. Example:
    // {
    //   name: "Full Name",
    //   role: "Position",
    //   linkedin: "https://...",
    //   email: "email@example.com",
    //   avatar: "../assets/filename.png",
    // },
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 flex flex-col items-center justify-center p-8 hover:bg-gray-50 transition-colors">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-2xl text-gray-500">
                    {member.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                  </div>
                )}

                <h4 className="text-black mb-1 text-center">{member.name}</h4>
                <p className="text-gray-600 mb-2 text-center">{member.role}</p>
                {member.description && (
                  <p className="text-gray-600 mb-4 text-center max-w-xs">{member.description}</p>
                )}

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