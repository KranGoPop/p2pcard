import React from "react";
import styles from "./Result.module.scss";
import cancel from "../../img/error.svg";
import success from "../../img/success.svg";


export default function Result({
  status
}) {
  let img;
  let alt;
  let text;

  if (status === 'cancel') {
    img = cancel;
    alt = 'Отменено';
    text = 'Заказ отменен.';
  } else {
    img = success;
    alt = 'Успешно';
    text = 'Заказ успешно оплачен';
  }

  return (
  <div className={styles.cont}>
    <div className={styles.img}>
      <img src={img} alt={alt} />
    </div>
    <div className={styles.text}>{text}</div>
  </div>
  );
}