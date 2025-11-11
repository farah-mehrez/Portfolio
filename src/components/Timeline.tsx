import { Briefcase, GraduationCap } from "lucide-react";

const Timeline = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Script Writer",
      organization: "Creative Studio",
      period: "2021 - Present",
      description: "Lead writer for multiple award-winning projects, specializing in narrative development.",
    },
    {
      type: "work",
      title: "Content Creator",
      organization: "Digital Media Agency",
      period: "2019 - 2021",
      description: "Developed engaging content across various platforms and mediums.",
    },
    {
      type: "education",
      title: "Master's in Creative Writing",
      organization: "University of Arts",
      period: "2017 - 2019",
      description: "Specialized in screenwriting and narrative structure.",
    },
    {
      type: "education",
      title: "Bachelor's in Literature",
      organization: "State University",
      period: "2013 - 2017",
      description: "Focus on contemporary literature and storytelling techniques.",
    },
  ];

  return (
    <section id="timeline" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Experience & <span className="text-primary">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-16 h-16 bg-primary rounded-full border-4 border-background z-10">
                  {item.type === "work" ? (
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-primary font-medium mb-3">{item.organization}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
