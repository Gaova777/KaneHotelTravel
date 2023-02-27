import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { getActivities, getHotels } from "../../../redux/actions";

const OrderPriceActivities = () => {
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
    dispatch(getActivities(params.city, "", event.value));
  };

  return (
    <div>
      <label>Price</label>
      <Select options={options} onChange={handlerCategoryFilter} />
    </div>
  );
};

export default OrderPriceActivities;
