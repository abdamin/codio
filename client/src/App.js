import React, { Component } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/logo/codio.png";

class App extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark fixed-top mb-4 navbar-expand-lg"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            boxShadow: " 0 3px 5px rgb(0,0,0)"
          }}
        >
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top ml-2"
              alt=""
            />
            <span
              style={{
                fontFamily: "Ubuntu",
                fontWeight: "800",
                fontSize: "25px"
              }}
            >
              {" Codio"}
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item mr-3">
                <a className="nav-link" href={window.location.href}>
                  <FontAwesomeIcon icon={faFile} className="" />
                  {"  New Project"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faFileDownload} />
                  {" Download"}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <CodeEditor />
      </div>
    );
  }
}

export default App;
