import React from "react";

export default function Landing() {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] font-sans text-base">
      {/* Enhanced Hero Section */}
      <header className="text-center py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#BB86FC]/10 to-[#03DAC6]/10 blur-3xl opacity-30" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Shape the Future of <br /> Technology
          </h1>
          <p className="max-w-2xl mx-auto text-[#B0B0B0] text-lg mb-8">
            Join a global community of innovators exploring cutting-edge technologies in AI, Quantum Computing, and Space Tech.
          </p>
        </div>
      </header>

      {/* Enhanced Cards Section */}
      <section className="px-4 my-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Resource Library",
              desc: "Access 10,000+ resources including research papers, case studies, and technical guides",
              icon: "📚",
            },
            {
              title: "Expert Network",
              desc: "Connect with industry leaders and technical experts through our mentorship program",
              icon: "👥",
            },
            {
              title: "Innovation Labs",
              desc: "Participate in hands-on projects using cutting-edge technology infrastructure",
              icon: "🔬",
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#1E1E1E] p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-[#292929]"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.color} rounded-2xl" />
              <div className="relative z-10">
                <div className={`text-4xl mb-6`}>{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-[#B0B0B0] leading-relaxed">{item.desc}</p>
                <div className="mt-6">
                  <button className="flex items-center text-white transition-colors duration-300">
                    Learn More
                    <span className="ml-2 transform  transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#03DAC6]/5 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { title: "Explore", items: ["Features", "Blogs", "Resources", "Testimonials", "Contact"] },
            { title: "Connect", items: ["Community", "Mentorship", "Partnerships", "Careers"] },
            { title: "Learn", items: ["Courses", "Workshops", "Certifications", "Webinars"] },
            { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Cookie Settings"] },
            { title: "Social", items: ["Twitter", "LinkedIn", "GitHub", "YouTube"] }
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="hover:text-[#03DAC6] transition-colors duration-200 cursor-pointer">
                    {item}
                    {item === "Resources" && <span className="ml-2 text-xs bg-[#1c1c1c] text-white px-2 py-1 rounded-full">New</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#292929] pt-8 pb-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {['🚀', '💡', '🌐', '🔒'].map((emoji, index) => (
              <div 
                key={index}
                className="text-2xl hover:scale-125 transition-transform duration-300 cursor-pointer"
              >
                {emoji}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#B0B0B0]">
            © 2024 FutureTech. Pioneering tomorrow's technology today.
          </p>
        </div>
      </footer>
    </div>
  );
}