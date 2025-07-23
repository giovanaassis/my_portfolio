import Brasil from "@/assets/brasil.png";
import UK from "@/assets/united-kingdom.png";
import { MoonIcon } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState<number>(0);
  const navItems: string[] = [
    "home",
    "sobre mim",
    "projetos",
    "tecnologias",
    "contato",
  ];

  return (
    <nav className="flex w-full items-center justify-between px-15 pt-7">
      {/* COUNTRY FLAGS */}
      <div className="flex gap-5">
        <img src={Brasil} alt="brazil-flag" width={40} />
        <img src={UK} alt="united-kingdom-flag" width={40} />
      </div>

      {/* MENUBAR */}
      <ul className="relative h-[50px] px-5 border-2 border-primary-purple rounded-full flex items-center justify-center gap-5">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveItem(index)}
            className={`transition-all duration-200 ${
              activeItem === index ? "activeNavItem" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* DARK MODE BUTTON */}
      <button>
        <MoonIcon />
      </button>
    </nav>
  );
}

export default Navbar;
