import "./styles/style.css";
import * as monaco from "monaco-editor";
import HtmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import CSSWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import JSWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
window.MonacoEnvironment = {
  getWorker(_, label) {
    if (label == "html") {
      return new HtmlWorker();
    } else if (label == "css3") {
      return new CSSWorker();
    } else if (label == "js") {
      return new JSWorker();
    }
  },
};

const htmlEditor = monaco.editor.create(document.querySelector("#html"), {
  value: "",
  language: "html",
  theme: "vs-dark",
  fontSize: 18,
  minimap: false,
  wordWrap: "on",
});

const cssEditor = monaco.editor.create(document.querySelector("#css"), {
  value: "",
  language: "css",
  theme: "vs-dark",
  fontSize: 18,
  minimap: false,
  wordWrap: "on",
});

const jsEditor = monaco.editor.create(document.querySelector("#js"), {
  value: "",
  language: "javascript",
  theme: "vs-dark",
  fontSize: 18,
  minimap: false,
  wordWrap: "on",
});

const iframe = document.querySelector("iframe");

htmlEditor.onDidChangeModelContent((e) => {
  iframe.srcdoc = `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
        ${htmlEditor.getValue()}
  </body>
  </html>`;
});

cssEditor.onDidChangeModelContent((e) => {
  iframe.srcdoc += `<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    <style>
          ${cssEditor.getValue()}
          </style>
    </body>
    </html>`;
});

jsEditor.onDidChangeModelContent((e) => {
  iframe.srcdoc += `<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    <script>
    ${jsEditor.getValue()}
    </script>
          
    </body>
    </html>`;
});
