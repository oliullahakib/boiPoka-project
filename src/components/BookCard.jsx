import { Star } from 'lucide-react';
import React from 'react';

const BookCard = ({ book }) => {
    const { author, bookName, category, image, rating, tags } = book
    return (
        <div className="card bg-base-100 shadow-sm p-5">
            <figure className='bg-gray-200 h-96 py-5 rounded-xl'>
                <img
                    className='w-40 '
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
            <div className='text-green-500 space-x-3 mb-4'>
                {
                    tags.map((tag,i)=><span key={i} className='bg-green-100 rounded-2xl py-2 px-4'>{tag}</span>)
                }
            </div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-between border-t-1 border-dashed border-gray-300 pt-5">
                    <div className="badge ">{category}</div>
                    <div className="badge ">{rating} <Star className='w-4' /></div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;