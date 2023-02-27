import { Link, useParams } from "react-router-dom";
import ActivityCard from "../ActivityCard/ActivityCard";
import style from "./ActivityContainer.module.css";

const ActivityContainer = (props) => {
  const params = useParams();

  const city = params.city;
  // console.log(city);

  const activities = props.activities;

  return (
    <div className={style.activityContainer}>
      <h1>Activities</h1>
      <div className={style.activityContainerCards}>
        {activities?.length ? (
          activities.map((c) => {
            return (
              <div key={c.id} className={style.activityContainer}>
                <Link to={`/${city}/activity/${c.name}`}>
                  <ActivityCard
                    id={c.id}
                    name={c.name}
                    image={c.image}
                    category={c.category}
                    price={c.price}
                    description={c.description}
                    duration={c.duration}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <h4>No se encontraron Actividades</h4>
        )}
      </div>
    </div>
  );
};

export default ActivityContainer;
