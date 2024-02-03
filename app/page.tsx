"use client"

import CodeEditor from "@/components/CodeEditor";
import React, { useState } from "react";
import { languages } from "@/utils/utilities";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name)
  return (
    <main>
    <header>
      <LanguageSelector/>
    </header>
      <div className="code-editor-ref">
        <CodeEditor language={language} />
      </div>
    </main>
  );
}
