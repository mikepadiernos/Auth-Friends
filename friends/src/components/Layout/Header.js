import React, { useState } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

const Header = () => {

	const [logged, setLogged] = useState(localStorage.getItem("token"));

	return (
		<header id="header" className="header">
			<div id="branding" className="branding">
				<h1>Friends!</h1>
			</div>
			<nav>
				{!logged ? (
					<ul>
						<li><a href="/login">Login</a></li>
					</ul>
				) : (
					<ul>
						<li><a href="/friends">List</a></li>
						<li><a href="/">Logout</a></li>
					</ul>
				)}
			</nav>
		</header>
	)
};

export default Header;