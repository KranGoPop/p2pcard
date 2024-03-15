import React from "react";
import styles from "./Title.module.scss";


export default function Title({
  children
}) {
  return (
  <div className={styles.cont}>
    {children}
  </div>
  );
}