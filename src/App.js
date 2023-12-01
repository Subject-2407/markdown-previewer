import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App(){
  const [text, setText] = useState('# Markdown Previewer\n## Made by Bintang\n[My Github](https://github.com/Subject-2407)\n- My JavaScript simple program :\n`console.log("Hello, world!");`\n- My JavaScript advanced program :\n```\nconst advancedFoo = () => {\n  return console.log("Advanced program");\n}\nadvancedFoo();\n```\n- My Skillset : \n1. React\n2. Next.js\n3. Express\n4. Node.js\n5. MongoDB\nBlock quotes : \n> Hello, world!\n**Be bold**\nby\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)');

  const updateText = (text) => {
    setText(text);
    console.log(text);
  }

  const editorOnChange = (e) => {
    updateText(e.target.value)
  }

  marked.setOptions({
    gfm: true,
    breaks: true
  });

  const previewText = marked.parse(text);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="editor-div">
          <h1 style={{
            color: '#ff9696',
            fontWeight: 'normal',
            alignSelf: 'flex-start'
          }}>markdown</h1>
          <textarea id="editor" onChange={editorOnChange} value={text} />
        </div>
        <div className="preview-div">
          <h1 style={{
            color: '#8c8cff',
            fontWeight: 'normal',
            alignSelf: 'flex-start'
          }}>preview</h1>
          <div id="preview" dangerouslySetInnerHTML={{ __html: previewText}} />
        </div>
      </div>
      <p id="copyright">by Bintang</p>
    </div>
  );
}

export default App;
