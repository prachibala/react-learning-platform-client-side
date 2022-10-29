import React, { memo } from "react";

const Faqs = memo(() => {
    return (
        <h2>
            <section className="base-200 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-secondary">
                        How it works
                    </p>
                    <h2 className="mb-12 text-primary text-4xl font-bold leading-none text-center sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold text-secondary">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ratione, fugit? Aspernatur,
                                ullam enim, odit eaque quia rerum ipsum
                                voluptatem consequatur ratione, doloremque
                                debitis? Fuga labore omnis minima, quisquam
                                delectus culpa!
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ratione, fugit? Aspernatur,
                                ullam enim, odit eaque quia rerum ipsum
                                voluptatem consequatur ratione, doloremque
                                debitis? Fuga labore omnis minima, quisquam
                                delectus culpa!
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ratione, fugit? Aspernatur,
                                ullam enim, odit eaque quia rerum ipsum
                                voluptatem consequatur ratione, doloremque
                                debitis? Fuga labore omnis minima, quisquam
                                delectus culpa!
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ratione, fugit? Aspernatur,
                                ullam enim, odit eaque quia rerum ipsum
                                voluptatem consequatur ratione, doloremque
                                debitis? Fuga labore omnis minima, quisquam
                                delectus culpa!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </h2>
    );
});

export default Faqs;
