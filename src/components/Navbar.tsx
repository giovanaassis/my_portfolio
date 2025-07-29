import Brasil from "@/assets/brasil.png";
import UK from "@/assets/united-kingdom.png";
import { MoonIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const navItems: string[] = [
    "home",
    "sobre mim",
    "projetos",
    "tecnologias",
    "contato",
  ];
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className="flex w-full items-center justify-between px-15 py-7 fixed top-0 z-50 bg-background shadow-md">
      {/* COUNTRY FLAGS */}
      <div className="flex gap-5">
        <img src={Brasil} alt="brazil-flag" width={40} />
        <img src={UK} alt="united-kingdom-flag" width={40} />
      </div>

      {/* MENUBAR FOR BIG SCREENS */}
      <DesktopMenu navItems={navItems} />

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

      <MobileMenu navItems={navItems} openMenu={openMenu} />
    </nav>
  );
}

export default Navbar;
