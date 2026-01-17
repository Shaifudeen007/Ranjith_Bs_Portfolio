import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2000);
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, 100],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative flex flex-col items-center gap-16">
        {/* Morphing Loader */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-24 h-24">
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Base circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/50" />
            
            {/* Rotating triangles */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "rgb(59, 130, 246)", stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: "rgb(147, 51, 234)", stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
              
              <motion.polygon
                points="50,20 70,60 30,60"
                fill="url(#grad1)"
                style={{ transformOrigin: "50% 50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.polygon
                points="50,40 65,70 35,70"
                fill="url(#grad1)"
                style={{ transformOrigin: "50% 50%" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.polygon
                points="50,30 60,55 40,55"
                fill="url(#grad1)"
                style={{ transformOrigin: "50% 50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: -0.5 }}
              />
            </svg>
            
            {/* Center glow */}
            <motion.div
              className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-blue-400/50 blur-md"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
        
        {/* Letters and pulsing circles section */}
        <div className="relative">
          {/* Pulsing circle background */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-blue-500/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-blue-500/40"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              delay: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Letters with enhanced animation */}
          <div className="flex items-center gap-3 relative z-10">
            {["B", "S", "R"].map((letter, index) => (
              <motion.div key={letter} className="relative">
                <motion.span
                  className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent block"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ 
                    opacity: 1, 
                    y: [50, -10, 0],
                    rotateX: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  {letter}
                </motion.span>
                
                {/* Letter glow effect */}
                <motion.div
                  className="absolute inset-0 blur-xl bg-blue-500/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.2 + 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Orbiting dots */}
          {[0, 120, 240].map((rotation, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
              animate={{
                x: [
                  Math.cos((rotation * Math.PI) / 180) * 60 - 4,
                  Math.cos(((rotation + 360) * Math.PI) / 180) * 60 - 4
                ],
                y: [
                  Math.sin((rotation * Math.PI) / 180) * 60 - 4,
                  Math.sin(((rotation + 360) * Math.PI) / 180) * 60 - 4
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom progress bar with wave effect */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-blue-500/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;