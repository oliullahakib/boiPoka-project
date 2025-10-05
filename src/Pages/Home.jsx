import React from 'react';
import heroImg from "../assets/books.jpg"
const Home = () => {
    return (
        <div className="hero bg-gray-200  w-11/12 mx-auto rounded-2xl py-8 md:py-20 mt-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={heroImg}
                    className=" md:max-w-lg rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-12"> Books to freshen up your bookshelf</h1>
                    <button className="btn btn-success text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;