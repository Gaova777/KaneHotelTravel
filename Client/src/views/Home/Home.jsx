import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cities from "../../components/Cities/Cities";
import { getCities } from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  });

  return (
    <div className={style.homeContainer}>
      <div className={style.homeContainerWelcome}>
        <div className={style.homeWelcome}>
          <h1>¡Bienvenido!</h1>
          <p>Encuentra el lugar perfecto para pasar tus vacaciones!</p>
        </div>
      </div>
      <div className={style.homeCardContainer}>
        <Cities />
      </div>
    </div>
  );
};

export default Home;
