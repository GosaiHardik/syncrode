// CodeEditor.jsx

// import React, { useState } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { html } from '@codemirror/lang-html';

const CodeEditor = ({ code, onChange }) => {
  return (
    <CodeMirror
      value={code}
      height="88vh"
      theme={vscodeDark}
      onChange={onChange}
      extensions={[html({ jsx: true })]}
    />
  );
};

export default CodeEditor;