import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [showHint, setShowHint] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  // Show mobile hint after a delay
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setShowHint(true);
        // Auto-hide after 5 seconds
        setTimeout(() => setShowHint(false), 5000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Moving
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="freight"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Direct to Carriers</h1>
              <h1>Without the Middleman</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Columbus connects shippers directly with carriers for full
              truckload freight.
            </p>

            <Button
              text="Get Started"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className={`hero-3d-layout ${isMobile ? 'pointer-events-none' : ''}`}>
            <HeroExperience />
            

          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
