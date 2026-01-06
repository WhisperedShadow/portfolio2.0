'use client';

import { useEffect } from 'react';
import styles from './error.module.css';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.scanLines} />
      
      <div className={styles.glitchContainer}>
        <h1 className={styles.glitch} data-text="ERROR">
          ERROR
        </h1>
      </div>
      
      <h2 className={styles.title}>Something went wrong!</h2>
      
      <p className={styles.description}>
        An unexpected error has occurred. Don't worry, it's not you—it's us. 
        The issue has been logged and our team will investigate.
      </p>
      
      <div className={styles.buttonContainer}>
        <button onClick={reset} className={styles.button}>
          Try Again
        </button>
      </div>
    </div>
  );
}