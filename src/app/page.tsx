"use client";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    console.log(prev, latest);

    if (latest > prev && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <main className="bg-neutral-50 min-h-screen">
      <motion.nav
        variants={{
          hidden: { y: "-100%" },
          visible: { y: "0" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="bg-white border-b border-black sticky top-0"
      >
        <ul className="flex justify-around py-5">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </motion.nav>

      <div className="py-8 px-12 min-h-screen">
        <h1 className="text-7xl">My Blog Post</h1>
      </div>
      <div className="py-8 px-12 min-h-screen">
        <h1 className="text-7xl">My Blog Post</h1>
      </div>
    </main>
  );
}
