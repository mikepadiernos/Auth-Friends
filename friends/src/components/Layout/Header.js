import React, {useContext, useState} from "react";
import FriendsContext from "../../contexts/FriendsContext";

const Header = () => {

	// const [logged, setLogged] = useState(localStorage.getItem("token"));
	const { logged, setLogged } = useContext(FriendsContext);
	console.log("Logged?: ", logged);


	const handleOnClick = () => {
		return localStorage.removeItem("token");
	};

	return (
		<header id="header" className="header">
			<div id="branding" className="branding">
				<h1>Friends!</h1>
			</div>
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
				{!logged ? (
					<>
						<li><a href="/login">Login</a></li>
					</>
				) : (
					<>
						<li><a href="/friends">List</a></li>
						<li><a href="/login" onClick={handleOnClick}>Logout</a></li>
					</>
				)}
				</ul>
			</nav>
		</header>
	)
};

export default Header;