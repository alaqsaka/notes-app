import React, { Component } from "react";
import TextField from "./TextField";

export default class NoteAppHeader extends Component {
  render() {
    return (
      <>
        <div className="note-app__header">
          <h1>Catatan Saya</h1>
          <TextField
            type="text"
            onChange={this.props.onSearch}
            value={this.props.search}
            placeholder="Cari catatan ..."
          />
        </div>
      </>
    );
  }
}
