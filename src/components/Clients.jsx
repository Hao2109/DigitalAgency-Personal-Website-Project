import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import testimonials from "../assets/testimonial.png";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="testimonials"
      className="w-[90%] m-auto flex flex-col lg:flex-row justify-between items-center gap-28 py-20 bg-red-200"
    >
      <div className="lg:w-[50%] w-full">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={testimonials}
          alt=""
          className="lg:w-[1000px] lg:h-[550px]"
        />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col justify-center lg:items-start items-center gap-4">
        <h1 className="text-lime-500 font-ubuntu text-[19px] font-semibold">
          TESTIMONIALS
        </h1>
        <h1 className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-ubuntu text-center">
          What Our Clients Says
        </h1>
      </div>
    </section>
  );
};

export default Clients;
