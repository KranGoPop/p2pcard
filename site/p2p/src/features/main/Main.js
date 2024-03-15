import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import { Outlet, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { methodValidate, selectAppDataState, selectAppTime, setAppTimeout, setCurTime } from "./MainSlice";
import Header from "../header/Header";
import PayBlock from "../pay_block/PayBlock";
import SelectBank from "../select_bank/SelectBank";
import Result from "../result/Result";
import Spinner from "../spinner/Spinner";


export default function Main() {
  const {item, bank} = useParams();
  const dataState = useSelector(selectAppDataState);
  const dispatch = useDispatch();
  const time = useSelector(selectAppTime);

  let content;

  useEffect(() => {
    if (dataState === 'unknown') {
      dispatch(methodValidate({
        hash: item,
      }));
    } else if (dataState === 'valid') {
      setInterval(() => {dispatch(setCurTime(Date.now()))}, 1000);
    }
  }, [dataState, dispatch, item]);

  useEffect(() => {
    if (dataState === 'valid' && time.curTime >= time.endTime) {
      dispatch(setAppTimeout());
    }
  }, [time, dataState, dispatch]);

  if (dataState === 'cancel') {
    content = <Result status="cancel" />;
  } else if (dataState === 'success') {
    content = <Result status="success" />
  } else if (bank === undefined) {
    content = <SelectBank />
  } else {
    content = <Outlet />
  }

  return <div className={styles.cont}>
    <Header />
    <PayBlock>
      {
        dataState === 'unknown'
        ?
        <Spinner />
        :
        <>
            {content}
        </>
      }
    </PayBlock>
  </div>;
}