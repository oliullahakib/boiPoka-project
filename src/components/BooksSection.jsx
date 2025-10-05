import React, { use } from 'react';
import { BooksContext } from '../Context/BooksContext';
import BookCard from './BookCard';

const BooksSection = () => {
    const booksData = use(BooksContext)
    console.log(booksData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 w-11/12 mx-auto'>
            {
                booksData.map(book=><BookCard key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default BooksSection;