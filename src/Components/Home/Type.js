import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["System Engineer", "Good Listener", "Quick Learner"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;
