"use client";

import { ChevronDown } from "lucide-react";
import React from "react";

interface BackgroundSelectorProps{
  background: string,
  setBackground: (background: string) => void
}

function BackgroundSelector({
  background,
  setBackground,
}: BackgroundSelectorProps ) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
  }
  return (
    <div className="bg-selector relative" onClick={toggleDropdown}>
      <p className="py-[5px] text-sm font-medium">Background</p>
      <div className="dropdown-title capitalize w-[60px]">
         <div className="rounded-full w-[20px] h-[20px]" style={{background:background}}>

         </div>
         <ChevronDown />
      </div>


      {/* {showDropdown && (
        <div className="dropdown-menu w-[60px] top-[94px]">
          {languages.map((lang, i) => {
            return (
              <div key={i}>
                <button
                  className="dropdown-item  text-left"
                  onClick={() => handleLanguageChange(lang.name)}
                >
                  {lang.name}
                </button>
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
}


export default BackgroundSelector;
