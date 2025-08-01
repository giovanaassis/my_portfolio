import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import DarkModeButton from "./DarkModeButton";
import { useTranslation } from "react-i18next";
import Flags from "./Flags";

function Navbar() {
  const { t } = useTranslation("home");
  const navItems = t("navItems", { returnObjects: true }) as string[];
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
      className={`flex w-full items-center justify-between px-15 py-7 fixed top-0 z-50 bg-background text-word ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* COUNTRY FLAGS */}
      <Flags />

      {/* MENUBAR FOR BIG SCREENS */}
      <DesktopMenu navItems={navItems} />

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

      <MobileMenu navItems={navItems} openMenu={openMenu} />
    </nav>
  );
}

export default Navbar;
