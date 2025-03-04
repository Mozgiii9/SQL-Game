// src/components/CodeEditor.jsx
import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor({ onExecute, editorHeight = "75px" }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    if (window.monaco) {
      window.monaco.editor.defineTheme("custom-theme", {
        base: "vs",
        inherit: true,
        rules: [
          { token: "comment", foreground: "#5A472B" },
          { token: "keyword", foreground: "#D4AF37" },
          { token: "string", foreground: "#8B0000" },
          { token: "number", foreground: "#006400" },
        ],
        colors: {
          "editor.background": "#F5F0E1",
          "editor.lineHighlightBackground": "#FFF8F0",
          "editorLineNumber.foreground": "#5A472B",
          "editorCursor.foreground": "#5A472B",
        },
      });
    }
  }, []);

  const handleEditorChange = (value) => {
    setCode(value || "");
  };

  const handleCheck = () => {
    if (onExecute) {
      onExecute(code);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <style>
        {`
          .decorationsOverviewRuler {
            display: none !important;
          }
        `}
      </style>

      <Editor
        options={{
          minimap: { enabled: false },
        }}
        height={editorHeight}
        defaultLanguage="sql"
        defaultValue="// Напишите ваш SQL-запрос"
        theme="custom-theme"
        onChange={handleEditorChange}
      />

      <div className="flex justify-end">
        <button
          onClick={handleCheck}
          className="bg-[#D4AF37] text-black px-4 py-2 rounded hover:bg-[#C09A2F] transition-colors"
        >
          Проверить
        </button>
      </div>
    </div>
  );
}

export default CodeEditor;
