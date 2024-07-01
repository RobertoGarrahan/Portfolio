import React, { useState, useEffect, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import rondon from "./assets/foto_rondon.jpg";
import nasa from "./assets/foto_nasa.jpg";
import hackathon from "./assets/foto_hackathon.jpg";
import smartcare from "./assets/foto_smartcare.jpg";
import logocotaremedio from "./assets/logo_cota_remedio.png";
import logohunter from "./assets/logo_hunter.png";
import logoanimo from "./assets/logo_animo.png";

//Acordião Profissional
const AccordionItem = ({ title, data, isOpen, onClick, children }) => {
  return (
    <li className="my-1">
      <div
        className="flex justify-between items-center p-4 font-bold text-xl text-white bg-[#505457] rounded-lg shadow-lg"
        onClick={onClick}
      >
        <p>{title}</p>
        <div className="flex justify-between">
          <p>{data}</p>
          {isOpen ? (
            <FaChevronUp className="mx-2 cursor-pointer" />
          ) : (
            <FaChevronDown className="mx-2 cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden transition-[max-height] duration-500 ease-in-out`}
      >
        <div className="p-5 mt-3 text-md bg-black rounded-lg">{children}</div>
      </div>
    </li>
  );
};

//Principal
function App() {
  let sliderRef = useRef(null);
  //Menu hamburger mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Trocar de sessão
  const [isScrolled, setIsScrolled] = useState(false);

  //Carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  //Seta para proxima pagina do carrossel
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  //Seta para pagina anterior do carrossel
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  //Trocar pagina do carrossel
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  //Scroll entre sessões
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const [openAccordionIndex, setOpenAccordionIndex] = useState(0); // Define o primeiro item para começar aberto

  const handleAccordionClick = (index) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null); // Se clicar no item já aberto, ele fecha
    } else {
      setOpenAccordionIndex(index); // Caso contrário, abre o item clicado
    }
  };

  //Dados das sessões
  const projetos = [
    {
      id: 0,
      url: "",
      imagem: logoanimo,
      titulo: "Ânimo Consultoria",
      desc: "Desenvolvimento front-end do site da empresa júnior da universidade UniLaSalle. Também fui diretor de TI da empresa.",
      alt: "Logo da empresa Ânimo Consultoria, o nome da empresa em branco com o fundo verde indigo.",
    },
    {
      id: 1,
      url: "https://somoshunter.com.br/",
      imagem: logohunter,
      titulo: "Somos Hunter",
      desc: "Desenvolvimento FullStack do software legado da empresa, utilizado para gerenciamento e monitoramento de frota.",
      alt: "Logo da empresa Somos Hunter, o nome da empresa em branco com o fundo roxo.",
    },
    {
      id: 2,
      url: "https://cota-remedio.web.app/",
      imagem: logocotaremedio,
      titulo: "Cota Remédio",
      desc: "Responsavel pelo front-end da plataforma, utilizada para cotação e compras de remédios com sistema de cashback.",
      alt: "Logo da empresa Cota Remédio, o nome da empresa em branco com o fundo laranja.",
    },
  ];

  const experiencias = [
    {
      id: 0,
      link: "https://www.unilasalle.edu.br/rj/noticias/operacao-sentinelas-avancadas",
      image: rondon,
      title: "Projeto Rondon - Ministério da Defesa",
      year: "(2023)",
      description:
        "Por 18 dias, participei como voluntário na cidade de Primavera de Rondônia, onde realizei oficinas de informática, tecnologia e pacote office basico para a população. Também realizei o conserto de diversos computadores da escola e outros orgãos públicos.",
      alt: "Foto da equipe que fiz parte, na imagem estão os 16 alunos e 2 professores, todos em cima de um palco com uniforme amarelo segurando as bandeiras da UniLaSalle e Universidade Federal de Sergipe.",
    },
    {
      id: 1,
      link: "https://www.unilasalle.edu.br/rj/noticias/nasa-space-challenge",
      image: nasa,
      title: " Mentor - Nasa Space Apps Challenge",
      year: "(2023)",
      description:
        "Ao lado de outros 2 colegas, realizei a mentoria de código e inglês para mais de 200 participantes do evento. Durante o sprint de 48 horas, estive presente localmente no primeiro dia, e online no segundo dia auxiliando as equipes em seus projetos.",
      alt: "Nessa foto estou de calça preta com uma blusa azul do evento e um crachá de mentor, estou na esquerda de um banner do evento, o banner tem a logo do evento no centro e os apoiadores e patrocinadores ao lado.",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/posts/robertogarrahan_ontem-tive-a-oportunidade-de-participar-activity-6992675281442385920-dm4z?utm_source=share&utm_medium=member_desktop",
      image: hackathon,
      title: "1º lugar - Hackathon UniLaSalle",
      year: "(2022)",
      description:
        "Em uma maratona de 2 dias, desenvolvi junto a minha equipe uma carga util utilizando arduino, que ao ser lançada com drone, realizou leitura de diversos dados da atmosfera e dados de geolocalização, enquanto mostrava os dados em um dashboard.",
      alt: "Foto com os 4 integrantes da equipe que fiz parte, nós 4 estamos no auditório da faculdade usando medalhas de ouro e segurando juntos o troféu.",
    },
    {
      id: 3,
      link: "https://www.unilasalle.edu.br/rj/noticias/pesquisa-que-transforma-vidas",
      image: smartcare,
      title: "Pesquisador - Iniciação Científica",
      year: "(2021 - 2023)",
      description:
        "Fui membro do projeto SmartCare por cerca de 2 anos, no qual  pesquisas sobre a criação de uma SmartHome focada em auxiliar idosos com Alzheimer. Trabalhei com arduinos, sensores e atuadores e cuidava do banco de dados.",
      alt: "Foto de um arduino conectado a um sensor ultrassonico em cima da mesa.",
    },
  ];

  const profissional = [
    {
      id: 0,
      titulo: "Desenvolvedor FullStack - Somos Hunter",
      data: "07/2023 - Presente",
      local: "Rio de Janeiro",
      desc: "Atualmente trabalho no desenvolvimento do sistema próprio da empresa. O sistema é feito para controle e monitoramento dos motoristas, locações e veículos da empresa. Trabalho diariamente com tecnologias como React.JS, Node.JS, MySQL e AWS.",
      skill: ["ReactJS", "NodeJS", "MySQL"],
    },
    {
      id: 1,
      titulo: "Professor de Inglês - Wizard",
      data: "04/2022 - 10/2022",
      local: "Niterói, RJ",
      desc: "Durante 7 meses fui responsável por dar aulas de inglês para uma turma de crianças aos sábados de manhã.",
    },
    {
      id: 2,
      titulo: "Desenvolvedor/Diretor - Ânimo Consultoria",
      data: "12/2021 - 12/2022",
      local: "Niterói, RJ",
      desc: "Por 6 meses atuei como desenvolvedor do site da empresa, e por outros 6 meses fui diretor do setor de TI, realizando a gestão da equipe e realizando consultorias.",
    },
  ];

  const contato = [
    {
      id: 0,
      url: "https://www.linkedin.com/in/robertogarrahan/",
      titulo: "LinkedIn",
    },
    {
      id: 1,
      url: "https://github.com/RobertoGarrahan",
      titulo: "GitHub",
    },
    {
      id: 2,
      url: "mailto:robertogarrahan@gmail.com",
      titulo: "Email",
    },
    {
      id: 3,
      url: "a",
      titulo: "Currículo",
    },
    {
      id: 4,
      url: "https://discord.gg/gtNEbMhGw5",
      titulo: "Discord",
    },
  ];

  //Return principal
  return (
    <div className="bg-[#1c1c1c]">
      <header
        className={`fixed top-0 left-0 right-0 z-10 p-5 text-white font-semibold transition-colors duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between lg:justify-center items-center">
          <h1 className="text-xl font-bold lg:hidden">Roberto Garrahan</h1>

          {/* Icone de Hamburger */}
          <div
            className="text-3xl cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Links do Menu */}
          <nav
            className={`absolute lg:relative top-full left-0 w-full lg:w-auto bg-black lg:bg-transparent transition-all ease-in-out duration-300 ${
              isMenuOpen ? "block" : "hidden"
            } lg:block`}
          >
            <ul className="flex flex-col lg:flex-row lg:justify-center items-center lg:space-x-4 lg:text-xl font-semibold">
              <li className="p-2 cursor-pointer">
                <a onClick={() => scrollToSection("home")}>Home</a>
              </li>
              <li className="p-2 cursor-pointer">
                <a onClick={() => scrollToSection("projects")}>Projetos</a>
              </li>
              <li className="p-2 cursor-pointer">
                <a onClick={() => scrollToSection("experiences")}>
                  Experiências
                </a>
              </li>
              <li className="p-2 cursor-pointer">
                <a onClick={() => scrollToSection("profissional")}>
                  Profissional
                </a>
              </li>
              <li className="p-2 cursor-pointer">
                <a onClick={() => scrollToSection("contact")}>Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sessão Home */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center pt-20"
      >
        <div className="flex flex-col lg:flex-row w-full max-w-4xl mb-20 text-white">
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:mr-7 lg:items-start lg:mb-10 text-center lg:text-left ">
            <h1 className="lg:text-7xl text-5xl font-bold mb-2 lg:mb-0">
              Roberto Garrahan
            </h1>
            <h2 className="lg:text-3xl text-xl font-semibold">
              Desenvolvedor FullStack
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:ml-7 lg:items-end lg:mb-10 text-center lg:text-left mt-6 lg:mt-0 lg:text-xl font-normal">
            <p>
              Olá, me chamo Roberto, sou estudante de computação e desenvolvedor
              FullStack. Aqui você encontrará um pouco mais sobre mim!
            </p>
          </div>
        </div>

        {/* Seta para baixo */}
        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-12 h-12 text-gray-500 cursor-pointer"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => scrollToSection("projects")}
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* Sessão Projetos*/}
      <section
        id="projects"
        className="lg:min-h-screen bg-[#1c1c1c] text-white py-20"
      >
        <h2 className="text-4xl text-center mb-10 font-bold">Projetos</h2>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {projetos.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-wrap lg:w-3/12 gap-4 text-white"
              >
                <div className="w-full m-auto">
                  <div className="overflow-hidden rounded-lg">
                    <div
                      onClick={() => window.open(data.url, "_blank")}
                      className="cursor-pointer hover:scale-110 transition duration-300"
                    >
                      <img
                        src={data.imagem}
                        alt={data.alt}
                        width="10"
                        height="10"
                        className="w-full h-60 object-cover rounded-lg object-center"
                      />
                    </div>
                  </div>

                  <div className="lg:bg-none p-4">
                    <div className="flex justify-between mb-1 text-2xl gap-2">
                      <div className="flex font-semibold">{data.titulo}</div>
                      <div className="flex mt-1 px-2">
                        {data.id === 0 && (
                          <>
                            <div className="flex font-semibold">
                              <FaHtml5 className="transition duration-300 hover:-translate-y-2" />
                              <FaCss3Alt className="transition duration-300 hover:-translate-y-2" />
                              <IoLogoJavascript className="transition duration-300 hover:-translate-y-2" />
                            </div>
                          </>
                        )}

                        {data.id === 1 && (
                          <>
                            <div className="flex font-semibold">
                              <FaNodeJs className="transition duration-300 hover:-translate-y-2" />
                              <FaReact className="transition duration-300 hover:-translate-y-2" />
                              <GrMysql className="transition duration-300 hover:-translate-y-2" />
                            </div>
                          </>
                        )}
                        {data.id === 2 && (
                          <>
                            <div className="flex font-semibold">
                              <FaReact className="transition duration-300 hover:-translate-y-2" />
                              <FaCss3Alt className="transition duration-300 hover:-translate-y-2" />
                              <SiTailwindcss className="transition duration-300 hover:-translate-y-2" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-wrap font-normal">{data.desc}</div>
                    <div className="mt-5 mb-3 flex justify-left">
                      <button
                        onClick={() => window.open(data.url, "_blank")}
                        className="px-4 py-2 bg-black rounded-lg text-white font-semibold hover:bg-neutral-800"
                      >
                        IR AO SITE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sessão Experiências */}
      <section
        id="experiences"
        className="lg:min-h-screen bg-[#1c1c1c] py-20 lg:px-10"
      >
        <style>
          {`
      .slick-dots li button:before {
          opacity: 0.35; /* Ajuste opcional para visibilidade */
          color: white; /* Cor dos pontos normais */
      }

      .slick-dots li.slick-active button:before {
          opacity: 1; /* Maior destaque para o ponto ativo */
          color: white; /* Cor dos pontos quando ativos */
      }
    `}
        </style>

        <h2 className="text-4xl text-center text-white mb-10 font-bold">
          Experiências
        </h2>

        <div className="w-full z-50 mt-52 -mb-48 relative flex justify-between">
          <button
            className="button w-6 h-6 rounded-full bg-white"
            onClick={previous}
          >
            {<FaArrowLeft className="ml-1" />}
          </button>
          <button
            className="button w-6 h-6 rounded-full bg-white"
            onClick={next}
          >
            {<FaArrowRight className="ml-1" />}
          </button>
        </div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {experiencias.map((exp) => (
            <div className="p-4 lg:px-48 bg-none">
              <div
                className="relative rounded-lg block md:flex overflow-hidden items-center bg-gray-100"
                style={{ minHeight: "19rem" }}
              >
                <div
                  className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                  style={{ minHeight: "19rem" }}
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={exp.image}
                    alt={exp.alt}
                  />
                </div>
                <div className="w-full md:w-3/5 h-full overflow-hidden flex items-center bg-gray-100 rounded-lg">
                  <div className="p-12 md:pr-24 md:pl-16 md:py-12">
                    <div className="font-semibold text-2xl">{exp.title}</div>
                    <p className="mb-4 font-normal">{exp.year}</p>
                    <p className="text-gray-900 font-normal">
                      {exp.description}
                    </p>

                    <button
                      className="flex mt-3 font-semibold hover:scale-110 transition duration-300"
                      onClick={() => window.open(exp.link, "_blank")}
                    >
                      <span>Saiba Mais</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Sessão Profissional */}
      <section
        id="profissional"
        className="lg:max-h-screen bg-[#1c1c1c] text-white py-20"
      >
        <h2 className="mb-10 text-4xl font-bold text-center">Profissional</h2>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {profissional.map((data, index) => (
            <ul className="lg:w-4/6 space-y-6 font-semibold">
              <AccordionItem
                key={data.id}
                title={data.titulo}
                isOpen={openAccordionIndex === index}
                onClick={() => handleAccordionClick(index)}
              >
                <div className="flex text-white text-xl font-normal">
                  <FaLocationDot className="mt-1 mr-1" />
                  <div className="flex gap-7 font-semibold">
                    {data.local}
                    <div className="flex font-semibold">
                      <FaCalendar className="mt-1 mr-1" />
                      {data.data}
                    </div>
                  </div>
                </div>
                <div className="font-normal text-xl mt-2">{data.desc}</div>
              </AccordionItem>
            </ul>
          ))}
        </div>
      </section>

      {/* Sessão Contato */}
      <section
        id="contact"
        className="bg-black text-white flex flex-col items-center justify-center pt-10 lg:pt-20"
      >
        <div className="lg:grid lg:grid-cols-3 gap-4 w-full max-w-4xl mb-10 lg:mb-20 text-white">
          <div className="lg:w-1/2 col-span-2 justify-center items-center lg:mb-10 text-center lg:text-left ">
            <h2 className="text-6xl lg:my-2 font-bold">Entre em contato</h2>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-2 pb-4 pt-8 lg:py-0 gap-y-2 gap-x-10 lg:mb-6">
            {contato.map((data) => {
              return (
                <div className="flex" key={data.id}>
                  <button
                    className="hover:underline text-xl font-semibold ml-8 lg:ml-0"
                    onClick={() => window.open(data.url, "_blank")}
                  >
                    {data.titulo}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white w-full lg:w-2/3 mb-6" />

        {/* Copyright */}
        <div className="text-center font-normal pb-5">
          <p>© Roberto Garrahan 2024</p>
        </div>
      </section>
    </div>
  );
}

export default App;
