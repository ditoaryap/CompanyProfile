import React from "react";
import Uiux from "../../../public/assets/uiux.svg";
import WebDev from "../../../public/assets/web-dev.svg";
import MobileDev from "../../../public/assets/mobile-dev.svg";
import Image from "next/image";
import ButtonCard from "../components/ButtonCard";

const servicesLinks = [
  {
    name: "UI/UX Design",
    src: Uiux,
    alt: "UI/UX",
    desc: "We offer tailored user interface (UI) and user experience (UX) design services to make your product stand out in a competitive market. With a user-centered approach, we create engaging, intuitive designs that focus on your users' needs.",
  },
  {
    name: "Mobile Dev",
    src: MobileDev,
    alt: "Mobile Dev",
    desc: "Our mobile development team is ready to help you bring your mobile app ideas to life. From concept to launch, we provide innovative, responsive, high-performance mobile app development solutions on various platforms, including iOS and Android.",
  },
  {
    name: "Website Dev",
    src: WebDev,
    alt: "Website Dev",
    desc: "We offer web development services that capture your brand identity and create outstanding experiences for your users. Using the latest technology and industry best practices, we build responsive, and visually appealing websites that meet your business needs.",
  },
];

export default function ServicesSection() {
  return (
    <div className="mt-[80px]">
      <div className="text-center">
        <h1 className="text-[22px] mb-2.5 tracking-[2.86px] font-light">
          SERVICE
        </h1>
        <h3 className="text-[52px]">What Can We Make</h3>
      </div>
      <div className="flex justify-center gap-[70px]">
        {servicesLinks.map((link, index) => (
          <div className="flex flex-col items-center text-center mt-[40px] px-[30px] py-[30px] w-[352px] h-auto gap-[40px] shadow-2xl hover:shadow-amber-500 rounded-[25px] transition-all duration-500 hover:scale-105">
            <Image
              src={link.src}
              alt={link.alt}
              className="w-[150px] h-[150px]"
            />
            <div>
              <h1 className="text-[32px] font-bold mb-[25px]">{link.name}</h1>
              {link.desc}
            </div>
            <a href="/services">
              <ButtonCard value="Let's Start" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
