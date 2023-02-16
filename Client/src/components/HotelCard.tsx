import React from "react";
import { Link } from "react-router-dom";
import styles from "./CSS/Card.module.css";

export default function Card(props:{id:any, }) {
	return (
		<div className={styles.hotelCard} key={props.id}>
			<Link to={`/pokemons/${props.id}`}>
				<img className={styles.hotelImage} src={img} alt="not found" />
			</Link>
			<p>{id}</p>
			<h5>{types.map((e) => e.name + " ")}</h5>
			<h3 className={styles.name}>{name}</h3>
		</div>
	);
}
