import { FC } from "react";
import styles from '../styles/Home.module.css'

export const Footer: FC = () => {
  console.log('Footer');

  return (
    <footer className={styles.footer}>
      Hi
    </footer>
  );
}
