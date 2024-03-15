import React, { useEffect } from "react";
import { Outlet, useHref} from "react-router-dom";
import './App.scss';
import styles from './App.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectAppDataState, setInvalid } from "./features/main/MainSlice";
import Error from "./features/error/Error";


export default function App() {
  const href = useHref();
  const dispatch = useDispatch();
  const dataState = useSelector(selectAppDataState);
  let content;

  useEffect(() => {
    if (href === '/') {
      dispatch(setInvalid())
    }
  }, [href, dispatch]);

  if (dataState === 'invalid') {
    content = <Error code="404" desc="Такой страницы нет" />;
  } else if (dataState === 'timeout') {
    content = <Error code="Время истекло." desc="Время отведенное на оплату закончилось" />
  } else {
    content = <Outlet />
  }
 
  return <div className={styles.cont}>
    {content}
  </div>;
}