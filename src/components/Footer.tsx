import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-secondary-purple text-white text-center text-lg p-5 font-medium select-none">
      <span>{t("footer-text")}</span>
    </footer>
  );
}

export default Footer;
