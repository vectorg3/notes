import './App.css';
import Logo from './components/Logo';
import NoteInput from './components/NoteInput';
import NotesList from './components/NotesList';
import styles from './components/NoteStyles.module.scss';

function App() {
    return (
        <div className={styles.container}>
            <Logo />
            <NoteInput />
            <NotesList />
        </div>
    );
}

export default App;
