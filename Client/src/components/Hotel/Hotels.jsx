import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHotels } from "../../redux/actions";
import FilterOrderHotels from "../FiltersOrders/Hotels/FilterOrderHotels";
import Paged from "../Paged/Paged";
import HotelContainer from "./HotelContainer/HotelContainer";
import style from "./Hotels.module.css";

const Hotels = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const hotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getHotels(params.city));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsInPage, setHotelsInPage] = useState(6);
  const indexLastHotel = currentPage * hotelsInPage;
  const indexFirstHotel = indexLastHotel - hotelsInPage;
  const currentHotel = hotels.hotels?.slice(indexFirstHotel, indexLastHotel);

  const paged = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <FilterOrderHotels />

      <HotelContainer hotels={currentHotel} />
      <div className={style.activitiesPaged}>
        <Paged
          itemsInPage={hotelsInPage}
          allItems={hotels.hotels}
          paginado={paged}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Hotels;
