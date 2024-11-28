import React from "react";
import { MaxWidthWrapper } from "./utils/MaxWidthWrapper";
// import { NavLogo } from "../navbar/NavLogo";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
// import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      <MaxWidthWrapper className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6">
        <LogoColumn />
        <GenericColumn
          title="Productos"
          links={[
            {
              title: "Características",
              href: "/#features",
            },
            {
              title: "Testimonios",
              href: "/#testimonials",
            },
            {
              title: "Precios",
              href: "/#pricing",
            },
          ]}
        />
        <GenericColumn
          title="Compañía"
          links={[
            {
              title: "Careras",
              href: "/#",
            },
            {
              title: "Equipos",
              href: "/#",
            },
            {
              title: "Contacto",
              href: "/#",
            },
          ]}
        />
        <GenericColumn
          title="Legal"
          links={[
            {
              title: "Términos y Condiciones",
              href: "/#",
            },
            {
              title: "Póliza de Privacidad",
              href: "/#",
            },
            {
              title: "Devoluciones",
              href: "/#",
            },
          ]}
        />

        <GenericColumn
          title="Redes"
          links={[
            {
              title: "Twitter",
              href: "/#",
              Icon: SiX,
            },
            {
              title: "Instagram",
              href: "/#",
              Icon: SiInstagram,
            },
            {
              title: "Youtube",
              href: "/#",
              Icon: SiYoutube,
            },
          ]}
        />
      </MaxWidthWrapper>
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      {/* <NavLogo /> */}
      <span className="mt-3 inline-block text-xs text-zinc-400">
        © Rodri Labs - Todos los derechos reservados.
      </span>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block text-zinc-50">{title}</span>
      {links.map((l) => (
        <a
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </a>
      ))}
    </div>
  );
};
