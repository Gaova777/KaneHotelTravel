import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { getActivities, getHotels } from "../../../redux/actions";

const OrderRatingHotels = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const options = [
    { label: "ASC", value: "ASC" },
    {
      label: "DESC",
      value: "DESC",
    },
  ];

  const handlerCategoryFilter = (event) => {
    dispatch(getHotels(params.city, "", event.value));
  };

  return (
    <div>
      <label>Price</label>
      <Select options={options} onChange={handlerCategoryFilter} />
    </div>
  );
};

export default OrderRatingHotels;
