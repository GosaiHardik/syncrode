// CodeEditor.jsx

// import React, { useState } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const CodeEditor = ({ code, onChange }) => {
  return (
    <CodeMirror
      value={code}
      height="800px"
      theme={vscodeDark}
      onChange={onChange}
    />
  );
};

export default CodeEditor;