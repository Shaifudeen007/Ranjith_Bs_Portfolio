import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Excel Engineering College (Autonomous)",
    field: "Business Administration",
  },
  {
    degree: "Master of Engineering (MEng)",
    institution: "Hindusthan College of Engineering and Technology",
    field: "Computer Science",
  },
  {
    degree: "Bachelor of Technology (BTech)",
    institution: "KSR Institute for Engineering and Technology, Namakkal",
    field: "Information Technology",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0
    },
  };

  return (
    <section id="education" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.08) 0%, transparent 50%)",
          }}
        />
      </div>

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
            Academic Background
          </motion.p>
          <h2 className="section-title">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-elevated group hover:border-primary/30 border border-transparent transition-all duration-300"
              style={{ perspective: "1000px" }}
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                <GraduationCap className="text-primary" size={28} />
              </motion.div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {edu.degree}
              </h3>
              <p className="text-primary font-semibold mb-2">{edu.field}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {edu.institution}
              </p>

              {/* Decorative number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 font-display">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
