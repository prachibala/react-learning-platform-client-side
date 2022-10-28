import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Courses.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Courses = () => {
	const [params] = useSearchParams();

	return (
		<div className="courses">
			<div>
				<h3 className="text-center my-10 text-3xl">Categories</h3>
				<LeftSide></LeftSide>
			</div>
			<div>
				<h3 className="text-center my-10 text-3xl">Courses</h3>
				<RightSide catId={params.getAll("category")[0]}></RightSide>
			</div>
		</div>
	);
};

export default Courses;
