import React, { useEffect } from "react";
import styles from "./DetailHotel.module.css";
import { getHotelDetail } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

export function DetailHotel() {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const state: any = useAppSelector((state) => state.detailHotel);
	const room:any = state.rooms[0]
	console.log(room);
	useEffect(() => {
		dispatch(getHotelDetail(params.id) as any);
	}, []);

	console.log(state);
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<button className={styles.button} onClick={() => navigate(-1)}>
					Volver
				</button>
			</div>
			<div className={styles.container}>
				<div>
				<img src={state.image} alt={state.name} className={styles.image} />
					<h1>{state.name}</h1>
					<p>
						<strong>Categoria: </strong>
						{state.category}
					</p>
					<p>
						<strong>Rating: </strong>
						{state.rating}
					</p>
					<p className={styles.description}>
						<strong>Descrpción: </strong>
						{state.description
							? state.description
							: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
					</p>
					<p>{state.services}</p>
					<hr />
					<h4>Habitación</h4>
					<img src={room.image} alt={room.name} className={styles.image} />
					<h3>{room.name}</h3>
					<h5><strong>Precio por noche: USD$154 </strong></h5>
				</div>
			</div>
			<div className={styles.container}>
				<a target="_blank" href="https://buy.stripe.com/3cs00YfWOejgcAo003">
					<button className={styles.button}>Pagar reservación</button>
				</a>
			</div>
		</div>
	);
}
