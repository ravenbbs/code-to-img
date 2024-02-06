"use client";

import { ChevronDown } from "lucide-react";
import React from "react";
import { themes } from "@/utils/utilities";

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

    // const newActiveIcon = languages.find(
    //   (lang) => lang.name === newLanguage
    // )?.icon;

    // if (newActiveIcon) {

    // }
  };

  return (
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
                className="dropdown-item text-left"
                onClick={() => handleThemeChange(theme)}
              >
                {theme}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ThemeSelector;
