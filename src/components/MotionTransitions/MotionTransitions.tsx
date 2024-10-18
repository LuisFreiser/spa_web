"use client";
import { motion } from "framer-motion";
//ANIMACION DE TRANSICION DE DESPLAZAMIENTO DE DERECHA A IZQUIERDA
export function MotionTransitions_A({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5, transform: "translateX(-200px)" }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: [0, 1], transform: "translateX(0px)" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
//ANIMACION DE TRANSICION DE DESPLAZAMIENTO DE IZQUIERDA A DERECHA
export function MotionTransitions_B({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5, transform: "translateX(200px)" }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: [0, 1], transform: "translateX(0px)" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
