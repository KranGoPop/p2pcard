import React from "react";
import styles from "./PrgressBar.module.scss";
import Point from "./point/Point";
import Line from "./line/Line";
import { ReactComponent as Exit } from "../../img/exit.svg";


export default function PrgressBar({
  children,
  active,
  failStage,
}) {
  const to = active * 2;
  let content = [];

  for (let i = 0; i < 2 * children.length - 1; i++) {
    if (i % 2 === 0) {
      const is_fail = 2 * failStage === i;
      content.push(
        <Point active={i <= to} key={i} fail={is_fail}>
          {
            is_fail
            ?
            <Exit />
            : 
            children[Math.floor(i / 2)]
          }
        </Point>
      );
    } else {
      content.push(<Line active={i < to} key={i} />);
    }
  }
  return (
    <div className={styles.cont}>
      {content}
    </div>
  );
}