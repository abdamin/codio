(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/codio.4515349e.png"},22:function(e,a,t){e.exports=t(48)},27:function(e,a,t){},28:function(e,a,t){},42:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(20),c=t.n(l),r=(t(27),t(3)),s=t(4),i=t(6),m=t(5),d=t(7),h=(t(28),t(8)),p=t.n(h),b=(t(37),t(39),t(40),t(41),t(42),t(43),function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).setIframeContent=function(a,t,n){var o="\n      <html>\n        <head>\n          <style>\n            ".concat(t,"\n          </style>\n        </head>\n        <body>\n          ").concat(a,"\n          <script>\n            ").concat(n,"\n          <\/script>\n        </body>\n      </html>\n    ");e.setState({finalCode:o}),""!==e.state.finalCode&&e.props.changeFileCode(e.state.finalCode)},e.onChangeHTML=function(a){console.log("change",a),e.setState({html:a}),e.setIframeContent(e.state.html,e.state.css,e.state.javascript)},e.onChangeCSS=function(a){console.log("change",a),e.setState({css:a}),e.setIframeContent(e.state.html,e.state.css,e.state.javascript)},e.onChangeJavascript=function(a){console.log("change",a),e.setState({javascript:a}),e.setIframeContent(e.state.html,e.state.css,e.state.javascript)},e.state={html:" \x3c!--HTML--\x3e\n\n<h1>Hello World</h1>",css:" /*CSS*/\n\nbody {\n    background-color: black;\n    text-align: center;\n} ",javascript:' /*JavaScript*/\n\nvar h1 = document.querySelector("body");\nh1.style.color = "white";\n      ',finalCode:""},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setIframeContent(this.state.html,this.state.css,this.state.javascript)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 pr-0"},o.a.createElement("div",{className:"editor"},o.a.createElement("div",{className:"type"},o.a.createElement("h3",null,"HTML")),o.a.createElement(p.a,{mode:"html",theme:"monokai",onChange:this.onChangeHTML,name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0},height:"350px",width:"auto",enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,value:this.state.html,style:{backgroundColor:"rgba(0,0,0,0.4)",boxShadow:"0px 3px rgba(0,0,0,0.9)"}}))),o.a.createElement("div",{className:"col-md-4 p-0"},o.a.createElement("div",{className:"editor"},o.a.createElement("div",{className:"type"},o.a.createElement("h3",null,"CSS")),o.a.createElement(p.a,{mode:"css",theme:"monokai",onChange:this.onChangeCSS,name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0},height:"350px",width:"auto",enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,value:this.state.css,id:"css",style:{backgroundColor:"rgba(0,0,0,0.4)",boxShadow:"0px 3px rgba(0,0,0,0.9)"}}))),o.a.createElement("div",{className:"col-md-4 pl-0"},o.a.createElement("div",{className:"editor"},o.a.createElement("div",{className:"type"},o.a.createElement("h3",null,"JavaScript")),o.a.createElement(p.a,{mode:"javascript",theme:"monokai",onChange:this.onChangeJavascript,name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0},height:"350px",width:"auto",enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,value:this.state.javascript,style:{backgroundColor:"rgba(0,0,0,0.4)",boxShadow:"0px 3px rgba(0,0,0,0.9)"}})))),o.a.createElement("div",{className:"row"},o.a.createElement("iframe",{title:"code",id:"code",srcDoc:this.state.finalCode})))}}]),a}(n.Component)),g=t(9),u=t(11),v=t(21),f=t.n(v),E=t(47),C=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).changeFileCode=function(e){t.setState({code:e})},t.state={code:'\n      <html>\n        <head>\n          <style>\n            /*CSS*/\n\n            body {\n              background-color: black;\n              text-align: center;\n            }\n          </style>\n        </head>\n        <body>\n          \x3c!--HTML--\x3e\n\n          <h1>\n            Hello World\n          </h1>  \n\n          <script>\n            /*JavaScript*/\n\n            var h1 = document.querySelector("body");\n            h1.style.color = "white";\n          <\/script>\n        </body>\n      </html>\n    '},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.code),o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-dark fixed-top mb-4 navbar-expand-lg",style:{backgroundColor:"rgba(0,0,0,0.6)",boxShadow:" 0 3px 5px rgb(0,0,0)"}},o.a.createElement("a",{className:"navbar-brand",href:"/"},o.a.createElement("img",{src:f.a,width:"40",height:"40",className:"d-inline-block align-top ml-2",alt:""}),o.a.createElement("span",{style:{fontFamily:"Ubuntu",fontWeight:"800",fontSize:"25px"}}," Codio")),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},o.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0"},o.a.createElement("li",{className:"nav-item mr-3"},o.a.createElement("a",{className:"nav-link",href:window.location.href},o.a.createElement(g.a,{icon:u.a,className:""}),"  New Project")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){return E(e.state.code,"project.html")}},o.a.createElement(g.a,{icon:u.b})," Download"))))),o.a.createElement(b,{changeFileCode:this.changeFileCode}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.aaae6d32.chunk.js.map