import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.particles}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.particle} />
        ))}
      </div>
      
      <h1 className={styles.logo}>PORTFOLIO</h1>
      
      <div className={styles.loader}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
      
      <div className={styles.progress}>
        <div className={styles.progressBar} />
      </div>
      
      <p className={styles.message}>
        Crafting digital experiences...
      </p>
    </div>
  );
}