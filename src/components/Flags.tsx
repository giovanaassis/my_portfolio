import Brasil from "@/assets/brasil.png";
import UK from "@/assets/united-kingdom.png";
import { useTranslation } from "react-i18next";

function Flags() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "pt" | "en") => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-5">
      <img
        src={Brasil}
        alt="brazil-flag"
        width={40}
        className="border-2 border-transparent cursor-pointer transition-all duration-250 hover:border-secondary-purple rounded-full"
        onClick={() => changeLanguage("pt")}
      />
      <img
        src={UK}
        alt="united-kingdom-flag"
        width={40}
        className="border-2 border-transparent cursor-pointer transition-all duration-250 hover:border-secondary-purple rounded-full"
        onClick={() => changeLanguage("en")}
      />
    </div>
  );
}

export default Flags;
