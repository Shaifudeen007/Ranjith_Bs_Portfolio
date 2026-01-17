import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, ChevronRight, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Assistant Professor",
    company: "Nandha Engineering College",
    period: "August 2025 - Present",
    location: "Tamil Nadu, India",
    description:
      "Guiding students in Computer Science & Engineering with a focus on programming, problem-solving, and real-time application building.",
    current: true,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "HR Manager • Team Lead • Scrum Master • Technical Trainer",
    company: "TERV PRO",
    period: "February 2023 - July 2025",
    location: "India",
    description:
      "Led teams, managed HR functions, implemented Scrum methodologies, and trained technical teams. Demonstrated versatility across multiple leadership roles.",
    current: false,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Visiting Professor",
    company: "Presidency University Bangalore",
    period: "July 2023 - December 2023",
    location: "Bangalore",
    description:
      "Delivered engaging lectures on Problem Solving in C. Developed comprehensive course materials resulting in a 30% improvement in course completion rates.",
    current: false,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Brand Ambassador",
    company: "Zaphire®",
    period: "January 2022 - November 2022",
    location: "India",
    description:
      "Represented and promoted the brand through various marketing initiatives and public engagements.",
    current: false,
    color: "from-orange-500 to-red-500",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.p 
            className="text-primary text-sm uppercase tracking-widest mb-4 font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Career Journey
          </motion.p>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Timeline Navigation */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />
            
            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.company + exp.title}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`w-full text-left pl-10 lg:pl-12 pr-4 py-4 rounded-xl transition-all duration-300 relative group ${
                    activeIndex === index 
                      ? 'bg-primary/10 border border-primary/30' 
                      : 'hover:bg-secondary/50 border border-transparent'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className={`absolute left-2 lg:left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-primary border-primary scale-125' 
                        : 'bg-background border-muted-foreground/30 group-hover:border-primary/50'
                    }`}
                    layoutId="timeline-dot"
                  />
                  
                  {/* Current badge */}
                  {exp.current && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                      Now
                    </span>
                  )}
                  
                  <h4 className={`font-display font-bold text-sm transition-colors ${
                    activeIndex === index ? 'text-primary' : 'text-foreground'
                  }`}>
                    {exp.company}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Detail Card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${experiences[activeIndex].color} opacity-20 blur-xl`} />
              
              <div className="card-elevated relative backdrop-blur-sm border-2 border-primary/10 rounded-2xl overflow-hidden">
                {/* Header with gradient */}
                <div className={`h-1.5 bg-gradient-to-r ${experiences[activeIndex].color}`} />
                
                <div className="p-5 lg:p-6">
                  {/* Icon */}
                  <motion.div 
                    className={`w-10 h-10 rounded-xl bg-gradient-to-r ${experiences[activeIndex].color} flex items-center justify-center mb-4`}
                    initial={{ rotate: -10, scale: 0.9 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <Briefcase className="text-white" size={18} />
                  </motion.div>

                  {/* Title & Company */}
                  <motion.h3 
                    className="text-lg lg:text-xl font-display font-bold text-foreground mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    {experiences[activeIndex].title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-sm font-semibold bg-gradient-to-r ${experiences[activeIndex].color} bg-clip-text text-transparent mb-4`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {experiences[activeIndex].company}
                  </motion.p>

                  {/* Meta info */}
                  <motion.div 
                    className="flex flex-wrap gap-3 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar size={14} className="text-primary" />
                      <span className="text-xs font-medium">{experiences[activeIndex].period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-xs">{experiences[activeIndex].location}</span>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-muted-foreground leading-relaxed text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    {experiences[activeIndex].description}
                  </motion.p>

                  {/* Navigation arrows */}
                  <motion.div 
                    className="flex justify-between items-center mt-4 pt-4 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                  >
                    <button
                      onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                      disabled={activeIndex === 0}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="rotate-180" size={14} />
                      Prev
                    </button>
                    
                    <div className="flex gap-1.5">
                      {experiences.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            idx === activeIndex 
                              ? 'w-4 bg-primary' 
                              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setActiveIndex(Math.min(experiences.length - 1, activeIndex + 1))}
                      disabled={activeIndex === experiences.length - 1}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next
                      <ChevronRight size={14} />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
