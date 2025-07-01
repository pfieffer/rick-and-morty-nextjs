import styles from '../styles/PageLayout.module.css';

const Loading = () => (
  <div className={styles.loadingPage}>
    <div className={styles.spinner}></div>
    <h2 className={styles.loadingText}>Loading...</h2>
  </div>
);

export default Loading;