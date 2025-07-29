import { useState } from "react";

function DesktopMenu({ navItems }: { navItems: string[] }) {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <ul className="relative h-[50px] px-5 border-2 border-primary-purple rounded-full lg:flex items-center justify-center gap-5 hidden">
      {navItems.map((item, index) => (
        <a href={`#${item}`}>
          <li
            key={index}
            onClick={() => setActiveItem(index)}
            className={`transition-all duration-300 ${
              activeItem === index ? "activeNavItem" : ""
            }`}
          >
            {item}
          </li>
        </a>
      ))}
    </ul>
  );
}

export default DesktopMenu;
