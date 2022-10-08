import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [ifClicked, setClick] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClick() {
    setClick(true);
  }

  return (
    <div>
      <form className="create-note">
        
        {ifClicked  ? 
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
        /> : null}

        <textarea
          onClick={handleClick}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={ifClicked ? 3 : 1}
        />
        {/* <form className="create-note">
        {ifClicked && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={ifClicked ? 3 : 1}
        /> */}

        <Zoom in={ifClicked}>
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
