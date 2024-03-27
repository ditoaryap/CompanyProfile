import Image from "next/image";
import HeroImage from "../../../public/assets/HeroImage.svg";
import Gradient from "../../../public/assets/Gradient.svg";
import Button from "../components/Button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-[55px]">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-[54px] w-[710px] font-bold">
          Limitless Creativity, Quality Digital Solutions
        </h1>
        <p className="mt-[40px] text-[22px] w-[749px] text-center mx-auto">
          Get high-quality digital soultions with our passionate team and
          extensive experience, we help brands achieve success in digital era.
        </p>
        <div className="mt-[40px] gap-5 flex">
          <a href="/services">
            <Button value="Start A Project" />
          </a>
          <a href="/about" className="items-center flex">
            <button className="px-6 text-[20px] hover:text-amber-500 transition-all duration-500 ">
              About Us
            </button>
          </a>
        </div>
      </div>
      <div className="mt-[60px] h-full w-full flex justify-center">
        <Image
          src={Gradient}
          alt="gradient"
          className="w-full object-cover -mt-[28px] h-[716px]"
        />
        <Image src={HeroImage} alt="image hero" className="absolute" />
      </div>
    </div>
  );
}
