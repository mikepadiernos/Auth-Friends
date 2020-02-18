import React from "react";

const FriendsCard = props => {

	return (
		<article className="card card-friend">
			<h3>Name: {props.name}</h3>
			<h4>Age: {props.age}</h4>
			<h5>Email: {props.email}</h5>
		</article>
	)
};

export default FriendsCard;