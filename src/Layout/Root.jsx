import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import { BooksContext } from '../Context/BooksContext';

const Root = () => {
    const booksData = useLoaderData()

    return (
        <BooksContext value={booksData}>
            <div>
                <Navbar />
                <Outlet />
            </div>
        </BooksContext>
    );
};

export default Root;