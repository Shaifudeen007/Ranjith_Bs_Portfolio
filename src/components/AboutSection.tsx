import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Award, Briefcase } from "lucide-react";
import DecryptedText from "./DecryptedText";

const stats = [
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Students Mentored" },
  { icon: Code2, value: "5+", label: "Roles Mastered" },
  { icon: Award, value: "4+", label: "Certifications" },
];

const skills = [
  "Computer Science",
  "Problem Solving",
  "Team Leadership",
  "Scrum Methodology",
  "Technical Training",
  "Management",
  "C Programming",
  "Java",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 80% 30%, hsl(var(--primary) / 0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
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
            About Me
          </motion.p>
          <h2 className="section-title">
            Educator. Leader. <span className="text-gradient">Innovator.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a dedicated educator and technology leader currently serving as an 
              <span className="text-foreground font-medium"> Assistant Professor at Nandha Engineering College</span>. 
              My journey in tech spans across multiple roles - from being a Technical Trainer 
              to Scrum Master and HR Manager.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With a strong foundation in Computer Science and an MBA, I bridge the gap 
              between technical expertise and business acumen. I've helped improve 
              course completion rates by 30% through mentorship and innovative teaching 
              methodologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My passion lies in guiding the next generation of developers, instilling 
              in them not just technical skills but also problem-solving abilities and 
              a growth mindset.
            </p>

            {/* Skills */}
            <motion.div 
              className="pt-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-semibold">
                Core Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 lg:-mt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="card-elevated flex flex-col items-center text-center group cursor-default p-5"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors"
                  animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                >
                  <stat.icon className="text-primary" size={22} />
                </motion.div>
                <motion.span 
                  className="stat-number text-gradient text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 + index * 0.15 }}
                >
                  <DecryptedText text={stat.value} />
                </motion.span>
                <span className="text-muted-foreground text-xs mt-1 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
