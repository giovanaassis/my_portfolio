import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import type { JSX } from "react";

function ScrollStack() {
  const icons: JSX.Element[] = [
    <FaHtml5 />,
    <FaCss3Alt />,
    <BiLogoJavascript />,
    <BiLogoTypescript />,
    <BiLogoTailwindCss />,
    <FaReact />,
    <FaNodeJs />,
  ];

  return (
    <article className="bg-secondary-purple text-white text-4xl py-1 flex gap-8">
      <ul className="iconsContainer">
        {icons.map((icon) => (
          <li className="cursor-default">{icon}</li>
        ))}
      </ul>

      <ul className="iconsContainer">
        {icons.map((icon) => (
          <li className="cursor-default">{icon}</li>
        ))}
      </ul>

      <ul className="iconsContainer">
        {icons.map((icon) => (
          <li className="cursor-default">{icon}</li>
        ))}
      </ul>

      <ul className="iconsContainer">
        {icons.map((icon) => (
          <li className="cursor-default">{icon}</li>
        ))}
      </ul>
    </article>
  );
}

export default ScrollStack;
