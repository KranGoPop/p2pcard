import React from "react";
import styles from "./PayBlock.module.scss";


export default function PayBlock({
  children
}) {
  return (
  <div className={styles.cont}>
    {children}
  </div>
  );
}