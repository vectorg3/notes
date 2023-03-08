import { useSelector } from 'react-redux';
import styles from './NoteStyles.module.scss';
import NoteInput from './NoteInput';
import NoteItem from './NoteItem';
import { useEffect } from 'react';
import Logo from './Logo';

function NotesList() {
    const notesList = useSelector((store) => store.notes.notesList);
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notesList));
    }, [notesList]);

    return (
        <div className={styles.note__list}>
            {notesList.map((el) => (
                <NoteItem key={el.id} props={el} />
            ))}
        </div>
    );
}
export default NotesList;
