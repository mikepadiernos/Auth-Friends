import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../../utilities/axiosWithAuth";

const FriendsAdd = props => {

	let history = useHistory();

	const [data, setData] = useState({
		name: "",
		age: "",
		email: "",
		// id: Date.now(),
	});

	const handleChanges = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const add = e => {
		e.preventDefault();
		setData({ ...data });
		axiosWithAuth()
			.post("friends", data)
			.then(res => {
				console.log("API INFO HERE", res);
				setData(data);
				history.push("/friends");
			})
			.catch(error => {
				console.log("None for You", error);
			});
	};


	return (
		<form onSubmit={add} className="forms">
			<div>
				<h2>Add A Friend</h2>
				<label>Name:</label>
				<input className="input" type="text" placeholder="Name" name="name" onChange={handleChanges} />
				<label>Age:</label>
				<input className="input" type="text" placeholder="Age" name="age" onChange={handleChanges} />
				<label>Email:</label>
				<input className="input" type="Email" placeholder="Email" name="email" onChange={handleChanges} />
				<button>
					Add Friend
				</button>
			</div>
		</form>
	);
};

export default FriendsAdd;