import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import { BooksContext } from '../Context/BooksContext';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const booksData = useLoaderData()

    return (
        <BooksContext value={booksData}>
            <div>
                <Navbar />
                <Outlet />
            <ToastContainer/>
            </div>
        </BooksContext>
    );
};

export default Root;