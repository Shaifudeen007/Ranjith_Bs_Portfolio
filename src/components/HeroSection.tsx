import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Instagram } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import ShinyText from "./ShinyText";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
        }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* TEXT */}
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground text-lg mb-4 font-medium">
              Hello, I'm
            </p>

            <h1 className="hero-title mb-6">
              <ShinyText
                text="B S Ranjith"
                speed={3}
                spread={90}
                yoyo={true}
                delay={0.5}
                color="hsl(var(--foreground))"
                shineColor="hsl(var(--primary))"
              />
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="badge-accent">Assistant Professor</span>
              <span className="badge-accent">Technical Trainer</span>
              <span className="badge-accent">Scrum Master</span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Passionate educator and tech leader with expertise in Computer
              Science, guiding students in programming, problem-solving, and
              real-time application building. Based in Tamil Nadu, India.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="mailto:ranjithbs61@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Mail size={18} /> Get in Touch
              </a>

              <a
                href="https://www.linkedin.com/in/ranjithbs14"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full border hover:border-primary hover:text-primary"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/ranjith_bs_14"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full border hover:border-primary hover:text-primary"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE WITH GLOW */}
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="order-1 lg:order-2 flex justify-center lg:justify-end"
>
  <div className="relative">

    {/* Soft Glow */}
    <div className="absolute inset-0 rounded-full bg-primary/40 blur-3xl scale-110" />

    {/* Image */}
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_rgba(var(--primary-rgb),0.6)]">
      <img
        src={profilePhoto}
        alt="B S Ranjith"
        className="w-full h-full object-cover object-[center_-2%]"
      />
    </div>

  </div>
</motion.div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
