import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/slices/notes";
import NoteItem from "./NoteItem";

function NotesList() {
  const dispatch = useDispatch();
  const notesList = useSelector((store) => store.notes.notesList);
  const handleClick = (note) => {
    dispatch(addNote(note));
    console.log(notesList);
    console.log(Date.now());
  };
  return (
    <div>
    {notesList.map((el) => <NoteItem key={el.id} props={el} />)}
    </div>
  );
}
export default NotesList;
