import React from "react";
import styles from "./Line.module.scss";


export default function Line({
  active
}) {
  return (
  <div className={styles.cont}>
    <div className={active ? styles.frontActive : styles.front}></div>
  </div>
  );
}