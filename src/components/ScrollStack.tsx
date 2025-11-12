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
    <article className="bg-secondary-purple text-white text-4xl py-1 flex gap-8 overflow-hidden w-full">
      <ul className="iconsContainer">
        {icons.map((icon, index) => (
          <li className="cursor-default" key={index}>
            {icon}
          </li>
        ))}
      </ul>

      <ul className="iconsContainer">
        {icons.map((icon, index) => (
          <li className="cursor-default" key={index}>
            {icon}
          </li>
        ))}
      </ul>

      <ul className="iconsContainer">
        {icons.map((icon, index) => (
          <li className="cursor-default" key={index}>
            {icon}
          </li>
        ))}
      </ul>

      <ul className="iconsContainer">
        {icons.map((icon, index) => (
          <li className="cursor-default" key={index}>
            {icon}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ScrollStack;
