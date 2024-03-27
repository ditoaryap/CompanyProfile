import Image from "next/image";
import Logo from "../../../public/assets/Logo.svg";

const navLinks = [
  { name: "Home", type: "button", path: "/" },
  { name: "About Us", type: "button", path: "/about" },
  { name: "Services", type: "button", path: "/services" },
  { name: "Our Teams", type: "button", path: "/teams" },
];

function Footer() {
  return (
    <div className="my-[100px] mx-[135px] flex items-center justify-between">
      <div className="flex items-center gap-[50px]">
        <Image src={Logo} alt="logo" className="w-[120px]" />
        <h1>© 2024 Apex Digital Agency. All rights reserved.</h1>
      </div>
      <div className="flex gap-[60px]">
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
    </div>
  );
}

export default Footer;
