import React from "react";
import { MdSecurity, MdImage } from 'react-icons/md';
import { AiOutlineDatabase } from 'react-icons/ai';
import { RiCloudLine } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';



export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={MdSecurity}
      title="Acceso basado en Rol"
      subtitle="La aplicación garantiza que cada usuario tenga acceso a las funcionalidades y datos correspondientes a su rol."
    />
    <Item
      Icon={AiOutlineDatabase}
      title="Operaciones CRUD"
      subtitle="Realiza operaciones de Crear, Leer, Actualizar y Eliminar con facilidad. Administra tus datos de forma eficiente."
    />
    <Item
      Icon={RiCloudLine}
      title="Cloudinary API"
      subtitle="Integramos Cloudinary para una gestión avanzada de imágenes. Carga, almacena y manipula archivos multimedia con velocidad y calidad."
    />
    <Item
      Icon={FaReact}
      title="Desarrollado con MERN"
      subtitle="Construido con MERN (MongoDB, Express.js, React.js y Node.js), nuestra aplicación es robusta y escalable."
    />
    <Item
      Icon={MdImage}
      title="Imágenes Optimizadas"
      subtitle="Entregamos imágenes optimizadas para garantizar tiempos de carga rápidos sin comprometer la calidad visual."
    />
    <Item
      Icon={IoNotificationsOutline}
      title="Notificaciones Inteligentes"
      subtitle="Como administrador recibe alertas personalizadas y notificaciones automáticas."
    />
  </div>
);

const Item = ({ Icon, title, subtitle }) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-blue-300" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
