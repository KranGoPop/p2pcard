import React from "react";
import styles from "./Button.module.scss";


export default function Button({
  children,
  color,
  onClick
}) {
  let cont;

  if (color === 'purple') {
    cont = styles.purple;
  } else {
    cont = styles.transp;
  }

  return (
  <div className={cont} onClick={onClick}>
    {children}
  </div>
  );
}