import React from "react";
import Button from "./Button";
import { showFormattedDate } from "../utils";

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h4 className="note-item__title">{title}</h4>
        <p className="note-item__date ">{showFormattedDate(createdAt)}</p>
        <div className="note-item__body">{body}</div>
      </div>
      <div className="note-item__action">
        <Button color="red" onClick={() => onDelete(id)}>
          Hapus
        </Button>
        <Button color="yellow" onClick={() => onArchive(id)}>
          {archived ? "Pindahkan" : "Arsipkan"}
        </Button>
      </div>
    </div>
  );
};

export default NoteItem;
