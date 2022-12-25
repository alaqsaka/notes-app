import React, { Component } from "react";
import { Link } from "react-router-dom";
// import TextField from "./TextField";

export default class NoteAppHeader extends Component {
  render() {
    return (
      <>
        <header>
          <h1>
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Catatan Saya{" "}
            </Link>
          </h1>
          <Link
            to="/archived"
            style={{ textDecoration: "none", color: "white" }}
          >
            Arsip
          </Link>
        </header>
      </>
    );
  }
}
