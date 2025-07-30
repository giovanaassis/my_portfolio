import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-30">
      <h1 className="highlightTitle mx-auto">Vamos bater um papo?</h1>

      <div className="flex flex-col items-center justify-center gap-15 mt-20 lg:flex-row">
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

        {/* STYLED LINE */}
        <div className="w-[1px] h-120 bg-primary-purple hidden lg:block"></div>

        {/* CONTACT FORM */}
        <form
          action="https://formsubmit.co/ec9031f0ff9ceea364825579d87b7a0e"
          method="post"
          className="flex flex-col gap-5 w-full lg:w-[350px] items-center"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            className="inputs"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="inputs"
          />

          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem aqui..."
            rows={10}
            className="inputs"
          ></textarea>

          <button
            type="submit"
            className="primaryButton w-full lg:w-[50%] lg:self-start"
          >
            enviar
          </button>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/"
          ></input>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
