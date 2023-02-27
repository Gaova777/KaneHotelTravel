import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { getActivities } from "../../../redux/actions";

import style from "./FilterOrderActivities.module.css";

const options1 = [
  { label: "Economic", value: "Economic" },
  {
    label: "Regular",
    value: "Regular",
  },
  {
    label: "VIP",
    value: "VIP",
  },
];

const options2 = [
  { label: "ASC", value: "ASC" },
  {
    label: "DESC",
    value: "DESC",
  },
];

const FilterOrderActivities = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handlerCategory = (event) => {
    setCategory(event.value);
  };

  const handlerPrice = (event) => {
    setPrice(event.value);
  };

  useEffect(() => {
    dispatch(getActivities(params.city, category, price));
  }, [category, price]);

  const handlerButton = () => {
    window.history.back();
  };

  return (
    <div className={style.filterOrderActivities}>
      <div className={style.filterOrderActivitiesContainer}>
        <div className={style.filterOrderActivitiesLogo}>LOGO</div>
        <div className={style.filterOrderActivitiesTypes}>
          <label>Category</label>
          <hr />
          <Select options={options1} onChange={handlerCategory} />
        </div>
        <div className={style.filterOrderActivitiesTypes}>
          <label>Price</label>
          <hr />
          <Select options={options2} onChange={handlerPrice} />
        </div>
        <div className={style.filterOrderActivitiesButton}>
          <button onClick={handlerButton}>REGRESAR</button>
        </div>
      </div>
    </div>
  );
};

export default FilterOrderActivities;
