import { useSelector } from "react-redux";
import styles from "./NoteStyles.module.scss";
import NoteInput from "./NoteInput";
import NoteItem from "./NoteItem";

function NotesList() {
  const notesList = useSelector((store) => store.notes.notesList);
  return (
    <div className={styles.container}>
      <NoteInput />
      <div>
        {notesList.map((el) => (
          <NoteItem key={el.id} props={el} />
        ))}
      </div>
    </div>
  );
}
export default NotesList;
