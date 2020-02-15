import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function EntryLogin() {

	const [ login, setLogin ] = useState({
		credentials: {
			username: "",
			password: ""
		}
	});

	const handleChange = e => {
		setLogin({
			credentials: {
				[e.target.name]: e.target.value
			}});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post("/login", this.state.credentials)
			.then(res => {
				localStorage.setItem("token", res.data.payload);
				props.history.push("/protected");
			})
			.catch(err => {
				localStorage.removeItem("token");
				console.log("invalid login: ", err);
			});
	};

	return (
		<form action="">

		</form>
	)
}