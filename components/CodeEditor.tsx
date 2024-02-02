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

function CodeEditor() {
  return (
    <Resizable
      className="bg-white m-2"
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
    >
      <div>
        <AceEditor
          theme="monokai"
          mode={"javascript"}
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
