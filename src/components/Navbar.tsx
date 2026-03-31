import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  const navItems = ["home", "sobre", "projetos", "tecnologias", "contato"];
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    // TO ADD THE SHADOW WHEN SCROLL
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex w-full items-center justify-around py-7 fixed top-0 z-50 bg-background text-primary-purple ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <span className="font-bak text-primary-purple text-2xl select-none">
        &lt;GioAssis /&gt;
      </span>

      {/* MENUBAR FOR BIG SCREENS */}
      <DesktopMenu navItems={navItems} />

      {/* TODO -> CHANGED MOBILE MENU */}
      <MobileMenu navItems={navItems} openMenu={openMenu} />

      {/* DARK MODE BUTTON */}
      <DarkModeButton />

      {/* MENUBAR FOR MOBILE */}
      {openMenu ? (
        <XIcon
          className="text-word cursor-pointer lg:hidden z-2"
          size={40}
          onClick={() => setOpenMenu(!openMenu)}
        />
      ) : (
        <MenuIcon
          className="text-word cursor-pointer lg:hidden"
          size={40}
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}
    </nav>
  );
}

export default Navbar;
