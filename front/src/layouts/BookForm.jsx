import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getApi from "api/get";
import axios from "axios";
import React, { useMemo, useRef, useState } from "react";
import styles from "styles/forms.module.css";

const BookForm = ({ popupForm }) => {
	const nowDate = useMemo(e => new Date().toISOString().slice(0, 10), []);
	const queryClient = useQueryClient();
	const formRef = useRef();
	const getFormData = (e) =>
		Object.fromEntries(new FormData(formRef.current).entries());
	const getCurrentRoomData = (e) =>
		rooms?.find((room) => room.name === getFormData().typeRoom);
	const { data: user } = getApi({
		key: ["user"],
		path: "/users/" + localStorage.getItem("id"),
	});

	const booksKinds = useMemo(
		(e) => JSON.parse(import.meta.env.VITE_BOOKSKINDS),
		[]
	);
	const { data: rooms } = getApi({
		key: [booksKinds.rooms],
		path: booksKinds.rooms,
		onSuccess: date => setPrice(prev => prev <= 0 ? date?.[0].price : prev)
	});
	const [price, setPrice] = useState(0);

	function datediff(first, second) {
		return Math.round((second - first) / (1000 * 60 * 60 * 24));
	}

	const changeForm = (e) => {
		const formData = getFormData();
		const come = new Date(formData.comeDate);
		const out = new Date(formData.outDate);
		const days = datediff(come, out) + 1;

		setPrice(
			getCurrentRoomData()?.price *
			formData.countPeople *
			formData.countRooms *
			(days || 1)
		);
	};

	const { mutate } = useMutation({
		mutationFn: data => axios.post('/api/users/book', data),
		onSuccess: res => queryClient.invalidateQueries(['rooms'])
	});

	const submit = e => {
		e.preventDefault();

		mutate({ ...Object.fromEntries(new FormData(e.target).entries()), price });
	}

	return (
		<div ref={popupForm} className={styles.popUpForm}>
			<button
				onClick={(e) => (popupForm.current.style.display = "none")}
				className={styles.close}
			></button>

			<form ref={formRef} onChange={changeForm} onSubmit={submit}>
				<div>
					<h2>Данные клиента</h2>
					<label htmlFor="lastName">
						Фамилия:
						<input
							id="lastName"
							name="lastName"
							type="text"
							placeholder="Павлов"
							required
							defaultValue={user?.lastName || ""}
						/>
					</label>
					<label htmlFor="name">
						Имя:
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Вадим"
							required
							defaultValue={user?.name || ""}
						/>
					</label>
					<label htmlFor="fatherName">
						Отчество:
						<input
							id="fatherName"
							name="fatherName"
							type="text"
							placeholder="Владимирович"
							required
							defaultValue={user?.fatherName || ""}
						/>
					</label>
					<label htmlFor="number">
						Номер:
						<input
							id="number"
							name="number"
							type="tel"
							placeholder="+7 (900) 800-90-90"
							required
							defaultValue={user?.number || ""}
						/>
					</label>
				</div>
				<div>
					<select
						name="typeRoom"
						id="typeRoom"
						defaultValue={popupForm.current?.getAttribute("data-type")}
						onChange={(e) => {
							formRef.current.countRooms.value = 1;
							formRef.current.countPeople.value = 1;
						}}
					>
						<option>Классика</option>
						<option>Стандарт</option>
						<option>Люкс</option>
					</select>
					<label htmlFor="countPeople">
						Кол-во человек:
						<input
							id="countPeople"
							name="countPeople"
							type="number"
							required
							defaultValue={1}
						/>
					</label>
					<label htmlFor="countRooms">
						Кол-во номеров:
						<input
							id="countRooms"
							name="countRooms"
							type="number"
							required
							defaultValue={1}
							onChange={(e) => {
								const roomByType = getCurrentRoomData();

								if (
									+e.target.value + roomByType.bookedAmount >
									roomByType.amount
								)
									e.target.value = roomByType.amount;
							}}
							min={1}
						/>
					</label>

					<label htmlFor="comeDate">
						Дата приезда:
						<input id="comeDate" name="comeDate" type="date" defaultValue={nowDate} required />
					</label>
					<label htmlFor="outDate">
						Дата отъезда:
						<input id="outDate" name="outDate" type="date" defaultValue={nowDate} required />
					</label>
				</div>
				<div>
					<button>Забронировать</button>

					<span>{price} руб.</span>
				</div>
			</form>
		</div>
	);
};

export default BookForm;
