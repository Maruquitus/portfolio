"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLock,
  faGraduationCap,
  faMusic,
  faClipboardCheck,
  faComments,
  faCheckCircle,
  faFileInvoice,
  faCloudSun,
  faSchool,
  faUser,
  faMoon,
  faSun,
  faDove,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    const handleDarkModeChange = (event: any) => {
      setDark(event.matches);
    };

    setDark(prefersDarkMode.matches);

    prefersDarkMode.addEventListener("change", handleDarkModeChange);

    return () => {
      prefersDarkMode.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (dark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, [dark]);

  return (
    <div className="bg-white dark:bg-black w-full h-full duration-300">
      <header className="shadow-lg bg-white dark:bg-black duration-300 transition-all w-full z-10 shadow-purple-500/15 h-16 flex fixed">
        <button
          onClick={() => setDark(!dark)}
          className="rounded-md  text-2xl h-9 w-9 my-auto ml-4 hover:scale-105 translate-y-0.5 duration-300 transition-all"
        >
          <FontAwesomeIcon
            className="text-gray-600 dark:text-gray-200 h-6 m-auto duration-300"
            icon={dark ? faMoon : faSun}
          />
        </button>
        <div className="ml-auto mr-4 my-auto flex gap-4">
          <a
            target="_blank"
            href="https://github.com/Maruquitus"
            className="font-medium text-sm text-gray-800 dark:text-gray-100 my-auto flex hover:scale-105 duration-300 cursor-pointer"
          >
            <FontAwesomeIcon
              className="h-5 text-xl my-auto mr-1"
              icon={faGithub}
            />
            Github
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/marcos-sousa-39aaa6262/"
            className="font-medium text-sm text-gray-800 dark:text-gray-100 my-auto flex hover:scale-105 duration-300 cursor-pointer"
          >
            <FontAwesomeIcon
              className="h-5 text-xl my-auto mr-1"
              icon={faLinkedin}
            />
            LinkedIn
          </a>
        </div>
      </header>

      <main className="w-full h-full flex flex-col">
        <div className="mt-16"></div>
        <section className="flex sm:flex-row flex-col w-full my-10">
          <img
            className="rounded-full mx-auto sm:ml-8 mb-4 object-cover aspect-square sm:my-auto h-56 sm:h-72 shadow-lg shadow-[#9993]"
            src="foto.jpg"
          />
          <div className="mx-auto sm:ml-4">
            <div className="w-10/12 sm:w-full mx-8 sm:ml-0">
              <Badge>Sobre mim 🧐</Badge>
            </div>
            <h1 className="font-bold w-10/12 sm:w-full mx-8 sm:mx-0 text-4xl dark:text-white duration-300">
              Marcos Paulo
              <br /> da Silva Sousa
            </h1>
            <h2 className="dark:text-white font-medium mx-8 sm:mx-0 w-10/12 sm:w-full duration-300">
              Desenvolvedor Web e Mobile
            </h2>
            <ul className="w-10/12 mx-8 sm:mx-0 md:w-2/3 dark:text-white text-md mt-2">
              <li>
                📖 Estudante do 3º Ano Técnico em Informática da EEEP Edson
                Queiroz.
              </li>
              <li>
                🧒 Apaixonado por programação desde o 7º ano do ensino
                fundamental.
              </li>
              <li>
                🌐 Me identifico principalmente com desenvolvimento Web e
                Mobile.
              </li>
              <li>
                🔭 Desenvolvedor do projeto ganhador da etapa regional da Crede
                9 no Ceará Científico 2023 que utiliza aprendizado de máquina,
                React Native, AWS e Python, CorrAut. Design de interfaces e
                front-end do site por{" "}
                <a
                  className="font-semibold"
                  target="_blank"
                  href="https://github.com/GuilhermePain"
                >
                  @GuilhermePain
                </a>
                .
              </li>
              <li>✉️ Email para contato: marcospauloda.s.s@gmail.com.</li>
            </ul>
          </div>
        </section>
        <hr className="solid block border-b-[0.5] border-purple-400 w-4/5 mx-auto" />
        <section className="flex w-full my-10">
          <div className="mx-8">
            <Badge className="">🖥️ Portfólio</Badge>
            <h1 className="font-bold text-4xl dark:text-white duration-300">
              Meus projetos
            </h1>
            <div className="mt-4 grid grid-cols-1 pb-4 sm:pb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card
                icon={faPython}
                title="CorrAut - 2022"
                description="Criação de um sistema desktop para a correção automática de gabaritos baseado no método da Cascata de Haar. Projeto vencedor da área de TICs da XIII feira de ciências e cultura da EEEP Edson Queiroz."
                tags={["Python", "OpenCV", "Pillow", "PyQt6"]}
                githubName="CorrAut-Antigo"
              />

              <Card
                icon={faClipboardCheck}
                title="CorrAut - 2023"
                description="Sistema que automatiza a correção de gabaritos e monitora a frequência dos estudantes por meio de um website e um aplicativo móvel. Vencedor da área de TICs da XIV feira de ciências e cultura da EEEP Edson Queiroz."
                tags={[
                  "HTML / CSS / JS",
                  "React Native",
                  "Firebase",
                  "AWS",
                  "Python",
                  "Ultralytics",
                  "Django",
                ]}
              />

              <Card
                icon={faCheckCircle}
                title="Corretor"
                description="Corretor automatizado de gabaritos de 20 questões padronizados, versão otimizada do corretor do CorrAut. Configurado para capturar vídeo da webcam, reconhecer respostas marcadas e compará-las com um gabarito predefinido."
                tags={["Python", "Ultralytics"]}
                githubName="Corretor"
              />

              <Card
                icon={faDove}
                title="TeToka!"
                description="Uma plataforma que centraliza informações essenciais para quem está dando os primeiros passos na vida adulta."
                tags={[
                  "TS",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Express",
                  "MongoDB",
                ]}
                githubName="tetoka"
              />

              <Card
                icon={faSchool}
                title="Escola Transparente"
                description="Plataforma para a denúncia da infraestrutura precária de escolas. Os usuários podem criar reclamações que serão visualizadas no perfil da escola e na página inicial do site. "
                tags={["TS", "React", "Node.js", "MongoDB", "Tailwind CSS"]}
                githubName="escola-transparente"
              />

              <Card
                icon={faComments}
                title="Chat Web"
                description="Consiste em um site onde os usuários podem fazer criar contas, fazer login e trocar mensagens, contando com confirmações de leitura e fotos de perfil. "
                tags={["JS", "React", "Firebase", "Next.js", "Tailwind CSS"]}
                githubName="Chat-web"
              />

              <Card
                icon={faGraduationCap}
                title="Jogo Educativo de Verbos em Espanhol"
                description="Aplicação com interface interativa focada em verbos espanhóis terminados em AR, oferecendo explicações sobre conjugações, pronomes pessoais e questões para prática."
                tags={["HTML / CSS / JS", "Python", "Flask"]}
                githubName="Trabalho-de-Espanhol"
              />

              <Card
                icon={faMusic}
                title="Projeto Cifra"
                description="Jogo que auxilia no estudo de música através de uma aplicação de terminal e conexão com midi. Contém várias funções para trabalhar com conceitos de teoria musical e reconhecimento através de midi."
                tags={["Python", "Selenium", "Pygame Midi", "Colorama"]}
                githubName="ProjetoCifra"
              />

              <Card
                icon={faFileInvoice}
                title="Formulário Automatizado para Prestação de Contas"
                description="Sistema feito para automatizar a prestação de contas de uma rifa virtual. Gera cartelas e uma planilha de visualização atualizada em tempo real."
                tags={["Python", "Flask", "Pillow", "gspread", "Apps Script"]}
                githubName="RifasInfor"
              />

              <Card
                icon={faCloudSun}
                title="Weather Web App"
                description="Aplicação de previsão do clima simples. Mostra os dados do clima atual da cidade escolhida, além de previsões para os próximos horários e dias da semana."
                tags={[
                  "TS",
                  "Svelte",
                  "Svelte Kit",
                  "Shadcn Svelte",
                  "Tailwind CSS",
                ]}
                githubName="weather-web-app"
              />

              <Card
                icon={faUser}
                title="Página de Login e Registro"
                description="Aplicação simples com páginas de login e registro, feita para um teste técnico."
                tags={["TS", "React", "Firebase", "Next.js", "Tailwind CSS"]}
                githubName="login-e-registro"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
