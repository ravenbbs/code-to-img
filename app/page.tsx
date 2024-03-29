"use client";

import CodeEditor from "@/components/CodeEditor";
import React, { useRef, useState } from "react";
import { backgrounds, languages, themes } from "@/utils/utilities";
import LanguageSelector from "@/components/LanguageSelector";
import ThemeSelector from "@/components/ThemeSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import PaddingSelector from "@/components/PaddingSelector";
import { Download } from "lucide-react";
import Footer from "@/components/Footer";
import html2canvas from "html2canvas";

export default function Home() {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[1]);

  const exportPng = async () => {
    const editorElem = editorRef.current;

    if (editorElem) {
      //hide handles
      const handleElems = document.querySelectorAll(".handle") as any;
      handleElems.forEach((elem: any) => {
        elem.style.display = "none";
      });

      const cursorElem = document.querySelector(".ace_cursor") as any;
      cursorElem.style;

      const canvas = await html2canvas(editorElem);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      const link = document.createElement("a");
      link.download = "code.png";
      link.href = image;
      link.click();

      handleElems.forEach((elem: any) => {
        elem.style.display = "block";
      });
    }
  };

  return (
    <main className="h-[100vh] flex flex-col items-center justify-between ">
      <header
        className=" mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
      z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"
      >
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />
        <ThemeSelector theme={theme} setTheme={setTheme} />

        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />

        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />

        <div className="export-btn ml-auto self-center ">
          <button
            onClick={exportPng}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-md text-blue-400 bg-blue-400 font-medium bg-opacity-20
          hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300 "
          >
            Exportar PNG
            <Download />
          </button>
        </div>
      </header>
      <div className="code-editor-ref mt-[12rem]" ref={editorRef}>
        <CodeEditor
          background={background}
          language={language}
          icon={activeIcon}
          theme={theme}
          currentPadding={currentPadding}
        />
      </div>
      <Footer />
    </main>
  );
}
