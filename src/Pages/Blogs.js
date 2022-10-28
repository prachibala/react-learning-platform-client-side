import React, { memo } from "react";

const Blogs = memo(() => {
    return (
        <div className="flex flex-col items-center mt-7">
            <div className="w-4/6 first-line: mt-7">
                <div tabIndex={0} className="collapse group">
                    <div className="collapse-title bg-primary text-primary-content group-focus:bg-primary group-focus:text-primary-content">
                        what is cors?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-primary group-focus:text-primary-content">
                        <p>
                            1. Cross-origin resource sharing is a mechanism that
                            allows restricted resources on a web page to be
                            requested from another domain outside the domain
                            from which the first resource was served.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-4/6 first-line: mt-7">
                <div tabIndex={0} className="collapse group">
                    <div className="collapse-title bg-secondary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        2.Why are you using firebase? What other options do you
                        have to implement authentication?
                    </div>
                    <div className="collapse-content bg-secondary text-secondary-content group-focus:bg-secondary group-focus:text-secondary-content">
                        <p>
                            Firebase Authentication provides backend services,
                            easy-to-use SDKs, and ready-made UI libraries to
                            authenticate users to your app. It supports
                            authentication using passwords, phone numbers,
                            popular federated identity providers like Google,
                            Facebook and Twitter, and more.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-4/6 first-line: mt-7">
                <div tabIndex={0} className="collapse group">
                    <div className="collapse-title bg-accent text-primary-content group-focus:bg-accent group-focus:text-accent-content">
                        3. How does the private route work?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-accent group-focus:text-accent-content">
                        <p>
                            The react private route component renders child
                            components ( children ) if the user is logged in. If
                            not logged in the user is redirected to the /login
                            page with the return url passed in the location
                            state property.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-4/6 first-line: mt-7">
                <div tabIndex={0} className="collapse group">
                    <div className="collapse-title bg-info text-primary-content group-focus:bg-info group-focus:text-info-content">
                        4. What is Node? How does Node work?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content group-focus:bg-info group-focus:text-info-content">
                        <p>
                            Node allows developers to write JavaScript code that
                            runs directly in a computer process itself instead
                            of in a browser. Node can, therefore, be used to
                            write server-side applications with access to the
                            operating system, file system, and everything else
                            required to build fully-functional applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Blogs;
