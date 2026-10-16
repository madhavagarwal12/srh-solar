"use client";

import React from "react";
import { motion } from "motion/react";

interface HeadingRevealProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "p";
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function HeadingReveal({
  children,
  as = "h2",
  className = "",
  delay = 0,
  immediate = false,
}: HeadingRevealProps) {
  const isHero = immediate || as === "h1";

  // If children is a simple string, split by words
  if (typeof children === "string") {
    const words = children.split(/\s+/).filter(Boolean);
    const Component = motion[as] || motion.h2;

    return (
      <Component className={className}>
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom mb-[-0.16em] pb-[0.16em] mr-[0.2em]"
          >
            <motion.span
              initial={{ y: "115%", rotate: 3, opacity: 0 }}
              {...(isHero
                ? { animate: { y: "0%", rotate: 0, opacity: 1 } }
                : {
                    whileInView: { y: "0%", rotate: 0, opacity: 1 },
                    viewport: { once: true, margin: "0px" },
                  })}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.035,
              }}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Component>
    );
  }

  // If children contains JSX/nested elements
  const Component = motion[as] || motion.h2;
  return (
    <Component
      initial={{ y: "30px", opacity: 0 }}
      {...(isHero
        ? { animate: { y: "0px", opacity: 1 } }
        : {
            whileInView: { y: "0px", opacity: 1 },
            viewport: { once: true, margin: "0px" },
          })}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

// Individual Animated Word component for custom composite headings
export function AnimatedWord({
  text,
  index = 0,
  delay = 0,
  className = "",
}: {
  text: string;
  index?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-block overflow-hidden align-bottom mb-[-0.16em] pb-[0.16em] mr-[0.2em] ${className}`}>
      <motion.span
        initial={{ y: "115%", rotate: 4, opacity: 0 }}
        whileInView={{ y: "0%", rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
          delay: delay + index * 0.045,
        }}
        className="inline-block will-change-transform"
      >
        {text}
      </motion.span>
    </span>
  );
}
