import React, { use, useEffect, useState } from 'react';
import { getFromLs } from '../LDB/LDB';
import { BooksContext } from '../Context/BooksContext';
import BookCard from '../components/BookCard';
import ListedBooksCard from '../components/ListedBooksCard';

const ListedBooks = () => {
    const [readedBooks, setReadedBooks] = useState([])
    const [wishList, setWishList] = useState([])
    const booksData = use(BooksContext)
    useEffect(() => {
        const readBooksIdArry = getFromLs("readBooks")
        const myBooksList = booksData.filter(book => readBooksIdArry.includes(book.bookId))
        setReadedBooks(myBooksList)
        const wishListArry = getFromLs("wishList")
        const myWishList = booksData.filter(book => wishListArry.includes(book.bookId))
        setWishList(myWishList)
    }, [booksData])
    console.log(readedBooks)
    return (
        <div className='w-11/12 mx-auto'>
            <div className='bg-gray-200 flex items-center justify-center py-8 text-3xl font-bold rounded-2xl'>
                <h1>Books</h1>
            </div>

            {/* tab section */}
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift mt-20">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        readedBooks.map(book => <ListedBooksCard key={book.bookId} book={book} />)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        wishList.map(book => <ListedBooksCard key={book.bookId} book={book} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;