import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function ContactSection() {
  return (
    <section>
      <h1 className="highlightTitle mx-auto">Vamos bater um papo?</h1>

      <div className="flex flex-col items-center justify-center gap-15 mt-20">
        {/* MY SOCIALS */}
        <div className="flex flex-col items-center gap-10">
          <button className="tertiaryButton">
            <a
              href="https://www.linkedin.com/in/giovanadeassis/"
              className="flex items-center justify-between gap-5"
            >
              <FaLinkedin />
              <span>Meu Linkedin</span>
              <ArrowUpRight />
            </a>
          </button>

          <button className="tertiaryButton">
            <a
              href="https://github.com/giovanaassis"
              className="flex items-center justify-between gap-5"
            >
              <FaGithub />
              <span>Meu Github</span>
              <ArrowUpRight />
            </a>
          </button>
        </div>

        {/* CONTACT FORM */}
        <form className="flex flex-col gap-5 w-full items-center">
          <input type="text" name="name" id="name" placeholder="Nome" className="inputs"/>
          <input type="email" name="email" id="email" placeholder="E-mail" className="inputs"/>

          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem aqui..."
            rows={10}
            className="inputs"
          ></textarea>

          <button className="primaryButton w-full">enviar</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
