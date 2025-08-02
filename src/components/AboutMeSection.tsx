import ProfileImage from "@/assets/profile-image.jpg";
import { motion } from "motion/react";
import { Trans, useTranslation } from "react-i18next";

function AboutMeSection() {
  const { t } = useTranslation("aboutMe");
  const navItems = t("navItems", {
    returnObjects: true,
    ns: "home",
  }) as string[];

  return (
    <section id={navItems[1]} className="scroll-mt-30">
      <h1 className="highlightTitle mx-auto">{t("title")}</h1>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-20 text-center leading-9">
        <motion.div
          className="w-60 h-60 rounded-full overflow-hidden border-4 border-primary-purple shrink-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <img
            src={ProfileImage}
            alt="my-profile-image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="w-[300px] md:w-[500px] md:text-left"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <p>
            <Trans
              i18nKey="paragraph1"
              ns="aboutMe"
              components={{ 1: <span className="highlightText" /> }}
            />
          </p>

          <p>
            <Trans
              i18nKey="paragraph2"
              ns="aboutMe"
              components={{
                1: <span className="highlightText" />,
                2: <span className="highlightText" />,
              }}
            />
          </p>

          <p>
            <Trans
              i18nKey="paragraph3"
              ns="aboutMe"
              components={{ 1: <span className="highlightText" /> }}
            />
          </p>

          <a href="/cv-giovana-assis.pdf" download="cv-giovana-assis.pdf">
            <button className="primaryButton">{t("downloadCV")}</button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMeSection;
