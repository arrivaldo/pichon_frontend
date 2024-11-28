import React from "react";

export const SectionSubheading = ({ children, persistCenter = false }) => {
  return (
    <p
    style={{textAlign:'center'}}
      className={`text-center text-base text-zinc-400 md:text-lg ${persistCenter ? "" : " md:text-center"}`}
    >
      {children}
    </p>
  );
};
