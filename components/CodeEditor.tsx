"use client";
import React, { useState } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

//languages}
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-typescript"

//themes
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-solarized_dark"
import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-terminal"
import "ace-builds/src-noconflict/theme-kuroir"

interface CodeEditorProps {
  onCodeChange: (code: string) => void;
  language: string;
  theme: string;
  icon: string
  background?: string
  currentPadding?: string
}

function CodeEditor({
  onCodeChange,
  language,
  theme,
  icon,
  background,
  currentPadding}:CodeEditorProps) {

    const [width, setWidth] = React.useState(1000)
    const [height, setHeight] = React.useState<number | null>(500)
    //@ts-ignore
    const handleResize = (evt, direction, ref, pos ) => {}

  return (
    <Resizable
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
      defaultSize={{
        width: width,
        height: height || 500
      }}
      onResize={handleResize}
    >
      <div>
        <AceEditor
          value="function CodeEditor() {hello world}"
          name="UNIQUE_ID_OF_DIV"
          fontSize={18}
          theme="monokai"
          mode={language.toLocaleLowerCase()}
          showGutter={false}
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-editor-container"
          />
      </div>
    </Resizable>
  );
}

export default CodeEditor;
