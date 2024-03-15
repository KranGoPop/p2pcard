import React from "react";
import styles from "./SelectBank.module.scss";
import Title from "../title/Title";
import BankGrid from "../bank_grid/BankGrid";
import BankOption from "../back_option/BankOption";

import { banks_data } from "../../const";


export default function SelectBank() {
  const banks = Object.values(banks_data).map((bank) => <BankOption img={bank.img} alt={bank.name} key={bank.id} to={bank.id}>{bank.name}</BankOption>);

  return (
  <div className={styles.cont}>
    <Title>Выберите банк</Title>
    <BankGrid>
      {banks}
    </BankGrid>
  </div>
  );
}