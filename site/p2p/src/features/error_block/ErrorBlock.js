import React from "react";
import styles from "./ErrorBlock.module.scss";
import error_svg from "../../img/error.svg";

export default function ErrorBlock({
  code,
  desc,
}) {
  return <div className={styles.cont}>
    <div className={styles.img}>
      <img src={error_svg} alt="Ошибка" />
    </div>
    <div className={styles.error}>{code}</div>
    {
      desc !== undefined &&
      <div className={styles.desc}>{desc}</div>
    }
  </div>;
}