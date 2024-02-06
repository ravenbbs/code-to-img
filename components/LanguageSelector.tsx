"use client"

import React from "react"

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  seActiveIcon: (icon: string) => void;
}

function LanguageSelector({language, setLanguage, seActiveIcon}: LanguageSelectorProps) {
  return <div>Selector Lenguaje</div>
}

export default LanguageSelector