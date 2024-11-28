import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export const FoldingLogos = () => {
 

  return (
    <section className="flex flex-col items-center md:items-start justify-start gap-12 px-4 md:flex-col">
      <Copy />
      <LogoRolodex
        items={[
          <LogoItem key={2} className="text-neutral-900">
          {/* <SiGoogle /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 192.756 192.756"><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M0 0h192.756v192.756H0V0z"/><path d="M14.002 92.474c.482-1.995 1.044-4.321 4.385-4.321h13.447c4.933 0 4.278 2.71 3.888 4.321l-1.773 7.341H19.698l-.538 2.226c-.354 1.465.631 2.361 2.461 2.361H32.84l-1.248 5.162H14.921c-5.048 0-4.608-1.821-3.992-4.37l3.073-12.72zm6.674 3.294h6.666l.455-1.785c.14-.548.34-1.411-.943-1.411h-4.052c-1.056 0-1.481.657-1.655 1.345l-.471 1.851zm35.602-7.616h-13.03c-4 0-4.575 2.299-5.068 4.419-.492 2.121.261 4.067 2.85 5.919 2.589 1.851 5.478 3.048 4.99 4.71-.205.698-1.074 1.201-2.818 1.201h-7.88l-1.248 5.162h12.962c2.532 0 5.666.046 7.162-2.344s1.074-4.304-.277-6.284c-1.352-1.979-3.992-3.251-5.961-5.168-1.16-1.13-1.097-3.196.786-3.196h6.464l1.068-4.419zm2.436 0H62.9l1.336-5.528h7.622l-1.335 5.528h3.901l-1.067 4.419h-3.901l-2.419 10.012c-.439 1.818.125 2.573 2.458 2.573l-1.065 4.407h-5.6c-5.103 0-4.259-3.49-3.855-5.162l2.858-11.83h-4.186l1.067-4.419zm17.082 4.419l1.068-4.419h16.261c3.962 0 3.473 2.952 3.118 4.419l-3.041 12.585c-.797 3.301.222 3.55.868 4.407h-7.257c-.82 0-1.878-.601-2.25-.996-1.712.521-1.827 1.625-5.393 1.562s-7.547-3.249-7.214-7.515 4.061-6.848 7.429-6.848h8.271l.471-1.949c.301-1.248-.677-1.248-1.27-1.248H75.796v.002zm11.196 6.782h-5c-2.042 0-4.862 2.459-2.5 4.897 2.364 2.438 6.647-1.236 7.5-4.897zm28.33-16.729h-7.15c-1.84 0-4.188 0-5.131 3.906l-.393 1.622h-3.197l-1.068 4.419h3.199l-3.709 15.353c-.16.661-.406 1.094-1.216 1.64h5.812c1.961 0 3.016-1.817 3.643-4.407l3.039-12.585h3.77l1.068-4.419h-3.77l.227-.936c.164-.677.746-1.173 1.768-1.16l2.273.029.835-3.462zm.252 9.85c.482-1.995 1.045-4.321 4.385-4.321h13.447c4.932 0 4.277 2.71 3.889 4.321l-1.773 7.341H121.27l-.537 2.226c-.354 1.465.631 2.361 2.461 2.361h11.221l-1.248 5.162h-16.672c-5.049 0-4.609-1.821-3.992-4.37l3.071-12.72zm6.674 3.294h6.666l.455-1.785c.141-.548.34-1.411-.943-1.411h-4.051c-1.057 0-1.48.657-1.656 1.345l-.471 1.851zm18.336-7.616h4.186l1.336-5.528h7.623l-1.336 5.528h3.9l-1.066 4.419h-3.902l-2.418 10.012c-.439 1.818.125 2.573 2.459 2.573l-1.066 4.407h-5.6c-5.102 0-4.26-3.49-3.855-5.162l2.859-11.83h-4.188l1.068-4.419zm17.08 4.419l1.068-4.419h16.26c3.963 0 3.473 2.952 3.119 4.419l-3.041 12.585c-.799 3.301.221 3.55.867 4.407h-7.256c-.82 0-1.879-.601-2.252-.996-1.711.521-1.826 1.625-5.393 1.562-3.564-.062-7.547-3.249-7.213-7.515s4.061-6.848 7.428-6.848h8.271l.471-1.949c.301-1.248-.678-1.248-1.27-1.248h-11.059v.002zm11.195 6.782h-5c-2.041 0-4.861 2.459-2.498 4.897 2.362 2.438 6.645-1.236 7.498-4.897z" fillRule="evenodd" clipRule="evenodd" fill="#cc2229"/><path d="M183.182 87.465c.863 0 1.646.352 2.213.919a3.125 3.125 0 0 1 0 4.425 3.124 3.124 0 0 1-4.424 0l-.002-.001a3.125 3.125 0 0 1 0-4.424 3.123 3.123 0 0 1 2.213-.919z" fill="#cc2229"/><path d="M183.922 90.406h.639a.958.958 0 0 0 .318-.042c.076-.028.135-.073.174-.135s.059-.129.059-.201a.332.332 0 0 0-.115-.262c-.076-.068-.197-.103-.365-.103h-.709v.743h-.001zm-.297 1.253v-2.243h.994c.201 0 .352.021.457.061.104.04.186.111.248.213a.642.642 0 0 1 .094.338c0 .159-.051.293-.154.402s-.262.179-.477.208a.813.813 0 0 1 .178.111c.088.08.17.18.248.298l.389.61h-.373l-.297-.466a3.637 3.637 0 0 0-.215-.309.636.636 0 0 0-.15-.15.45.45 0 0 0-.135-.06.891.891 0 0 0-.166-.011h-.344v.996h-.297v.002zm-2.623 0v-2.243h.447l.529 1.588c.051.148.086.259.107.332.025-.081.066-.201.121-.359l.535-1.561h.4v2.243h-.287v-1.876l-.65 1.876h-.268l-.648-1.909v1.909h-.286z" fill="#fff"/></svg>
        </LogoItem>,


<LogoItem key={3} className="bg-[#fdba74] text-neutral-900">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 700 700"
width="200"
height="200"
>
<style>
{`
.st0 { fill: #150400; }
.st1 { fill: #F7BE00; }
`}
</style>
<g transform="matrix(5.9963698,0,0,5.9963698,129.93323,89.757551)">
<path
className="st0"
d="M 36.7,86.8 C 33,85.2 15.7,77.5 10.1,72.9 3.6,67.6 0.1,59.9 0.1,50.8 V 8.3 C 10.5,2.7 22.5,0 36.7,0 50.9,0 62.9,2.7 73.3,8.3 v 42.4 c 0,9.1 -3.4,16.8 -10,22.1 -5.6,4.7 -22.9,12.4 -26.6,14 z"
/>
<path
className="st1"
d="M 68.9,10 C 64.5,9.6 60,9.3 55.3,9.3 38.2,9.3 19.8,13 4.6,26.9 v 23.8 c 0,7.8 2.9,14.2 8.3,18.7 4.8,3.9 19.6,10.6 23.8,12.5 4.1,-1.8 18.9,-8.4 23.8,-12.5 5.5,-4.5 8.3,-10.8 8.3,-18.7 V 10 M 7.8,48.3 V 28.9 H 14 v 19.6 c 0,1.7 0.4,4.3 3.2,4.3 1.2,0 2.2,-0.3 2.9,-0.8 V 28.9 h 6.1 v 26.7 c -2.4,1.6 -5.5,2.5 -9.3,2.5 -6.1,0 -9.1,-3.3 -9.1,-9.8 M 35.5,70.6 H 29.3 V 30.5 c 2.2,-1.4 4.9,-2.2 8.3,-2.2 7.4,0 11.4,5.6 11.4,14.5 0,9 -3.9,15.1 -10.8,15.1 -1.3,0 -2.2,-0.2 -2.8,-0.3 z m 0,-18 c 0.4,0.2 1.2,0.4 2,0.4 3.5,0 5.2,-3.3 5.2,-10 0,-6.9 -1.5,-9.7 -5.1,-9.7 -0.8,0 -1.7,0.2 -2.2,0.4 z M 50.4,36.3 c 0,-5 4.2,-7.9 8.3,-8 3.4,-0.1 5.7,1.2 6.8,2 v 5.4 c -1.3,-1.3 -3.4,-2.5 -5.5,-2.5 -1.7,0 -3.6,0.8 -3.6,2.9 -0.1,2.2 1.8,3.1 4,4.5 5.1,3 6.1,5.7 6,9.3 -0.1,3.9 -2.8,8.2 -8.9,8.2 -2.4,0 -4.8,-0.8 -6.8,-1.9 v -5.7 c 1.6,1.4 3.9,2.5 5.9,2.5 2.3,0 3.7,-1.3 3.7,-3.4 0,-1.9 -1.1,-3 -3.8,-4.6 -5.1,-3 -6,-5.4 -6.1,-8.7 M 10.9,71.9 C 4.7,66.8 1.4,59.5 1.4,50.7 V 9.1 C 11.2,3.9 23.1,1.2 36.8,1.2 50.5,1.2 62.4,3.8 72.2,9.1 V 50.8 C 72.2,59.6 68.9,66.9 62.7,72 57,76.7 38.9,84.6 36.8,85.5 34.7,84.5 16.6,76.6 10.9,71.9 Z m 48.4,8.8 v 3.6 H 60 v -1.5 h 0.1 c 0,0.1 1,1.5 1,1.5 h 0.8 c 0,0 -1,-1.4 -1.1,-1.6 0.5,-0.1 0.8,-0.5 0.8,-1 0,-0.5 -0.3,-1.1 -1.2,-1.1 z m 1,0.5 c 0.6,0 0.6,0.3 0.6,0.5 0,0.3 -0.1,0.6 -0.8,0.6 H 60 v -1.1 z m 2.5,1.3 c 0,1.3 -1.1,2.4 -2.4,2.4 -1.3,0 -2.4,-1.1 -2.4,-2.4 0,-1.3 1.1,-2.5 2.4,-2.5 1.3,0 2.4,1.1 2.4,2.5 m -2.4,-3 c -1.6,0 -3,1.3 -3,3 0,1.6 1.3,3 3,3 1.6,0 3,-1.3 3,-3 -0.1,-1.7 -1.4,-3 -3,-3"
/>
</g>
</svg>
</LogoItem>,


          <LogoItem key={1} className="bg-orange-300 text-neutral-900">
            <SiAmazon />
          </LogoItem>,
         
        
          // <LogoItem key={4} className="bg-white text-black">
          //   <SiGithub />
          // </LogoItem>,
          // <LogoItem key={5} className="bg-purple-300 text-neutral-900">
          //   <SiTwitch />
          // </LogoItem>,
        ]}
      />
    </section>
  );
};

const Copy = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (

  <div className="max-w-lg text-center md:text-start">
    <h2 className="mb-3 text-4xl text-white">Nos integramos con los mejores</h2>
    <p className="mb-6 text-sm leading-relaxed text-neutral-400">
      La aplicación permite integrarse con diferentes aplicaciones y servicios importantes.
    </p>
    <button
            onClick={handleLoginClick}
            className="group text-sm uppercase text-indigo-300 transition-colors hover:text-indigo-400"
    >
      Ingresar
      <FiArrowUpRight className="inline-block text-base transition-transform group-hover:rotate-45" />
    </button>
  </div>
);
}

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};