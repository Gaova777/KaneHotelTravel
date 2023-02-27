import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { getHotels } from "../../../redux/actions";
import style from "./FilterOrderHotels.module.css";

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

const FilterOrderHotels = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");

  const handlerCategory = (event) => {
    setCategory(event.value);
  };

  const handlerRating = (event) => {
    setRating(event.value);
  };

  useEffect(() => {
    dispatch(getHotels(params.city, category, rating));
  }, [category, rating]);

  const handlerButton = () => {
    window.history.back();
  };

  return (
    <div className={style.filterOrderHotels}>
      <div className={style.filterOrderHotelsContainer}>
        <div className={style.filterOrderHotelsLogo}>LOGO</div>
        <div className={style.filterOrderHotelsTypes}>
          <label>Category</label>
          <hr />
          <Select options={options1} onChange={handlerCategory} />
        </div>
        <div className={style.filterOrderHotelsTypes}>
          <label>Rating</label>
          <hr />
          <Select options={options2} onChange={handlerRating} />
        </div>
        <div className={style.filterOrderHotelsButton}>
          <button onClick={handlerButton}>REGRESAR</button>
        </div>
      </div>
    </div>
  );
};

export default FilterOrderHotels;
