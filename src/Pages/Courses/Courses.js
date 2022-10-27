import React from "react";
import "./Courses.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Courses = () => {
    return (
        <div className="courses">
            <div className="leftSide">
                <LeftSide></LeftSide>
            </div>
            <div className="rightSide">
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default Courses;
