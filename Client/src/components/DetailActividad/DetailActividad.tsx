import React, { useEffect } from "react";
import styles from "./DetailActividad.module.css";
import { getActivityDetail } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";

export function DetailActividad() {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const state: any = useAppSelector((state) => state.detailActivity);

	useEffect(() => {
		dispatch(getActivityDetail(params.id) as any);
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<button onClick={() => navigate(-1)}>Volver</button>
			<h1>{state.name}</h1>
			<img src={state.image} alt={state.name} className={styles.image} />
			<p>{state.price}</p>
			<p>{state.duration}</p>
			<p>{state.description}</p>
		</div>
	);
}
