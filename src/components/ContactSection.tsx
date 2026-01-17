import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Instagram, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30"
          style={{
            background: "radial-gradient(ellipse at center bottom, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-primary text-sm uppercase tracking-widest mb-4 font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.p>
          <h2 className="section-title mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're interested in collaboration, speaking engagements, 
            or just want to say hello, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <motion.a
            href="mailto:ranjithbs61@gmail.com"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card-elevated text-center group hover:border-primary/30 border border-transparent transition-all duration-300 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Mail className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">
              Email
            </h3>
            <p className="text-muted-foreground text-sm">
              ranjithbs61@gmail.com
            </p>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/ranjithbs14"
            target="_blank"
            rel="noopener noreferrer"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card-elevated text-center group hover:border-primary/30 border border-transparent transition-all duration-300 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Linkedin className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">
              LinkedIn
            </h3>
            <p className="text-muted-foreground text-sm">
              Connect with me
            </p>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            href="https://www.instagram.com/ranjith_bs_14"
            target="_blank"
            rel="noopener noreferrer"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card-elevated text-center group hover:border-primary/30 border border-transparent transition-all duration-300 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Instagram className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">
              Instagram
            </h3>
            <p className="text-muted-foreground text-sm">
              Follow me
            </p>
          </motion.a>

          {/* Location Card */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="card-elevated text-center group border border-transparent"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">
              Location
            </h3>
            <p className="text-muted-foreground text-sm">
              Bhavani, Tamil Nadu, India
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="mailto:ranjithbs61@gmail.com"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-lg hover:opacity-90 transition-all glow-effect hover:shadow-xl hover:shadow-primary/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={20} />
            Send a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
