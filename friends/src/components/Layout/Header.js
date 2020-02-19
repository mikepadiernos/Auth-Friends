import React, { useState } from "react";
// import { axiosWithAuth } from "../../utilities/axiosWithAuth";

const Header = () => {

	const [logged, setLogged] = useState(localStorage.getItem("token"));

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
						<li><a href="/" onClick={handleOnClick}>Logout</a></li>
					</>
				)}
				</ul>
			</nav>
		</header>
	)
};

export default Header;