"use client"

import React from "react"

interface PaddingSelectorProps {
  paddings: string[];
  currentPadding: string;
  setCurrentPadding: (padding: string) => void;
}

function PaddingSelector({
  paddings,
  currentPadding,
  setCurrentPadding
}: PaddingSelectorProps) {
  return <div>Padding selctor</div>
}

export default PaddingSelector