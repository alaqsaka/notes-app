import React from "react";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NoteItem = ({ id, title, body, createdAt }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <Link to={`/notes/${id}`} style={{ color: "white" }}>
          {" "}
          <h4 className="note-item__title">{title}</h4>
        </Link>

        <p className="note-item__date ">{showFormattedDate(createdAt)}</p>
        <div className="note-item__body">{body}</div>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
