import React from "react";

const Header = () => {
	return (
		<header id="header" className="header">
			<div id="branding" className="branding">
				<h1>Friends!</h1>
			</div>
			<nav>
				<ul>
					<li>
						<a href="/">Login</a>
					</li>
					{/*<li>*/}
					{/*	<a href="/logout">Logout</a>*/}
					{/*</li>*/}
					<li>
						<a href="/friends">List</a>
					</li>
				</ul>
			</nav>
		</header>
	)
};

export default Header;