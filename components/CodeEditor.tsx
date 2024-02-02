"use client";
import React from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

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
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          fontSize={16}
          className="ace-editor-container"
          showGutter={false}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          value="function CodeEditor() {hello world}"
        />
      </div>
    </Resizable>
  );
}

export default CodeEditor;
