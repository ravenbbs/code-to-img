"use client";

import { ChevronDown } from "lucide-react";
import React from "react";
import { themes } from "@/utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>

    <div className="theme-selector" onClick={toggleDropdown}>
      <p className="py-[5px] text-sm font-medium">Tema</p>
      <div className="dropdown-title capitalize w-[140px]">
        {theme} <ChevronDown />
      </div>

      {showDropdown && (
        <div className="dropdown-menu w-[140px] top-[94px]">
          {themes.map((theme, i) => {
            return (
              <button
                key={i}
                className="dropdown-item text-left hover-item"
                onClick={() => handleThemeChange(theme)}
              >
                {theme}
              </button>
            );
          })}
        </div>
      )}
    </div>
    </OutsideClickHandler>
  );
}

export default ThemeSelector;
