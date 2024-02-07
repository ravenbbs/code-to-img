"use client";

import { backgrounds } from "@/utils/utilities";
import { ChevronDown } from "lucide-react";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface BackgroundSelectorProps {
  background: string;
  setBackground: (background: string) => void;
}

function BackgroundSelector({
  background,
  setBackground,
}: BackgroundSelectorProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="bg-selector relative" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Background</p>
        <div className="dropdown-title capitalize w-[66px]">
          <div
            className="rounded-full w-[20px] h-[20px]"
            style={{ background: background }}
          ></div>
          <ChevronDown />
        </div>

        {showDropdown && (
          <div className="dropdown-menu w-[52px] top-[74px]">
            {backgrounds.map((bg, i) => {
              return (
                <div
                  className="w-full hover-item "
                  onClick={() => handleBackgroundChange(bg)}
                >
                  <div
                    key={i}
                    className="w-[20px] h-[20px] rounded-full m-[2px] mx-auto "
                    style={{
                      background: bg,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default BackgroundSelector;
