import React, { useState, useContext, useEffect } from 'react';
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXT: FriendsContext
import FriendsContext from "../../contexts/FriendsContext";

// IMPORT APP COMPONENTS
import FriendsCard from "./FriendsCard";

export const FriendsList = () => {

	// const { friends, setFriends } = useContext(FriendsContext);

	const [friends, setFriends] = useState([]);

	console.log("Friends List: ", friends);

	useEffect(() => {
		axiosWithAuth()
			.get("/friends")
			.then(response => {
				console.log("API Is Here: ", response.data);
				setFriends(response.data);
			})
			.catch(error => {
				console.log("Error!", error);
			});
	}, []);

	return (
		<section>
			<div className="cards cards-friends">
				{friends.map(friend => (
					<FriendsCard
						{...friend}
						key={friend.id}
					/>
				))}
			</div>
			<span className="button-group">
				<a href="/friends/add" className="button">Add a friend</a>
			</span>
		</section>
	);

};

export default FriendsList;