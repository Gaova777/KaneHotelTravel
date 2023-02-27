import Button from "react-bootstrap/Button";
import style from "./DetailHotel.module.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getDetailHotel } from "../../../redux/actions";
import { Link } from "react-router-dom";




const DetailHotel = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation()
  const detailHotel = useSelector((state) => state.detailHotel);
  console.log(detailHotel, "detail hotel")

  useEffect(() => {
    dispatch(getDetailHotel(params.hotel));
  }, []);

  return (
    <div>
      <div>
        <img src={detailHotel.image} alt="" />
      </div>
      <h4>{detailHotel.name}</h4>
      <h4>{detailHotel.category}</h4>
      <h4>{detailHotel.rating}</h4>
      <h4>{detailHotel.services}</h4>
      <h4>{detailHotel.description}</h4>
      <div>
        <Link
          to="/detail/booking"
          state={{
            name: detailHotel.name,
            image: detailHotel.image,
            rooms: detailHotel.rooms,
          }}
        >
          <Button className={style.buttonBooking} variant="primary" type="submit">
            Booking
          </Button> 
        </Link>
      </div>
    </div>
  );
};

export default DetailHotel;
