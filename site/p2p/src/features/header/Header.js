import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import ProgressBar from "../progress_bar/ProgressBar";
import {ReactComponent as Card} from "../../img/card.svg";
import {ReactComponent as Exchange} from "../../img/exchange.svg";
import {ReactComponent as Ok} from "../../img/ok.svg";


export default function Header() {
  const [active, setActive] = useState(0);

  return (
  <div className={styles.cont}>
    <ProgressBar
      active={active}
      failStage={-1}
    >
      <Card />
      <Exchange />
      <Ok />
    </ProgressBar>
  </div>
  );
}