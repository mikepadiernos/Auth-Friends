import React from "react";

const FriendsCard = props => {

	return (
		<article className="card card-friend">
			<div className="card-header">
				<h3 className="card-title">{props.name}</h3>
			</div>
			<div className="card-body">
				<div className="card-text"><span>Age </span>{props.age}</div>
				<div className="card-text"><span>Email </span>{props.email}</div>
			</div>
		</article>
	)
};

export default FriendsCard;