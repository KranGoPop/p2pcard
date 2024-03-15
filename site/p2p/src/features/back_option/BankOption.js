import React from "react";
import styles from "./BankOption.module.scss";
import { NavLink } from "react-router-dom";


export default function BankOption({
  img,
  alt,
  children,
  to
}) {
  return (
  <NavLink to={to} className={styles.cont}>
    <div className={styles.img}>
      <img src={img} alt={alt} />
    </div>
    <div className={styles.name}>{children}</div>
  </NavLink>
  );
}