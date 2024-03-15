import React from "react";
import styles from "./Tip.module.scss";


export default function Tip({
  children
}) {
  let content = [];

  for (let i = 0; i < children.length; i++) {
    content.push(
      <div className={styles.item} key={i}>
        <div className={styles.text}>{children[i]}</div>
        {i !== 0 && <div className={styles.trigLeft}></div>}
        {i !== children.length - 1 && <div className={styles.trigRight}></div>}
      </div>
    )
  }
  return (
  <div className={styles.cont}>
    {content}
  </div>
  );
}