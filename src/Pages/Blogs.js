import React, { memo } from "react";

const Blogs = memo(() => {
    return (
        <div className="flex flex-col items-center mt-7">
            <div className="w-4/6 first-line: mt-7">
                <div tabIndex={0} className="collapse group">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-primary group-focus:text-primary-content">
                        Focus me to see content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-primary group-focus:text-primary-content">
                        <p>
                            tabIndex={0} attribute is necessary to make the div
                            focusable
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-4/6 first-line: mt-7">
                <div tabIndex={0} className="collapse group">
                    <div className="collapse-title bg-secondary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        Focus me to see content
                    </div>
                    <div className="collapse-content bg-secondary text-secondary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>
                            tabIndex={0} attribute is necessary to make the div
                            focusable
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-4/6 first-line: mt-7">
                <div tabIndex={0} className="collapse group">
                    <div className="collapse-title bg-accent text-primary-content group-focus:bg-accent group-focus:text-accent-content">
                        Focus me to see content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-accent group-focus:text-accent-content">
                        <p>
                            tabIndex={0} attribute is necessary to make the div
                            focusable
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-4/6 first-line: mt-7">
                <div tabIndex={0} className="collapse group">
                    <div className="collapse-title bg-info text-primary-content group-focus:bg-info group-focus:text-info-content">
                        Focus me to see content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-info group-focus:text-info-content">
                        <p>
                            tabIndex={0} attribute is necessary to make the div
                            focusable
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Blogs;
