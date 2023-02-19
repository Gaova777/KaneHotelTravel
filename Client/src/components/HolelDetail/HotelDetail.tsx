import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index";
import { useEffect } from "react";
import Loader from "./Loader";
import styles from "./HotelDetail.module.css";

export default function  Detail(props)  {
	console.log(props);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDetail(props.match.params.id)); // eslint-disable-next-line
	}, []);
	const myPokemon = useSelector((state) => state.detail);
	console.log(myPokemon);
	const types = myPokemon.types;
	const principalType = types[0];
	const  pokeType =  principalType.name
	// console.log(styles.(pokeType));
	console.log(pokeType);
	// const typeForCSS = `${styles}.${pokeType}`
	// console.log(typeForCSS);
	return (
		<div className={styles[pokeType]}>
			<div>
				{
					// <h1>Hello</h1>
					myPokemon.name ? (
						<div className={styles.mainContainer}>
							<h1>Pokemon Stats & Details</h1>
							<div className={styles.detailsContainer}>
								<div className={styles.col}>
									<h1 className={styles.pokemonName}>
										<strong>{myPokemon.name}</strong>
									</h1>
									<img
										className={styles.pokemonImg}
										src={myPokemon.img}
										alt={myPokemon.name}
									/>
								</div>
								<div className={styles.col}>
									<div className={styles.pokemonDetails}>
										<p>
											<strong>Healt Point:</strong> {myPokemon.hp}
										</p>
										<p>
											<strong>Attack:</strong> {myPokemon.attack}
										</p>
										<p>
											<strong>Defense:</strong> {myPokemon.defense}
										</p>
										<p>
											<strong>Speed:</strong> {myPokemon.speed}
										</p>
										<p>
											<strong>Height:</strong> {myPokemon.height}
										</p>
										<p>
											<strong>Weight:</strong> {myPokemon.weight}
										</p>
										<p className={styles.types}>
											<strong>Types:</strong>
											{myPokemon.types.map((e) => e.name + " ")}
										</p>
									</div>
								</div>
							</div>
							<Link to="/home">
								<button className={styles.button}>Back to Pokedex</button>
							</Link>
						</div>
					) : (
						<Loader />
					)
				}
			</div>
		</div>
	);
}
