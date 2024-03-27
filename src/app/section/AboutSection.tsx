import Image from "next/image";
import React from "react";
import AboutImg from "../../../public/assets/images/about.png";
import TeamsSection from "./TeamsSection";

function AboutSection() {
  return (
    <div className="mt-[60px]">
      <div className="text-center mb-[40px]">
        <h3 className="text-[52px]">About Us</h3>
      </div>
      <div className="flex mx-[120px] gap-5">
        <div className="flex-wrap align-middle items-center mr-6">
          <p className="mb-3">
            Since our inception in 1945, Apex Digital Agency has been a beacon
            of innovation in the digital landscape. From our earliest days,
            we've been driven by a passion for pushing boundaries and creating
            transformative digital experiences. Over the years, we've evolved
            into a trusted partner for businesses seeking to thrive in an
            increasingly digital world. Our journey has been marked by a
            relentless commitment to excellence, integrity, and forward-thinking
            solutions. As we continue to grow and adapt to new challenges, we
            remain dedicated to shaping the future of digital innovation and
            driving success for our clients.
          </p>
          <p>
            At Apex Digital Agency, we believe that every project is an
            opportunity to make a meaningful impact. From small businesses to
            large enterprises, we approach each endeavor with creativity,
            collaboration, and a relentless pursuit of excellence. Our team of
            passionate professionals is united by a shared vision of leveraging
            technology to empower our clients and help them achieve their goals.
            With a focus on innovation and customer-centricity, we strive to
            deliver cutting-edge solutions that drive measurable results and
            leave a lasting impression.
          </p>
        </div>
        <Image src={AboutImg} alt="test" className="w-[630px] h-[500px]" />
      </div>
      <TeamsSection />
    </div>
  );
}

export default AboutSection;
