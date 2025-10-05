import React, { use } from 'react';
import { useParams } from 'react-router';
import { BooksContext } from '../Context/BooksContext';

const BookDetails = () => {
    const booksData = use(BooksContext)
    const { id } = useParams()
    const idNum = Number(id)
    const singleBook = booksData.find(book => book.bookId === idNum)
    const { author, bookName, category, image, rating, tags, bookId, review,totalPages,yearOfPublishing,publisher } = singleBook
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p>By:{author}</p>
                    <p className='border-t-1 border-b-1 border-gray-300 py-3 mt-3'>{category}</p>
                    <p className="py-6">
                        <span className='font-bold'>Review:</span> {review}
                    </p>
                    <div className='text-green-500 space-x-3 mb-4'>
                        <span className='text-black font-bold'>Tag</span>
                        {
                            tags.map((tag, i) => <span key={i} className='bg-green-100 rounded-2xl py-2 px-4'>#{tag}</span>)
                        }
                    </div>
                    <div className='flex justify-between w-1/4'>
                        <div className='text-gray-400'>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div>
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;