import Brasil from "@/assets/brasil.png";
import UK from "@/assets/united-kingdom.png";
import { MoonIcon } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-15 pt-7">
      {/* COUNTRY FLAGS */}
      <div className="flex gap-5">
        <img src={Brasil} alt="brazil-flag" width={40} />
        <img src={UK} alt="united-kingdom-flag" width={40} />
      </div>

      {/* MENUBAR */}
      <ul className="flex gap-5">
        <li>sobre mim</li>
        <li>projetos</li>
        <li>tecnologias</li>
        <li>contato</li>
      </ul>

      {/* DARK MODE BUTTON */}
      <button>
          <MoonIcon />
      </button>
    </nav>
  );
}

export default Navbar;
