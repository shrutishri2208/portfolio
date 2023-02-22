import React from "react";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu bg-black bg-opacity-60 h-screen flex flex-col p-8">
      <div className="close-btn">X</div>
      <div className="btn-container m-8 pt-12 flex flex-col items-center">
        <button className="text-2xl mb-8">about</button>
        <button className="text-2xl mb-8">projects</button>
        <button className="text-2xl mb-8">resume</button>
      </div>
      <div className="absolute bottom-0">Contact</div>
    </div>
  );
};

export default NavigationMenu;
