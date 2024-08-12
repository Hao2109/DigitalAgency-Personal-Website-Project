import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import about from "../assets/about.png";
import { FaChevronCircleRight } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="about"
      className="w-[90%] mx-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20"
    >
      <div>
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={about}
          alt=""
          className="lg:w-[1000px] lg:h-[550px]"
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="flex flex-col justify-center items-start gap-4"
      >
        <h1 className="text-lime-500 font-ubuntu text-[19px] font-semibold">
          WHO WE ARE
        </h1>
        <h1 className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-ubuntu">
          The leading social media marketing agency
        </h1>
        <p className="font-ubuntu text-[18px] text-slate-700 w-[80%]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="flex flex-col justify-center items-start gap-4 ">
          <p
            className="text-black flex justify-center items-center gap-4 font-ubi
          "
          >
            <FaChevronCircleRight className="text-limegreen size-6" />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p
            className="text-black flex justify-center items-center gap-4 font-ubi
          "
          >
            <FaChevronCircleRight className="text-limegreen size-6" />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p
            className="text-black flex justify-center items-center gap-4 font-ubi
          "
          >
            <FaChevronCircleRight className="text-limegreen size-6" />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <button className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default About;
