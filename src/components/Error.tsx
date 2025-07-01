import styles from '../styles/PageLayout.module.css';

const Error = ({ message }: { message: string }) => (
  <div className={styles.errorPage}>
    <div className={styles.errorIcon}>😢</div>
    <h1 className={styles.errorTitle}>Oops! Something went wrong</h1>
    <p className={styles.errorMessage}>{message}</p>
    <button className={styles.errorButton} onClick={() => window.location.reload()}>
      Reload Page
    </button>
  </div>
);

export default Error;