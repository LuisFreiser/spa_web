"use client";
import { motion } from "framer-motion";

export default function MotionTransitions({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(200px)" }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
    >
      {children}
    </motion.div>
  );
}
