import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: ["Software Engineer", "React Native specialist", "Open source contributor", "Product-focused builder"],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        wrapperClassName: "text-2xl md:text-3xl text-brand-100 leading-snug",
        cursorClassName: "text-3xl text-brand-200",
      }}
    />
  );
};

export default Type;
