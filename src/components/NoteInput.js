import React, { Component } from "react";
import { addNote } from "../utils/local-data";
import Button from "./Button";
import TextArea from "./TextArea";
import TextField from "./TextField";

export default class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.setState(() => {
      return {
        title: "",
      };
    });
    this.setState(() => {
      return {
        body: "",
      };
    });

    const title = this.state.title;
    const body = this.state.body;
    addNote({ title, body });
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <div className="note-input__body">
          <h3>Buat Catatan</h3>
          <p className="note-input__title__char-limit">
            Sisa Karakter: {50 - this.state.title.length}
          </p>
          <form onSubmit={this.onSubmitEventHandler}>
            <TextField
              type="text"
              placeholder="Ini adalah judul"
              value={this.state.title}
              required
              onChange={this.onTitleChangeEventHandler}
            />
            <TextArea
              placeholder="Tuliskan catatanmu disini"
              value={this.state.body}
              required
              onChange={this.onBodyChangeEventHandler}
            />
            <Button type="submit">Buat Catatan Baru</Button>
          </form>
        </div>
      </div>
    );
  }
}
