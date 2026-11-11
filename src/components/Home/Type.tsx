import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Product-focused builder",
          "React Native specialist",
          "Modern UI refresh partner",
          "AI-native workflow builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        wrapperClassName: "text-2xl md:text-3xl text-ink leading-snug",
        cursorClassName: "text-3xl text-accent",
      }}
    />
  );
};

export default Type;
