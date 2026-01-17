import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 2 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2000);
      }}
    >
      <div className="flex flex-col items-center gap-12">
        {/* Minimal dot spinner */}
        <div className="relative w-16 h-16">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-black rounded-full"
              style={{
                left: "50%",
                top: "50%",
                marginLeft: "-6px",
                marginTop: "-6px",
              }}
              animate={{
                x: [0, 20, 0, -20, 0],
                y: [0, -20, 0, -20, 0],
                scale: [1, 0.8, 1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Simple text */}
        <div className="flex items-center gap-2">
          {["B", "S", "R"].map((letter, index) => (
            <motion.span
              key={letter}
              className="text-4xl font-light text-black tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Minimal progress line */}
        <div className="w-32 h-px bg-gray-200 overflow-hidden">
          <motion.div
            className="h-full w-8 bg-black"
            animate={{
              x: ["-32px", "128px"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;