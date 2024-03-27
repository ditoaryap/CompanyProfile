import Image from "next/image";
import ImagePerson from "../../../public/assets/images/ImagePerson.png";
import Star from "../components/Star";
import Rectangle from "../../../public/assets/images/rectangle.png";

const cardList = [
  {
    name: "Marteen",
    desc: "The most important part of the Startup Framework is the samples",
    imagePerson: ImagePerson,
    altImg: "test",
    star: Star,
  },
  {
    name: "Marteen",
    desc: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    imagePerson: ImagePerson,
    altImg: "test",
    star: Star,
  },
  {
    name: "Marteen",
    desc: "I’ve built my website with Startup just in one day, and it was ready-to-go.",
    imagePerson: ImagePerson,
    altImg: "test",
    star: Star,
  },
];

export default function Testimonial() {
  return (
    <div className="mt-[140px]">
      <div className="text-center">
        <h1 className="text-[22px] mb-2.5 tracking-[2.86px] font-light">
          TESTIMONIALS
        </h1>
        <h3 className="text-[52px]">What People Say About Us ?</h3>
        <div className="flex justify-center gap-[25px] mt-10">
          <Image
            src={Rectangle}
            alt="test"
            className="absolute -z-30 -mt-[25px]"
          />
          {cardList.map((list, index) => (
            <div
              key={index}
              className="w-[380px] h-[380px] bg-white p-[25px] rounded-[25px] shadow-xl"
            >
              <div className="mb-5">
                <Image
                  src={list.imagePerson}
                  alt={list.altImg}
                  className="border border-black rounded-full border-dashed"
                />
              </div>
              <div className="text-start flex flex-col gap-[18px]">
                <div className="text-lg transition-all duration-300 hover:text-amber-800">
                  {list.desc}
                </div>
                <div>{list.star && <list.star />}</div>
                <div className="font-bold">{list.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
