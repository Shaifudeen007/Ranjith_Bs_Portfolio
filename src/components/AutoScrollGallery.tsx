import { motion } from "framer-motion";

import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";

const images = [p1, p2, p3, p4, p5, p6, p7];

const AutoScrollGallery = () => {
  return (
    <div className="overflow-hidden w-full py-16">

      {/* Quote */}
      <div className="text-center mb-10 px-6">
        <p className="text-xl md:text-2xl italic text-muted-foreground">
          “A person lives by what he learns,
        </p>
        <p className="text-xl md:text-2xl font-semibold italic text-primary">
          but becomes immortal by what he teaches.”
        </p>
      </div>

      {/* Gallery */}
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-52 w-80 rounded-xl shadow-lg object-cover flex-shrink-0"
            alt="gallery"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScrollGallery;
