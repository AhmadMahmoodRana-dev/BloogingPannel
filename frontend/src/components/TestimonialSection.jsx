import React from "react";
import darkTheme from "../colors/theme"

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "San Francisco, USA",
    message:
      "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
  {
    name: "Raj Patel",
    location: "Mumbai, India",
    message:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
  },
  {
    name: "Emily Adams",
    location: "London, UK",
    message:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
  {
    name: "Alan Jackson",
    location: "Houston, USA",
    message:
      "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
  },
  {
    name: "Jessica Miller",
    location: "Boston, USA",
    message:
      "The research papers on genomic breakthroughs have been a goldmine of information. They’ve shaped the direction of my research in genomics.",
  },
  {
    name: "Diego Lopez",
    location: "Barcelona, Spain",
    message:
      "The ebooks on renewable energy strategies have given me the insights I needed to plot our startup toward sustainability.",
  },
];

const TestimonialSection = () => {
  return (
    <div style={{backgroundColor:darkTheme.colors.background}} className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            style={{backgroundColor:darkTheme.colors.cardBackground,borderColor:darkTheme.colors.border,color:darkTheme.colors.textPrimary}}
            className="border rounded-xl p-6 shadow-lg flex flex-col items-center"
          >
            <div className="flex items-center mb-4">
              <div style={{borderColor:darkTheme.colors.textPrimary}} className="h-10 border w-10 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p style={{color:darkTheme.colors.textSecondary}} className="text-sm">{t.location}</p>
              </div>
            </div>
            <div style={{backgroundColor:darkTheme.colors.background,borderColor:darkTheme.colors.border}} className="border p-4 flex flex-col justify-center items-center">
            <div className="flex mb-3 text-yellow-500">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
            <p style={{color:darkTheme.colors.textPrimary}} className="text-sm text-center">{t.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
