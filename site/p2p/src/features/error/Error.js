import React from "react";
import styles from "./Error.module.scss";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import ErrorBlock from "../error_block/ErrorBlock";

export default function Error({
  code,
  desc
}) {
  const error = useRouteError();
  let error_block;

  if (code) {
    error_block = <ErrorBlock code={code} desc={desc} />;
  } else if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      error_block = <ErrorBlock code="404" desc="Не удалось найти страницу." />;
    } else {
      error_block = <ErrorBlock code="Неизвестная Ошибка" desc="Пороизошла ошибка." />;
    }
  } else {
    error_block = <ErrorBlock code="Ошибка" desc="Пороизошла ошибка." />;
  }

  return <div className={styles.cont}>{error_block}</div>;
}