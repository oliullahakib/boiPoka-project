import { MapPin, StickyNote, Users } from 'lucide-react';
import React from 'react';

const ListedBooksCard = ({book}) => {
    const  { author, bookName, category, image, rating, tags, bookId,yearOfPublishing,publisher,totalPages }=book
    return (
        <div className='flex mt-5 gap-3 border border-gray-200 rounded-xl p-3'>
            <figure className='bg-gray-200 p-5 rounded-xl'>
                <img className='w-20 ' src={image} alt={bookName} />
            </figure>
            <div className='space-y-3'>
                <h3 className='text-2xl font-bold'>{bookName} </h3>
                <p>By:{author}</p>
                <div className='flex' >
                   <span>
                    <span className='font-bold'>Tag</span>
                    {
                        tags.map((tag, i) => <span key={i} className='bg-green-100 rounded-2xl py-2 px-4 m-2 text-green-500'>#{tag}</span>)
                    }
                   </span>
                    <span className='flex'><MapPin /> Year of Publishing: {yearOfPublishing}</span>
                </div>
                <p className='text-gray-400 flex gap-3'>
                    <span className='flex gap-2'>Publisher: <Users /> {publisher}</span>
                    <span className='flex gap-2'> <StickyNote /> Page {totalPages}</span>
                </p>
                <div className='flex gap-2 border-t-1 border-gray-200 pt-4 '>
                    <button className='btn bg-blue-200 text-blue-500 rounded-2xl'>Category: {category}</button>
                    <button className='btn bg-amber-200 text-amber-500 rounded-2xl'>Category: {rating}</button>
                    <button className='btn bg-green-600 text-white rounded-2xl'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;