import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  className?: string;
}

const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?0123456789";

const DecryptedText = ({ text, className = "" }: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);
    let iteration = 0;
    const maxIterations = text.length * 3;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration / 3) {
              return text[index];
            }
            if (char === "+" || char === " ") return char;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iteration += 1;

      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isInView, text, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
};

export default DecryptedText;
