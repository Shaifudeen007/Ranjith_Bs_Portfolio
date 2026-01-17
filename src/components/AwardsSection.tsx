import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, Award } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best Employee Award",
    description: "Recognized for exceptional performance and dedication in the workplace.",
  },
  {
    icon: Medal,
    title: "Guinness World Record",
    description: "Holder of a Guinness World Record - a testament to extraordinary achievement.",
  },
  {
    icon: Star,
    title: "Best Student Award",
    description: "Honored for academic excellence and outstanding contributions as a student.",
  },
  {
    icon: Award,
    title: "Best Innovation Award",
    description: "Awarded for creative problem-solving and innovative solutions.",
  },
];

const certifications = [
  "Java Basics",
  "Type Writing Certificate",
  "NCC 'A' Certificate",
  "Problem Solving",
];

const AwardsSection = () => {
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
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0
    },
  };

  return (
    <section id="awards" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
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
            Recognition
          </motion.p>
          <h2 className="section-title">
            Awards & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="card-elevated text-center group hover:border-primary/30 border border-transparent transition-all duration-300"
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <award.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
              </motion.div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {award.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card-elevated"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-6">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
