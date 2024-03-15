import React from "react";
import styles from "./Bank.module.scss";
import { useParams } from "react-router-dom";
import Title from "../title/Title";
import { format_price } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import { selectAppData, setCancel, setSuccess } from "../main/MainSlice";
import Tip from "../tip/Tip";
import Card from "../card/Card";
import { banks_data } from "../../const";
import Timer from "../timer/Timer";
import Button from "../button/Button";


export default function Bank() {
  const dispatch = useDispatch();
  const {bank} = useParams();
  const {price} = useSelector(selectAppData);

  return (
  <div className={styles.cont}>
    <Title>Совершите перевод на сумму <b>{format_price(price)} ₽</b></Title>
    <div className={styles.block}>
      <Tip>
        <>Скопируйте реквизиты</>
        <>Совершите перевод</>
        <>Ожидайте обработки</>
      </Tip>
      <div className={styles.split}>
        <div className={styles.left}>
          <Card bank={banks_data[bank]} />
          <Timer />
        </div>
        <div className={styles.right}>
          <p>Итоговая сумма к получению должна составить <b>{format_price(price)} ₽</b>, <b>иначе</b> перевод <b>не будет</b> зачислен!</p>
          <p>Перевод необходимо совершить <b>одним платежом</b>.</p>
          <p>Реквизиты для оплаты меняются с каждой заявкой. Переводите <b>строго</b> на реквизиты, <b>указанные в заявке</b>. В противном случае, перевод <b>не будет зачислен!</b></p>
          <p>Комментарий к платежу писать не нужно</p>
        </div>
      </div>
    </div>
    <div className={styles.btnBlock}>
      <Button color="purple" onClick={() => {dispatch(setSuccess());}}>Я перевел</Button>
      <Button color="transparent" onClick={() => {dispatch(setCancel());}}>Отмена</Button>
    </div>
  </div>
  );
}