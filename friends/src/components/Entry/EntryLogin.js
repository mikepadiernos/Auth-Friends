import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import FriendsContext from "../../contexts/FriendsContext";

const EntryLogin = props => {

	const { logged, setLogged } = useContext(FriendsContext);

	let history = useHistory();

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
				setLogged(localStorage.getItem("token"));
				console.log("Really logged? ", logged);
				history.push("/friends");
			})
			.catch(error => {
				localStorage.removeItem("token");
				console.log("invalid login: ", error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
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