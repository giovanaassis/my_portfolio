import type { ProjectType } from "@/@types/project";
import { fadeDown } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

function MobileProjectCard({ project }: { project: ProjectType }) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { id, title, image, techs, link, description } = project;

  return (
    <>
      <motion.div
        {...fadeDown}
        transition={{ delay: id * 0.2, ease: "easeOut", duration: 0.4 }}
        viewport={{ amount: 0.1, once: true }}
        className="mobileProjectCard lg:hidden"
        onClick={() => setIsOpenModal(true)}
      >
        <img
          src={image}
          alt={`project ${title} image`}
          className="h-full rounded-xl object-cover"
        />
      </motion.div>
      {isOpenModal && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div className="bg-white text-dark-purple dark:bg-[#212529] dark:text-white w-[80%] max-h-[500px] overflow-y-scroll flex flex-col rounded-2xl">
            <img
              src={image}
              alt={`project ${title} image`}
              className="rounded-tl-2xl rounded-tr-2xl"
            />

            <div className="flex items-center w-full justify-between p-5">
              <span className="text-2xl font-bak">0{id}</span>
              <FaWindowClose
                onClick={() => setIsOpenModal(false)}
                className="text-3xl cursor-pointer hover:opacity-30"
              />
            </div>

            <div className="text-left px-5 pb-5 flex flex-col gap-8 w-full">
              <h2>{title}</h2>
              <div className="w-full flex flex-wrap">
                {techs.map((tech) => (
                  <span className="projectTechs">{tech}</span>
                ))}
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="italic uppercase flex gap-2"
              >
                Ir para o site <ArrowUpRight size={20} />
              </a>
              <p>{description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default MobileProjectCard;
