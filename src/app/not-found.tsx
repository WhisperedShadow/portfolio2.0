// app/not-found.tsx
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        {[...Array(7)].map((_, i) => (
          <div key={i} className={styles.star} />
        ))}
      </div>
      
      <div className={styles.numberContainer}>
        <h1 className={styles.number}>404</h1>
      </div>
      
      <h2 className={styles.title}>Page Not Found</h2>
      
      <p className={styles.description}>
        The page you're looking for seems to have drifted into the digital void.
        It might have been moved, deleted, or perhaps never existed in this reality.
      </p>
      
      <Link href="/" className={styles.button}>
        Return Home
      </Link>
    </div>
  );
}