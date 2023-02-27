import styles from "./CityCard.module.css";
import iconHeart from "../../../images/Icon-Heart.png";

const CityCard = (props) => {
  return (
    <div className={styles.cardCityContainer}>
      <div className={styles.cardCityImage}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.cardCityInfo}>
        <h2 className={styles.cardCityName}>{props.name}</h2>

        <div className={styles.cardCityPopularity}>
          <img src={iconHeart} />
          <p>{props.popularity}</p>
        </div>
        <button to="/" className={styles.cardCityButton}>
          Saber mas
        </button>
      </div>
    </div>
  );
};

export default CityCard;
