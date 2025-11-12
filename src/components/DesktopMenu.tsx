import { useEffect, useState } from "react";

function DesktopMenu({ navItems }: { navItems: string[] }) {
  const [activeItem, setActiveItem] = useState<string>("home");
  const [manualScroll, setManualScroll] = useState<boolean>(false);

  const handleClick = (item: string) => {
    setManualScroll(true);
    setActiveItem(item);
    setTimeout(() => setManualScroll(false), 800);
  };

  useEffect(() => {
    // AUTOMATIC SCROLL
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !manualScroll) {
          const id = entry.target.id;
          if (navItems.includes(id)) {
            setActiveItem(id);
          }
        }
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    navItems.forEach((item) => {
      const section = document.getElementById(item);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems, manualScroll]);

  return (
    <ul className="relative h-[50px] px-5 border-2 border-primary-purple rounded-full lg:flex items-center justify-center gap-5 hidden">
      {navItems.map((item, index) => (
        <a href={`#${item === "home" ? "" : item}`} key={index}>
          <li
            key={index}
            onClick={() => handleClick(item)}
            className={`transition-all duration-300 ${
              activeItem === item ? "activeNavItem" : ""
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
