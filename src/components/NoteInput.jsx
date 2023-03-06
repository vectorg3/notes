import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { addNote } from "../redux/slices/notes";
import styles from "./NoteStyles.module.scss";

function NoteInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const handleClick = (note) => {
    dispatch(addNote(note));
  };
  return (
    <div className={styles.note__input}>
      <TextField
        label="Title"
        style={{marginBottom: '2rem'}}
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Text"
        style={{marginBottom: '2rem'}}
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => handleClick({ title: title, text: text })}
      >
        Add
      </Button>
    </div>
  );
}
export default NoteInput;
