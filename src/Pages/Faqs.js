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
                                Who can do this course?
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                This course is for those who want to be in the
                                computer science job field!Fuga labore omnis
                                minima, quisquam delectus culpa!
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary">
                                What prior experience do I need to have before
                                starting this course?.
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                Since we are learning from scratch, you don't
                                need to know anything before, but if you have
                                time, you can do three things.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary">
                                How long will it take to complete this course?
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                If you watch videos daily for 1 to 1.5 hours
                                with extra 4 to 6 hours of practice then your
                                mother will take about five months.!
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary">
                                Why is this course not free?
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                This course is not just a video watching course
                                because behind this course there are 30
                                professional developers, you will see the
                                garment and give SMS plus feedback.!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </h2>
    );
});

export default Faqs;
