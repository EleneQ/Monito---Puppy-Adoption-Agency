import { OneMoreFriend } from "./";
import HeroImg from "../images/Hero/Hero.png";

const Hero = () => {
  return (
    <section className="bg-primary-beige-gradient pt-[6rem] h-[650px] overflow-hidden rounded-ee-[40px] rounded-es-[40px]">
      {/** the max-width is so that the content doesn't go too far apart on bigger screens */}
      <div className="hero-section__container | h-full padding-x max-width-center">
        <OneMoreFriend
          className={
            "hero-section_content | text-primary-blue-10 md:min-w-[25rem] mt-3 sm:mt-[2rem] md:mt-[4rem]"
          }
        />
        <div className="hero-img">
          <img
            className=""
            src={HeroImg}
            alt="a woman holding a cute dog and smiling"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
