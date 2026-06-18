import React from "react";
import useInView from "../Hooks/useInView";

type RevealProps = {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
};

const Reveal: React.FC<RevealProps> = ({ children, delayMs = 0, className = "" }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${isInView ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
