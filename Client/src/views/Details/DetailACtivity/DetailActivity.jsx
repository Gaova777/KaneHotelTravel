import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailActivity } from "../../../redux/actions";

const DetailActivity = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const detailActivity = useSelector((state) => state.detailActivity);

  useEffect(() => {
    dispatch(getDetailActivity(params.activity));
  }, []);
  return (
    <div>
      <div>
        <img src={detailActivity.image} alt="" />
      </div>
      <h4>{detailActivity.name}</h4>
      <h4>{detailActivity.category}</h4>
      <h4>{detailActivity.duration}</h4>
      <h4>{detailActivity.price}</h4>
      <h4>{detailActivity.description}</h4>
    </div>
  );
};

export default DetailActivity;
