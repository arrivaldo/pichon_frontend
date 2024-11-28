import React from "react";
import { Card } from "../utils/Card";
import { CalloutChip } from "../utils/CalloutChip";
import { SiX } from "react-icons/si";
import { CornerBlur } from "../utils/CornerBlur";

export const MiniCard2 = () => {
  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
      <Card>
      <CalloutChip>Característica #3</CalloutChip>
      <p className="mb-1.5 text-2xl">Múltiples usuarios</p>
        <p className="text-zinc-400">
          La aplicación administra múltiples usuarios y los cataloga según su rol.
        </p>

        <div className="absolute -bottom-2 left-2 right-2 z-10 h-44 rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
          <div className="mb-3 flex gap-3">
            <img
              src="/user.png"
              alt="Rafael Ruíz profile pic"
              className="w-10 h-10 object-cover rounded-full"
              />
            <div>
              <p className="text-sm font-semibold text-zinc-50">
                Rafael Ruíz
              </p>
              <p className="text-xs text-zinc-400">@rafaruiz</p>
            </div>
          </div>
          <p>
            <span className="font-semibold text-blue-300">@CDSESTAFETANLD </span>
            Antes teníamos problemas para rastrear incidencias, pero ahora todo está al alcance de un clic. ¡Muy recomendado!
          </p>

          <SiX className="absolute right-4 top-4 text-[#1F9AF1]" />
        </div>

        <CornerBlur />
      </Card>
    </div>
  );
};
