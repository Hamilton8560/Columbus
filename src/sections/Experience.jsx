import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { featureCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import { BentoGrid, BentoCard } from "../components/magicui/BentoGrid";
import { PackageIcon, TruckIcon, DollarIcon, ClockIcon, ChartIcon } from "../components/Icons";
import { BorderBeam } from "../components/magicui/BorderBeam";
import { OrbitingCircles } from "../components/magicui/OrbitingCircles";
import { AnimatedBeam, Circle } from "../components/magicui/AnimatedBeam";
import { ShineBorder } from "../components/magicui/ShineBorder";
import { NumberCounter } from "../components/magicui/NumberCounter";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const shipperRef = useRef(null);
  const centralRef = useRef(null);
  const carrierRef = useRef(null);

  useGSAP(() => {
    // Animate cards appearing on scroll
    gsap.utils.toArray(".feature-card").forEach((card, index) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true,
        },
      });
    });

    // Animate the title
    gsap.from(".feature-title", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".feature-title",
        start: "top 85%",
        once: true,
      },
    });

    // Animate the connection diagram
    gsap.from(".connection-diagram", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".connection-diagram",
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "package":
        return PackageIcon;
      case "truck":
        return TruckIcon;
      case "dollar":
        return DollarIcon;
      default:
        return PackageIcon;
    }
  };

  const EnhancedBentoCard = ({ card, index }) => (
    <BorderBeam
      className="h-full"
      size={300}
      duration={12 + index * 2}
      delay={index * 0.5}
      colorFrom="#18CCFC"
      colorTo="#6344F5"
    >
      <BentoCard
        name={card.name}
        className="h-full border-0"
        Icon={getIcon(card.icon)}
        description={card.description}
        highlight={card.highlight}
        features={card.features.slice(0, 3)} // Show only first 3 features
        cta={
          <ShineBorder borderRadius={12} className="w-full">
            <div className="w-full text-center py-2 font-medium text-white">
              {card.cta}
            </div>
          </ShineBorder>
        }
        background={
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
          </div>
        }
      />
    </BorderBeam>
  );

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding"
    >
      <div className="w-full h-full md:px-20 px-5">
        <div className="feature-title">
          <TitleHeader
            title="How Columbus Works"
          />
        </div>


        {/* Feature Cards */}
        <div className="mt-16">
          <BentoGrid>
            {featureCards.map((card, index) => (
              <div key={card.id} className="feature-card">
                <EnhancedBentoCard card={card} index={index} />
              </div>
            ))}
          </BentoGrid>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-center">
          <BorderBeam className="px-8 py-4" size={200} duration={10} colorFrom="#00FF87" colorTo="#60EFFF">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <NumberCounter value={800} suffix="+" />
              </div>
              <div className="text-white-50 text-sm">Active Carriers</div>
            </div>
          </BorderBeam>

          <BorderBeam className="px-8 py-4" size={200} duration={15} colorFrom="#FF6B6B" colorTo="#4ECDC4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <NumberCounter value={25} suffix="%" />
              </div>
              <div className="text-white-50 text-sm">Average Savings</div>
            </div>
          </BorderBeam>

          <BorderBeam className="px-8 py-4" size={200} duration={12} colorFrom="#A8E6CF" colorTo="#FFB6C1">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <NumberCounter value={98} suffix="%" />
              </div>
              <div className="text-white-50 text-sm">On-Time Delivery</div>
            </div>
          </BorderBeam>
        </div>
      </div>
    </section>
  );
};

export default Experience;