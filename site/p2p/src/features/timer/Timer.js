import React from "react";
import styles from "./Timer.module.scss";
import { useSelector } from "react-redux";
import { selectAppTime } from "../main/MainSlice";


export default function Timer() {
  const time = useSelector(selectAppTime);
  const delta = Math.round((time.endTime - time.curTime) / 1000);

  const sec = '' + delta % 60;
  const min = '' + Math.round(delta / 60);


  return (
  <div className={styles.cont}>
    <div className={styles.text}>Оставшееся на оплату время:</div>
    <div className={styles.time}>{min.length === 1 ? '0' + min : min}:{sec.length === 1 ? '0' + sec : sec}</div>
  </div>
  );
}