import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHotelDetail } from "../../redux/actions/index";
import { useEffect } from "react";
// import Loader from "./Loader";
import styles from "./HotelDetail.module.css";

export  function  HotelDetail(props:any)  {
	console.log(props);
	const dispatch:any = useDispatch();

	useEffect(() => {
		dispatch(HotelDetail(props.match.params.id)); // eslint-disable-next-line
	}, []);
	const myHotel = useSelector((state:any) => state.detail);
	console.log(myHotel);

	return (
		<div className={styles.maincontainer}>
			<div>
				{
					<h1>{myHotel}</h1>
					// myHotel.name ? (
				// 		<div className={styles.mainContainer}>
				// 			<h1>Pokemon Stats & Details</h1>
				// 			<div className={styles.detailsContainer}>
				// 				<div className={styles.col}>
				// 					<h1 className={styles.pokemonName}>
				// 						<strong>{myHotel.name}</strong>
				// 					</h1>
				// 					<img
				// 						className={styles.pokemonImg}
				// 						src={myHotel.img}
				// 						alt={myHotel.name}
				// 					/>
				// 				</div>
				// 				<div className={styles.col}>
				// 					<div className={styles.pokemonDetails}>
				// 						<p>
				// 							<strong>Healt Point:</strong> {myHotel.hp}
				// 						</p>
				// 						<p>
				// 							<strong>Attack:</strong> {myHotel.attack}
				// 						</p>
				// 						<p>
				// 							<strong>Defense:</strong> {myHotel.defense}
				// 						</p>
				// 						<p>
				// 							<strong>Speed:</strong> {myHotel.speed}
				// 						</p>
				// 						<p>
				// 							<strong>Height:</strong> {myHotel.height}
				// 						</p>
				// 						<p>
				// 							<strong>Weight:</strong> {myHotel.weight}
				// 						</p>
				// 						<p className={styles.types}>
				// 							<strong>Types:</strong>
				// 							{myHotel.types.map((e) => e.name + " ")}
				// 						</p>
				// 					</div>
				// 				</div>
				// 			</div>
				// 			<Link to="/home">
				// 				<button className={styles.button}>Back to Pokedex</button>
				// 			</Link>
				// 		</div>
				// 	) : (
				// 		<Loader />
				// 	)
				}
			</div>
		</div>
	);
}
