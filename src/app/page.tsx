"use client";

import Calculator from "./components/Calculator";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Calculator/>
    </div>
  );
}
