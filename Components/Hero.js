"use client";
import { useEffect, useState } from "react";
import TextPressure from "./Animation/text-pressure";
import DecryptedText from "./Animation/decrypted-text";

const Hero = () => {
  const [greeting, setGreeting] = useState("Hello!");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) {
      setGreeting("Good Morning!");
    } else if (hours >= 12 && hours < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }
  }, []);
  return (
    <div className="min-h-svh flex items-center justify-center relative flex-col">
      <h1 className="flex items-center justify-center text-center">
        <TextPressure
          text="Hello!"
          flex={true}
          alpha={false}
          weight={true}
          width={true}
          italic={true}
          textColor="#ffffff"
          minFontSize={70}
          // fontFamily={oswald}
          className="px-10 tracking-[6rem] text-center"
        />
      </h1>
      <h2 className="mt-3">
        <DecryptedText
          text={greeting}
          animateOn="view"
          revealDirection="center"
        />
      </h2>
    </div>
  );
};
export default Hero;
