"use client"

import React from "react"

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

function LanguageSelector({language, setLanguage, seActiveIcon}: LanguageSelectorProps) {
  return (
  <div>
    <p>
      
    </p>
    Selector Lenguaje
  </div>
  )
}

export default LanguageSelector