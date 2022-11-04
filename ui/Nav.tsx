'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FC } from "react";
import styles from '../styles/Nav.module.css'

export const Nav: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
      <Link href="/hoge" className={`${styles.link} ${pathname === '/hoge' ?  styles.active : ''}`}>Hoge</Link>
      <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
    </nav>
  );
}
