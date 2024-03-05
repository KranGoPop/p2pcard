import React from "react";
import styles from "./Point.module.scss";


export default function Point({
  active,
  children,
  fail,
}) {
  let front;
  let img;

  if (fail) {
    front = styles.frontFail;
    img = styles.imgActive;
  } else if (active) {
    front = styles.frontActive;
    img = styles.imgActive;
  } else {
    front = styles.front;
    img = styles.img;
  }
  return (
  <div className={styles.cont}>
    <div className={front}></div>
    <div className={img}>
      {children}
    </div>
  </div>
  );
}