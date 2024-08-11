import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import clients from "../assets/clients.png";
import herobanner from "../assets/herobanner.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="hero"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between  items-center gap-28 py-20 sm:px-20"
    >
      <div className="flex flex-col justify-center items-start gap-8">
        <h1
          data-aos="zoom-in"
          data-aos-delay=""
          className="text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu"
        >
          Social Media Marketing
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="font-ubuntu text-[20px] text-slate-700"
        >
          We design exceptional brands, products, web app, <br />
          website for startups and enterprices.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="600"
          className="bg-flamered px-6 py-4 rounded-full text-[17px] font-ubuntu font-semibold hover:bg-black hover:text-white"
        >
          Get Started Now
        </button>
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="flex lg:flex-row flex-col justify-center lg:items-center items-start gap-10"
        >
          <img src={clients} alt="" />
          <p className="font-ubuntu text-[20px] font-bold text-black">
            Trusted by 5000+ WorldWide Brand and Custormers
          </p>
        </div>
      </div>
      <div>
        <img
          data-aos="zoom-in"
          data-aos-delay="1000"
          src={herobanner}
          alt=""
          className="lg:w-[750px] lg:h-[550px]"
        />
      </div>
    </section>
  );
};

export default Hero;
