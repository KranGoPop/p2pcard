import React, { useRef } from "react";
import styles from "./Card.module.scss";
import bg_card from "../../img/bg-card.png";
import copy from "../../img/copy.svg";
import { format_card } from "../../functions";
import { useState } from "react";
import ClipboardJS from "clipboard";


export default function Card({
  bank: {
    card,
    name,
    img,
    owner
  }
}) {
  const [is_message_shown, setShown] = useState(false);
  const clipRef = useRef(null);

  return (
  <div className={styles.cont}>
    <img className={styles.bgCard} src={bg_card} alt="Задник карты" />
    <div className={styles.front}>
      <div className={styles.top}>
        <div className={styles.himg}>
          <img src={img} alt={name} />
        </div>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.bottom}>
        <div>
          <div className={styles.title}>Номер карты</div>
          <div
            className={styles.card}
            onClick={() => {
              // navigator.clipboard.writeText(card).then(() => {setShown(true); setTimeout(() => {setShown(false)}, 1000);})
              let clipboard = new ClipboardJS(clipRef.current);
              clipboard.on('success', () => {setShown(true); setTimeout(() => {setShown(false)}, 1000);});
              clipRef.current.click();
            }}
          >
            <div className={styles.number}>{format_card(card)}</div>
            <div className={styles.copy}>
              <img src={copy} alt="Скопировать" />
            </div>
            <div className={is_message_shown ? styles.message : styles.noMessage}><div>Номер карты скопирован</div></div>
            <button style={{display: 'none'}} data-clipboard-text={card} ref={clipRef}></button>
          </div>
        </div>
        <div className={styles.owner}>{owner}</div>
      </div>
    </div>
  </div>
  );
}