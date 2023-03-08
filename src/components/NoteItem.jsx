import { useDispatch } from 'react-redux';
import styles from './NoteStyles.module.scss';
import { deleteNote, addNote } from '../redux/slices/notes';
import { useState } from 'react';

function NoteItem(props) {
    const { id, text } = props.props;
    const [isEditNote, setIsEditNote] = useState(false);
    const [editText, setEditText] = useState('');
    const dispatch = useDispatch();
    const handleEdit = () => {
        if (isEditNote === false) {
            setIsEditNote(true);
            setEditText(text);
        } else if (isEditNote === true && editText.trim() !== '') {
            dispatch(addNote({ text: editText }));
            dispatch(deleteNote(id));
        }
    };
    return (
        <div className={styles.note__item}>
            <div className={styles.note__title}>
                NoteID: {id}
                <div className={styles.note__control}>
                    <img
                        className={styles.note__edit_btn}
                        src='https://www.svgrepo.com/show/491296/pen.svg'
                        alt='edit'
                        onClick={() => handleEdit()}
                    />
                    <img
                        className={styles.note__remove}
                        src='https://www.svgrepo.com/show/500512/close-bold.svg'
                        alt='close'
                        onClick={() => dispatch(deleteNote(id))}
                    />
                </div>
            </div>
            <div className={styles.note__text}>
                {isEditNote ? (
                    <textarea
                        value={editText}
                        className={styles.note__edit}
                        onChange={(e) => setEditText(e.target.value)}
                        style={{ background: '#d1d1d1' }}
                    />
                ) : (
                    <>{text}</>
                )}
            </div>
        </div>
    );
}
export default NoteItem;
