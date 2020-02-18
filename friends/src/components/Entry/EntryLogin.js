import React, { useState } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

const EntryLogin = props => {

	const [ login, setLogin ] = useState({
		username: "",
		password: ""
	});

	const handleChange = e => {
		setLogin({
			...login,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post("/login", login)
			.then(response => {
				localStorage.setItem("token", response.data.payload);
				setLogin(login);
				// props.history.push("/friends");
			})
			.catch(error => {
				localStorage.removeItem("token");
				console.log("invalid login: ", error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Username:</label>
				<input
					name="username"
					type="text"
					onChange={handleChange}
					value={login.username}
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					name="password"
					type="text"
					onChange={handleChange}
					value={login.password}
				/>
			</div>
			<button type="submit">SUBMIT</button>
		</form>
	)
};

export default EntryLogin;