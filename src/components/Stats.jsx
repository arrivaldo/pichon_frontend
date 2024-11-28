import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
// import { CornerBlur } from "./utils/CornerBlur";

export const Stats = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-20 mx-auto max-w-3xl px-4 py-6">
        {/* <h2 className="mx-auto mb-9 block w-fit text-center text-lg text-white">
          Have hard stats? Numbers don't lie!
        </h2> */}

        <div className="flex flex-row items-center justify-center md:flex-row">
          
          <Stat
            num={25}
            suffix="+"
            subheading="Usuarios Activos"
          />
          <div className="h-[1px] w-12 sm:h-12 sm:w-[1px]" />
          <Stat
            num={10}
            suffix="k"
            subheading="Incidencias Resueltas"
          />
          <div className="h-[1px] w-12 sm:h-12 sm:w-[1px]" />
          <Stat
            num={99}
            suffix="%"
            subheading="Confiabilidad y Calidad"
          />
        </div>
      </div>

      {/* <CornerBlur /> */}
    </div>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-start py-8 sm:py-0">
      <p className="mb-2 text-center text-5xl font-semibold text-zinc-50 md:text-5xl">
        <span ref={ref}></span>
        <span className="text-blue-500">{suffix}</span>
      </p>
      <p className="max-w-28 text-start mt-4 text-zinc-400">{subheading}</p>
    </div>
  );
};
