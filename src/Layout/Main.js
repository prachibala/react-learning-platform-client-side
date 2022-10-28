import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Header/Nav";

const Main = () => {
	return (
		<div>
			<Nav></Nav>
			<div style={{ minHeight: "85vh" }}>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Main;
