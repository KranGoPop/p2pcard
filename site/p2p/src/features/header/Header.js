import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import ProgressBar from "../progress_bar/ProgressBar";
import {ReactComponent as Card} from "../../img/card.svg";
import {ReactComponent as Exchange} from "../../img/exchange.svg";
import {ReactComponent as Ok} from "../../img/ok.svg";
import { useSelector } from "react-redux";
import { selectAppDataState } from "../main/MainSlice";
import { useParams } from "react-router-dom";


export default function Header() {
  const [active, setActive] = useState(-1);
  const [fail, setFail] = useState(-1);
  const dataState = useSelector(selectAppDataState);
  const {bank} = useParams();

  useEffect(() => {
    if (dataState === 'cancel') {
      setFail(2);
    } else if (dataState === 'success') {
      setActive(2);
    } else if (bank !== undefined && dataState === 'valid') {
      setActive(1);
    } else if (dataState === 'valid') {
      setActive(0);
    }
  }, [dataState, bank, setActive, active])

  return (
  <div className={styles.cont}>
    <ProgressBar
      active={active}
      failStage={fail}
    >
      <Card />
      <Exchange />
      <Ok />
    </ProgressBar>
  </div>
  );
}