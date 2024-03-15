import React from "react";
import styles from "./BankGrid.module.scss";


export default function BankGrid({
  children
}) {
  return (
  <div className={styles.cont}>
    {children}
  </div>
  );
}