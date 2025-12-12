import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import Marquee from "../components/magicui/Marquee";

const Testimonials = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  const ReviewCard = ({ testimonial, index }) => (
    <GlowCard card={testimonial} index={index}>
      <div className="flex items-center gap-3">
        <div>
          <img src={testimonial.imgPath} alt="" />
        </div>
        <div>
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-white-50">{testimonial.mentions}</p>
        </div>
      </div>
    </GlowCard>
  );

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden mt-16">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((testimonial, index) => (
              <ReviewCard key={index} testimonial={testimonial} index={index} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((testimonial, index) => (
              <ReviewCard key={index} testimonial={testimonial} index={index + firstRow.length} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
