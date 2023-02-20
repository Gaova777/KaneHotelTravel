import React, { useEffect } from "react";
import styles from "./DetailHotel.module.css";
import { getHotelDetail } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";

export function DetailHotel() {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const state: any = useAppSelector((state) => state.detailHotel);

	useEffect(() => {
		dispatch(getHotelDetail(params.id) as any);
	}, []);

	console.log(state);
	return (
		<div className={styles.mainContainer}>
			
			<div className={styles.container}>
				<button onClick={() => navigate(-1)}>Volver</button>
				<div>
					<img src={state.image} alt={state.name} className={styles.image} />
					<h1>{state.name}</h1>
					<p>{state.category}</p>
					<p>{state.rating}</p>
					<p>{state.description}</p>
					<p>{state.services}</p>
				</div>
			</div>

		</div>
	);
}
