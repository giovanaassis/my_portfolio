import Brasil from "@/assets/brasil.png";
import UK from "@/assets/united-kingdom.png";
import { MoonIcon, MenuIcon, XIcon } from "lucide-react";
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
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className="flex w-full items-center justify-between px-15 pt-7">
      {/* COUNTRY FLAGS */}
      <div className="flex gap-5">
        <img src={Brasil} alt="brazil-flag" width={40} />
        <img src={UK} alt="united-kingdom-flag" width={40} />
      </div>

      {/* MENUBAR FOR BIG SCREENS */}
      <ul className="relative h-[50px] px-5 border-2 border-primary-purple rounded-full lg:flex items-center justify-center gap-5 hidden">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveItem(index)}
            className={`transition-all duration-300 ${
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

      {/* MENUBAR FOR MOBILE */}
      {openMenu ? (
        <XIcon
          className="text-secondary-purple cursor-pointer lg:hidden z-2"
          size={40}
          onClick={() => setOpenMenu(!openMenu)}
        />
      ) : (
        <MenuIcon
          className="text-secondary-purple cursor-pointer lg:hidden"
          size={40}
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}

      <ul className={`navbarMobile lg:hidden ${openMenu ? "activeMenu" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
