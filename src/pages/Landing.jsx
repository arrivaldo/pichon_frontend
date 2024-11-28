// src/pages/Landing.js
import { useRef, useState, useEffect} from "react";
import HomeNavbar from "../components/HomeNavbar";
import { motion, useInView, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Brain from "../components/Brain";
import FeatureGrid from "../components/grid/FeatureGrid";
import { FiArrowRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { Footer } from "../components/Footer";
import { Stats } from "../components/Stats";
import { CTA } from "../components/CTA";
import { FoldingLogos } from "../components/FoldingLogos";

// import { Beams } from "../components/grid/Beams";
// import { Content } from "../components/utils/Content";
// import { GradientGrid } from "../components/utils/GradientGrid";

const Landing = () => {
  
  const navigate = useNavigate();

  // Function to navigate to the login page
  const handleLoginClick = () => {
    navigate("/login");
  };

  
  const featureGridRef = useRef();
  const handleScrollToFeatureGrid = () => {
    if (featureGridRef.current) {
      featureGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <>
   

      <div style={{ height: "100%" }} className="absolute w-full z-20 ">
        <div style={{}} className="absolute h-[110%] md:h-[91%] inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#002d934a,#000000a1)]"></div>
      </div>

      <div className="flex flex-col items-center justify-center relative z-30 bg-blue-600 py-2 text-center text-white">
        {/* <h2 className="text-3xl font-bold mb-4">
          Historial de Incidentes
          </h2> */}
        <p className="text-md px-2 md:text-lg">
          Accede a datos históricos de cada incidencia, lo que facilita un mejor
          análisis y prevención.
        </p>
     
      </div>

      <motion.div
        className="h-full"
        // initial={{ y: "-10vh" }}
        // animate={{ y: "0%" }}
        // transition={{ duration: 1 }}
      >
        <div className=" bg-gray-900 text-white relative">
          <HomeNavbar />

          <section className="relative overflow-hidden">
          <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-20">
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <GlowingChip>Simplicidad hecha tecnología. 🎉</GlowingChip>
      </motion.div>
      <motion.h1
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.25,
          ease: "easeInOut",
        }}
        className="mb-3 text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
      >
        Soluciones para la Gestión de Incidencias Vehiculares
      </motion.h1>
      <motion.p
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="mb-9 max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg md:text-lg md:leading-relaxed"
      >
        Administra rápida y eficientemente los reportes de incidentes
        automovilísticos, monitorea casos y mantén un proceso optimizado.
      </motion.p>
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.75,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-6 sm:flex-row"
      >
        <SplashButton
          onClick={handleLoginClick}
          className="flex items-center gap-2"
        >
          Comienza
          <FiArrowRight />
        </SplashButton>
        <GhostButton 
          onClick={handleScrollToFeatureGrid} // Add this

 className="rounded-md px-4 py-2 text-zinc-100">
          Saber más
        </GhostButton>
      </motion.div>
    </div>
                <Beams />
            <GradientGrid />
          </section>

    

          <div
            style={{
              padding: "1rem 2rem 0rem 2rem",
              marginBottom: "0%",
              background: "rgb(6 8 13)",
            }}
            className="px-8 relative z-30"
          >
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Características Clave{" "}
              </h2>
              <p className="text-gray-300 mb-10">
                Nuestra plataforma ofrece herramientas esenciales para gestionar
                incidentes, mejorar los tiempos de respuesta y fortalecer la
                comunicación.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">
                    Monitoreo Continuo
                  </h3>
                  <p className="text-gray-300">
                    Supervisa incidencias con notificaciones en tiempo real,
                    asegurando actualizaciones rápidas y precisas.
                  </p>
                </div>
                <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">
                    Reportes Automatizados
                  </h3>
                  <p className="text-gray-300">
                    Genera reportes detallados con un solo clic, permitiendo
                    análisis e información rápida.
                  </p>
                </div>
                <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">
                    Historial de Incidencias
                  </h3>
                  <p className="text-gray-300">
                    Accede a datos históricos de cada incidencia, lo que
                    facilita un mejor análisis y prevención.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={featureGridRef}>
        <FeatureGrid />
      </div>

        <div className="flex flex-col items-center justify-center relative z-30 bg-blue-600 py-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Historial de Incidentes</h2>
          <p className="text-lg px-2">
            Accede a datos históricos de cada incidencia, lo que facilita un
            mejor análisis y prevención.
          </p>
          <button
            onClick={handleLoginClick}
            className="bg-white mt-6 text-blue-600 px-8 py-2 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Inicar Sesión
          </button>
        </div>
        {/* Brain SECTION */}
        <div
          className="bg-[#06080D] mt-28 h-full overflow-scroll lg:flex h-screen text-white scroll-container"
          ref={containerRef}
        >
          {" "}
          {/* TEXT CONTAINER */}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-10 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
            {/* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
          
              {/* BIOGRAPHY TITLE */}
              <h1 className="font-bold text-2xl italic">RODRI LABS</h1>
              {/* BIOGRAPHY DESC */}
              <p className="text-lg">
                Esta aplicación fue desarrollada por Rodri Labs, la agencia
                especializada en soluciones tecnológicas personalizadas y
                enfocada en ofrecer productos innovadores, robustos y escalables
                que responden a las necesidades específicas de nuestros
                clientes.
              </p>
              
              <span className="italic">
                En Rodri Labs, transformamos tus ideas en herramientas digitales
                de alto impacto.
              </span>
              {/* BIOGRAPHY SIGN SVG*/}
              <Stats />
              {/* BIOGRAPHY SCROLL SVG */}
              

              {/* <Stats /> */}
            </div>
            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
              {/* SKILL TITLE */}
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                Herramientas utilizadas
              </motion.h1>
              {/* SKILL LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className="flex gap-4 flex-wrap"
              >
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaScript
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  React
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MongoDB
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Node.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Express.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Tailwind CSS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Framer Motion
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Cloudinary
                </div>
               
              </motion.div>
              {/* SKILL SCROLL SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div
              className="flex flex-col gap-12 justify-center pb-48"
              ref={experienceRef}
            >
              {/* <Stats /> */}
              <FoldingLogos />

            </div>
          </div>
          <motion.div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
            <Brain scrollYProgress={scrollYProgress} />
          </motion.div>
        </div>
      </motion.div>
      <CTA />
      <Footer />
    </>
  );
};

// const Content = () => {

//   return (
    
//   );
// };

const GlowingChip = ({ children }) => {
  return (
    <span className="relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0">
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
    </span>
  );
};

const SplashButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const GhostButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md px-4 py-2 text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const Beams = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-30 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
    />
  );
};

const GradientGrid = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/0 to-[#0f1522]" />
    </motion.div>
  );
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;

export default Landing;
