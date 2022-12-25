import React from "react";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { getNote } from "../utils/local-data";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.movie === null) {
      return (
        <div className="note-app__body">
          <p>Catatan tidak ditemukan.</p>
        </div>
      );
    }
    console.log(this.state.note);
    const { title, createdAt, body } = this.state.note;
    return (
      <div className="note-app__body">
        <h1 className="note-detail__title">{title}</h1>
        <p className="note-detail__date">{showFormattedDate(createdAt)}</p>
        <p className="note-detail__body">{body}</p>
      </div>
    );
  }
}

export default DetailPageWrapper;
