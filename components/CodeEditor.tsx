"use client";
import React, { useState, useEffect, useRef } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

//languages}
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

//themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-kuroir";
import { initialCode } from "@/utils/utilities";

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

function CodeEditor({
  language,
  theme,
  icon,
  background,
  currentPadding,
}: CodeEditorProps) {
  const [width, setWidth] = React.useState(1000);
  const [height, setHeight] = React.useState(500);
  const [title, setTitle] = React.useState("Sin-Titulo");
  const [code, setCode] = React.useState(initialCode);


  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  //@ts-ignore

  const handleResize = (evt, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };


  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const calculateEditorHeight = () => {
    return `calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`;
  };

  return (
    <Resizable
      minHeight={500}
      minWidth={510}
      maxWidth={1000}
      defaultSize={{
        width: width,
        height: height || 500,
      }}
      onResize={handleResize}
      className="resize-container relative"
      style={{
        background: background,
      }}
    >
      <div
        className="code-block"
        style={{
          padding: currentPadding,
        }}
      >
        <div className="handle handle-top absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-950"></div>
        <div className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full bg-slate-300 "></div>
        <div className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full bg-slate-300 "></div>
        <div className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full bg-slate-300 "></div>

        <div className="code-title h-[56px] px-4 flex items-center justify-between bg-black bg-opacity-80">
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#FF5D5B] border border-[#CF544D]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBB39] border border-[#CFA64E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#00CD4E] border border-[#0EA642]"></div>
          </div>
          <div className="input-control w-full">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent"
            />
          </div>
          <div className="w-9 h-9 p-1 bg-opacity-30 rounded-md">
            <img className="w-full h-full" src={icon} alt="" />
          </div>
        </div>
        <AceEditor
          value={code}
          name="UNIQUE_ID_OF_DIV"
          fontSize={18}
          theme={theme}
          mode={language.toLocaleLowerCase()}
          showGutter={false}
          wrapEnabled={true}
          height={calculateEditorHeight()}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-editor-container"
          onChange={handleCodeChange}
        />
      </div>
    </Resizable>
  );
}

export default CodeEditor;
