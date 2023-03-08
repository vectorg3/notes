import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/slices/notes';
import styles from './NoteStyles.module.scss';

function NoteInput() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const handleClick = (note) => {
        if (text.trim() !== '') {
            dispatch(addNote(note));
            setText('');
        }
    };
    return (
        <div className={styles.note__input}>
            <textarea
                value={text}
                className={styles.note__textArea}
                placeholder='write down your thoughts'
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className={styles.note__btn}
                onClick={() => handleClick({ text: text })}
            >
                Add
            </button>
        </div>
    );
}
export default NoteInput;
