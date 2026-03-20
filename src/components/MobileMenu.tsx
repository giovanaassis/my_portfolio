interface MobileMenuProps {
  navItems: string[];
  openMenu: boolean;
}

function MobileMenu({ navItems, openMenu }: MobileMenuProps) {
  return (
    <ul className={`navbarMobile lg:hidden ${openMenu ? "activeMenu" : ""}`}>
      {navItems.map((item, index) => (
        <a href={`#${item === "home" ? "" : item}`} key={index}>
          <li key={index}>{item}</li>
        </a>
      ))}
      <p className="font-extralight mt-15">👩‍💻 @giovanaassis</p>
    </ul>
  );
}

export default MobileMenu;
