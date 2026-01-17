import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2000);
      }}
    >
      <div className="flex items-center gap-2">
        {["B", "S", "R"].map((letter, index) => (
          <motion.span
            key={letter}
            className="loader-letter text-gradient"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      >
        <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
