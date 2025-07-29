interface MobileMenuProps {
  navItems: string[];
  openMenu: boolean;
}

function MobileMenu({ navItems, openMenu }: MobileMenuProps) {
  return (
    <ul className={`navbarMobile lg:hidden ${openMenu ? "activeMenu" : ""}`}>
      {navItems.map((item, index) => (
        <a href={`#${item}`}>
          <li key={index}>{item}</li>
        </a>
      ))}
    </ul>
  );
}

export default MobileMenu;
