import React from "react";
import Particles from "react-tsparticles";

const particleOptions = {
  fullScreen: false,
  background: {
    color: "transparent",
  },
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        area: 1200,
      },
    },
    color: {
      value: ["#8b5cf6", "#22d3ee", "#a855f7"],
    },
    opacity: {
      value: 0.3,
      animation: {
        enable: true,
        speed: 0.6,
        minimumValue: 0.05,
      },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      outModes: {
        default: "out",
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#8b5cf6",
      opacity: 0.2,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      grab: {
        distance: 180,
        links: {
          opacity: 0.35,
        },
      },
    },
  },
  detectRetina: true,
} as const;

const Particle: React.FC = () => {
  return <Particles id="tsparticles" className="pointer-events-none" options={particleOptions as any} />;
};

export default Particle;
