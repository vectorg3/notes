import styles from './Logo.module.scss';

function Logo() {
    return (
        <div className={styles.logo}>
            <img
                src='https://cdn.onlinewebfonts.com/svg/download_398385.png'
                alt='Logo'
                className={styles.logo__img}
            />
            <p className={styles.logo__title}>NoteWrite</p>
            <p className={styles.logo__subtitle}>
                to write or not to write, that is the question...
            </p>
        </div>
    );
}
export default Logo;
