import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";

const navLinks = [
  { name: "Home", type: "button", path: "/" },
  { name: "About Us", type: "button", path: "/about" },
  { name: "Services", type: "button", path: "/services" },
  { name: "Our Teams", type: "button", path: "/teams" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-white bg-opacity-30 backdrop-blur-[20px] h-[85px] px-[80px]">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="flex gap-[60px] ">
        {navLinks.map((link, index) => (
          <a
            className="hover:text-amber-500 before:underline"
            type={link.type}
            href={link.path}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
