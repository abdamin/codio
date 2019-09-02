import React, { Component } from "react";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/mode/javascript";
import "brace/mode/css";
import "brace/theme/monokai";
import "./CodeEditor.css";
import "brace/ext/language_tools";

export default class CodeEditor extends Component {
  constructor() {
    super();
    this.state = {
      html: ` <!--HTML-->

<h1>Hello World</h1>`,
      css: ` /*CSS*/

body {
    background-color: black;
    text-align: center;
} `,
      javascript: ` /*JavaScript*/

var h1 = document.querySelector("body");
h1.style.color = "white";
      `,
      finalCode: ""
    };
  }

  componentDidMount() {
    this.setIframeContent(
      this.state.html,
      this.state.css,
      this.state.javascript
    );
  }

  setIframeContent = (html, css, js) => {
    const source = `
      <html>
        <head>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            ${js}
          </script>
        </body>
      </html>
    `;
    this.setState({ finalCode: source });

    if (this.state.finalCode !== "") {
      this.props.changeFileCode(this.state.finalCode);
    }
  };

  onChangeHTML = newValue => {
    console.log("change", newValue);
    this.setState({ html: newValue });
    this.setIframeContent(
      this.state.html,
      this.state.css,
      this.state.javascript
    );
  };
  onChangeCSS = newValue => {
    console.log("change", newValue);
    this.setState({ css: newValue });
    this.setIframeContent(
      this.state.html,
      this.state.css,
      this.state.javascript
    );
  };
  onChangeJavascript = newValue => {
    console.log("change", newValue);
    this.setState({ javascript: newValue });
    this.setIframeContent(
      this.state.html,
      this.state.css,
      this.state.javascript
    );
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 pr-0">
            <div className="editor">
              <div className="type">
                <h3>HTML</h3>
              </div>

              <AceEditor
                mode="html"
                theme="monokai"
                onChange={this.onChangeHTML}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                height="350px"
                width="auto"
                enableBasicAutocompletion={true}
                enableSnippets={true}
                enableLiveAutocompletion={true}
                value={this.state.html}
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  boxShadow: "0px 3px rgba(0,0,0,0.9)"
                }}
              />
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="editor">
              <div className="type">
                <h3>CSS</h3>
              </div>

              <AceEditor
                mode="css"
                theme="monokai"
                onChange={this.onChangeCSS}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                height="350px"
                width="auto"
                enableBasicAutocompletion={true}
                enableSnippets={true}
                enableLiveAutocompletion={true}
                value={this.state.css}
                id="css"
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  boxShadow: "0px 3px rgba(0,0,0,0.9)"
                }}
              />
            </div>
          </div>
          <div className="col-md-4 pl-0">
            <div className="editor">
              <div className="type">
                <h3>JavaScript</h3>
              </div>

              <AceEditor
                mode="javascript"
                theme="monokai"
                onChange={this.onChangeJavascript}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                height="350px"
                width="auto"
                enableBasicAutocompletion={true}
                enableSnippets={true}
                enableLiveAutocompletion={true}
                value={this.state.javascript}
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  boxShadow: "0px 3px rgba(0,0,0,0.9)"
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <iframe title="code" id="code" srcDoc={this.state.finalCode} />
        </div>
      </div>
    );
  }
}
