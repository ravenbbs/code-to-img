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

  const changePadding = (newPadding: string) => {
    setCurrentPadding(newPadding);

  };

  return (    
  <div>
    <p className="py-[5px] text-sm font-medium">Padding</p>
    <div className="flex gap-2">
       {paddings.map((padding, i) => {
      return (
      <button 
      className={`hover-item rounded-md ${currentPadding == padding ? 'bg-[#3f3f3f] text-[#cccccc]' : '' } `}
      onClick={() => changePadding(padding)} 
      key={i}>
        {padding}
      </button>
      )
    })}
    </div>
   

  </div>
)
}

export default PaddingSelector