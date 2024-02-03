"use client";
import React from "react";
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
  return (
    <Resizable
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
    >
      <div>
        <AceEditor
          theme="monokai"
          mode={language.toLocaleLowerCase()}
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={true}
          fontSize={16}
          className="ace-editor-container"
          showGutter={true}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          value="function CodeEditor() {hello world}"
        />
      </div>
    </Resizable>
  );
}

export default CodeEditor;
