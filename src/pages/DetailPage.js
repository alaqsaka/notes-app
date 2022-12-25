import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { RiDeleteBin2Line, RiInboxArchiveFill } from "react-icons/ri";
import { getNote, deleteNote, archiveNote } from "../utils/local-data";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onDeleteNoteHandler(id) {
    deleteNote(id);
    navigate("/");
  }

  function onArchiveNoteHandler(id) {
    archiveNote(id);
    navigate("/");
  }

  return (
    <DetailPage
      id={id}
      deleteNote={onDeleteNoteHandler}
      archiveNote={onArchiveNoteHandler}
    />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.props.deleteNote(id);
  }

  onArchiveHandler(id) {
    this.props.archiveNote(id);
  }

  render() {
    if (this.state.movie === null) {
      return (
        <div className="detail-page">
          <p>Catatan tidak ditemukan.</p>
        </div>
      );
    }

    const { title, createdAt, body, id } = this.state.note;
    return (
      <div className="detail-page">
        <h1 className="detail-page__title">{title}</h1>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <p className="detail-page__body">{body}</p>

        <div className="detail-page__action">
          <div className="action" onClick={() => this.onDeleteHandler(id)}>
            <RiDeleteBin2Line />
          </div>
          <div className="action" onClick={() => this.onArchiveHandler(id)}>
            <RiInboxArchiveFill />
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPageWrapper;
