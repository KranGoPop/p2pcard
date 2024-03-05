import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { methodValidate, selectAppDateState } from "./MainSlice";
import Header from "../header/Header";


export default function Main() {
  const {item} = useParams();
  const dataState = useSelector(selectAppDateState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataState === 'unknown') {
      dispatch(methodValidate({
        hash: item,
      }));
    }
  }, [dataState, dispatch, item]);

  return <div className={styles.cont}>
    {
      dataState === 'unknown'
      ?
      "Waiting..."
      :
      <>
        <Header />
      </>
    }
  </div>;
}