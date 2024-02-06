"use client"

import CodeEditor from "@/components/CodeEditor";
import React, { useState } from "react";
import { languages } from "@/utils/utilities";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name)
  const [activeIcon, setActiveIcon] = useState(languages[0].icon)
  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
    <header className=" mt-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
      x-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md">
      <LanguageSelector language={language} setLanguage={setLanguage} setActiveIcon={setActiveIcon} />
    </header>
      <div className="code-editor-ref mt-[14rem]">
        <CodeEditor language={language} icon={activeIcon} />
      </div>
    </main>
  );
}
