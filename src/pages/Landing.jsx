// src/pages/Landing.js
import { useRef, useState, useEffect } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { motion, useInView, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Brain from "../components/Brain";
import FeatureGrid from "../components/grid/FeatureGrid";
import { FiArrowRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
// import { Beams } from "../components/grid/Beams";
// import { Content } from "../components/utils/Content";
// import { GradientGrid } from "../components/utils/GradientGrid";

const Landing = () => {
  const navigate = useNavigate();

  // Function to navigate to the login page
  const handleLoginClick = () => {
    navigate("/login");
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
     <section className="relative overflow-hidden bg-zinc-950">
      <Beams />
      <GradientGrid />
    </section>





    <div className="absolute h-screen w-full z-20 ">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#002d934a,#00000024)]"></div>
      </div>
    

        <div className="flex flex-col items-center justify-center relative z-30 bg-blue-600 py-2 text-center text-white">
          {/* <h2 className="text-3xl font-bold mb-4">
          Historial de Incidentes
          </h2> */}
          <p className="text-lg">
          Accede a datos históricos de cada incidente, lo que facilita un mejor análisis y prevención.
          </p>
          {/* <button
            onClick={handleLoginClick}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Inicar Sesión
          </button> */}
        </div>

        <motion.div
          className="h-full"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
            <div className="min-h-screen bg-gray-900 text-white relative">
        <HomeNavbar />

        <section className="relative overflow-hidden">
      <Content />
      <Beams />
      <GradientGrid />
    </section>


        {/* <div className="flex flex-col items-center justify-center text-center px-8 py-20 md:py-40 relative z-20">
          <h1 style={{width: '75%'}} className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Gestión de Incidentes de Automóviles Simplificada
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Administra rápida y eficientemente los reportes de incidentes
            automovilísticos, monitorea casos y mantén un proceso optimizado.
          </p>
          <button
            onClick={handleLoginClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Comienza Ahora
          </button>
        </div> */}

        {/* <div
          style={{ padding: "0rem 2rem 5rem 2rem", marginTop: '-2%', marginBottom: '0%', background: '#0f1521' }}
          className="px-8 relative z-30"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Características Clave </h2>
            <p className="text-gray-300 mb-10">
              Nuestra plataforma ofrece herramientas esenciales para gestionar
              incidentes, mejorar los tiempos de respuesta y fortalecer la
              comunicación.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Seguimiento en Tiempo Real
                </h3>
                <p className="text-gray-300">
                  Supervisa incidentes y respuestas en tiempo real, asegurando
                  actualizaciones rápidas y precisas.
                </p>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Reportes Automatizados
                </h3>
                <p className="text-gray-300">
                  Genera informes detallados con un solo clic, permitiendo
                  análisis e información rápida.
                </p>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Historial de Incidentes
                </h3>
                <p className="text-gray-300">
                  Accede a datos históricos de cada incidente, lo que facilita
                  un mejor análisis y prevención.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        </div>


        <FeatureGrid />
          {/* Brain SECTION */}
          <div
  className="bg-[#0F1521] h-full overflow-scroll lg:flex h-screen text-white scroll-container"
  ref={containerRef}
>            {/* TEXT CONTAINER */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
              {/* BIOGRAPHY CONTAINER */}
              <div className="flex flex-col gap-12 justify-center">
                {/* BIOGRAPHY IMAGE */}
                {/* <img
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            /> */}
                {/* BIOGRAPHY TITLE */}
                <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                {/* BIOGRAPHY DESC */}
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum harum quibusdam cupiditate nobis accusamus sed aut
                  aperiam, reiciendis numquam! Voluptas voluptatibus obcaecati
                  dolore itaque suscipit! Vel doloremque numquam quam nihil.
                </p>
                {/* BIOGRAPHY QUOTE */}
                <span className="italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                {/* BIOGRAPHY SIGN SVG*/}
                <div className="self-end">
                  <svg
                    width="185"
                    height="77"
                    viewBox="0 0 370 114"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M66 2C66 29.4851 68.6687 64.5118 49.3333 87.4444C42.4997 95.5495 35.7683 97.6796 26.2222 101C20.002 103.164 8.87322 103.873 4 99C-0.260934 94.7391 2.94804 88.1756 8.22222 86.2222C13.7053 84.1915 17.942 84 23.7778 84C33.359 84 41.3193 83.5602 50.2222 87C56.6125 89.469 63.5773 91.9131 69.5555 95.5C75.4778 99.0533 87.1838 104.357 93.5 99.4444C96.1292 97.3995 96.2752 92.5118 96.9444 89.5C97.9646 84.9092 92.6432 83.2024 89 83C84.472 82.7484 82.3397 81.8856 82 88C81.8025 91.5554 83.5627 94.4193 86 97C88.9648 100.139 92.0717 100.96 96 98.7778C99.3106 96.9386 98 90.7299 98 87.5C98 85.0327 98.4365 83.1348 99.2222 80.7778C100.357 77.3743 99.2311 78.4486 101.5 77.9444C105.352 77.0886 108 76.4766 108 81.5C108 85.6646 109 89.3473 109 93.5C109 100.142 108.863 95.0454 110.5 91.4444C112.765 86.4616 116.631 81.205 121.5 78.5C127.057 75.4129 126 82.1509 126 85.5C126 92.5532 124.42 102 134 102C142.932 102 153 102.569 153 91.2222C153 87.1735 153.772 81.3206 148 81C141.934 80.663 142.107 81.8068 139.5 86.5C134.378 95.7204 137.972 105 149.5 105C153.589 105 153.996 99.8977 155.5 96.8889C157.902 92.0843 161 85.4067 161 80C161 74.0547 158.407 82.7413 157.222 84.2222C155.194 86.7574 155 92.5718 155 95.7778C155 99.9302 153.8 104.999 158 107.222C161.954 109.316 164.884 106.382 167.778 103.778C171.15 100.743 175.896 99.1107 180 97C186.143 93.8409 191.659 91.4099 198.222 89.2222C206.505 86.4614 214.839 87 223.5 87C230.613 87 231.628 104 222.5 104C216.954 104 199.251 107.814 207 95.2222C211.456 87.9805 214.484 80.6007 220 73.7778C229.781 61.6805 242.696 50.8197 256.222 43C264.769 38.0591 274.192 34.6264 283 30.2222C286.55 28.4473 280.07 32.3343 278.5 33.5556C271.707 38.8391 266.609 45.3914 260.556 51.4444C255.356 56.6444 250.682 61.459 246.5 67.5C242.917 72.6757 239.364 77.3825 236.556 83C233.829 88.4524 231.82 94.3142 228.556 99.4444C226.693 102.371 225.518 107.823 222.5 109.5C214.795 113.78 217.517 100.438 218.056 95.0556C218.678 88.8318 227.982 85.7572 233.056 88.6111C239.614 92.3003 245.506 97.7883 252 101.778C254.886 103.551 259.46 107 263 107C271.267 107 273.32 81.9392 268.778 77.2222C264.112 72.3774 261.206 80.5039 261 84C260.576 91.2135 257.836 96.9269 264.778 102C272.242 107.454 285.041 112.276 292.111 104.833C298.002 98.6323 304.301 90.8902 308.556 83.4444C310.355 80.295 310.132 84.6251 309.444 86C305.387 94.1158 303 102.264 303 111.5C303 116.021 337.534 99.1863 340.5 98C347.33 95.2679 355.47 93.8299 361.778 90C363.935 88.6902 365.473 88 368 88"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                {/* BIOGRAPHY SCROLL SVG */}
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
              {/* SKILLS CONTAINER */}
              <div
                className="flex flex-col gap-12 justify-center"
                ref={skillRef}
              >
                {/* SKILL TITLE */}
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-2xl"
                >
                  SKILLS
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
                    TypeScript
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    React.js
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Next.js
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    SCSS
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Tailwind CSS
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    MongoDB
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    PostgreSQL
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Node.js
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Nest.js
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Express.js
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Spring Boot
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    GraphQL
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Apollo
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Redux
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Framer Motion
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Three.js
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    WebGL
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Webpack
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Vite
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Docker
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    AWS
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Firebase
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Git
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Figma
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
              {/* <div
                className="flex flex-col gap-12 justify-center pb-48"
                ref={experienceRef}
              >
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: "0" } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-2xl"
                >
                  EXPERIENCE
                </motion.h1>
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: "0" } : {}}
                  className=""
                >
                  <div className="flex justify-between h-48">
                    <div className="w-1/3 ">
                      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                        Senior JavaScript Engineer
                      </div>
                      <div className="p-3 text-sm italic">
                        I led web development, offering expertise in JavaScript
                        frameworks.{" "}
                      </div>
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        2024 - Present
                      </div>
                      <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                        Apple
                      </div>
                    </div>
                    <div className="w-1/6 flex justify-center">
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                      </div>
                    </div>
                    <div className="w-1/3 "></div>
                  </div>
                  <div className="flex justify-between h-48">
                    <div className="w-1/3 "></div>
                    <div className="w-1/6 flex justify-center">
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                      </div>
                    </div>
                    <div className="w-1/3 ">
                      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                        Senior React Developer
                      </div>
                      <div className="p-3 text-sm italic">
                        I spearheaded React-based application development,
                        leveraging advanced skills.{" "}
                      </div>
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        2019 - 2024{" "}
                      </div>
                      <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                        Microsoft
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between h-48">
                    <div className="w-1/3 ">
                      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                        Freelancer{" "}
                      </div>
                      <div className="p-3 text-sm italic">
                        I provided web solutions, applying a range of
                        technologies to address client requirements.{" "}
                      </div>
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        2010 - 2019{" "}
                      </div>
                    </div>
                    <div className="w-1/6 flex justify-center">
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                      </div>
                    </div>
                    <div className="w-1/3 "></div>
                  </div>
                </motion.div>
              </div> */}
            </div>
            <motion.div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
              <Brain scrollYProgress={scrollYProgress} />
            </motion.div>
          </div>
        </motion.div>



    </>
  );
};



const Content = () => {
  return (
    <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-36">
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
        <GlowingChip>Exciting announcement 🎉</GlowingChip>
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
        A landing page template that works for you
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
        Build beautiful landing pages for your startups, clients, and side
        projects, without having to think about design.
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
        <SplashButton className="flex items-center gap-2">
          Try it free
          <FiArrowRight />
        </SplashButton>
        <GhostButton className="rounded-md px-4 py-2 text-zinc-100">
          Learn more
        </GhostButton>
      </motion.div>
    </div>
  );
};

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
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </motion.div>
  );
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;









export default Landing;
