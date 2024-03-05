import React, { useEffect } from "react";
import { Outlet, useHref} from "react-router-dom";
import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectAppDateState, setInvalid } from "./features/main/MainSlice";
import Error from "./features/error/Error";


export default function App() {
  const href = useHref();
  const dispatch = useDispatch();
  const dataState = useSelector(selectAppDateState);

  useEffect(() => {
    if (href === '/') {
      dispatch(setInvalid())
    }
  }, [href, dispatch]);

  return <>{
    dataState === 'invalid'
    ?
    <Error code="404" desc="Такой страницы нет" />
    :
    <Outlet />
  }</>;
}