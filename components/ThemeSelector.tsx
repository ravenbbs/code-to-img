'use client'

import { ChevronDown } from "lucide-react";
import React from "react";
import { languages } from "@/utils/utilities";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}


function ThemeSelector({
  language,
  setLanguage,
  setActiveIcon,
}: LanguageSelectorProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);

    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon);
    }
  };

  return (
    <div onClick={toggleDropdown}>
      <p className="py-[5px] text-sm font-medium">Tema</p>
      <div className="dropdown-title capitalize w-[120px]">
        {language} <ChevronDown />
      </div>

      {showDropdown && (
        <div className="dropdown-menu w-[120px] top-[94px]">
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
      )}
    </div>
  );
}

export default ThemeSelector;