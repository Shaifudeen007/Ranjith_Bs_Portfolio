import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(var(--secondary) / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-display font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient">BSR</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:ranjithbs61@gmail.com"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ranjithbs14"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ranjith_bs_14"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={18} />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}><Heart size={14} className="text-primary" /></motion.span> © {new Date().getFullYear()} B S Ranjith
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
