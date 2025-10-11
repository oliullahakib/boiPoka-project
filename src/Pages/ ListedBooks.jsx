import React, { use, useEffect, useState } from 'react';
import { getFromLs } from '../LDB/LDB';
import { BooksContext } from '../Context/BooksContext';
import BookCard from '../components/BookCard';
import ListedBooksCard from '../components/ListedBooksCard';
import { ChevronDown, MoveDown } from 'lucide-react';
import { NavLink } from 'react-router';

const ListedBooks = () => {
    const [readedBooks, setReadedBooks] = useState([])
    const [wishList, setWishList] = useState([])
    const [sort, setSort] = useState('')
    const booksData = use(BooksContext)
    useEffect(() => {
        const readBooksIdArry = getFromLs("readBooks")
        const myBooksList = booksData.filter(book => readBooksIdArry.includes(book.bookId))
        setReadedBooks(myBooksList)
        const wishListArry = getFromLs("wishList")
        const myWishList = booksData.filter(book => wishListArry.includes(book.bookId))
        setWishList(myWishList)
    }, [booksData])
    const handleSort =(type)=>{
        setSort(type)
        if(type==="rating"){
            const sortedByRating = [...readedBooks].sort((a,b)=>b.rating - a.rating)
            setReadedBooks(sortedByRating)
            setWishList(sortedByRating)
        }
        if(type==="pages"){
            const sortedByPages = [...readedBooks].sort((a,b)=>b.totalPages - a.totalPages)
            setReadedBooks(sortedByPages)
            setWishList(sortedByPages)
        }
        if(type==="years"){
            const sortByYears = [...readedBooks].sort((a,b)=>b.yearOfPublishing -a.yearOfPublishing)
            setReadedBooks(sortByYears)
            setWishList(sortByYears)
        }
    }
    return (
        <div className='w-11/12 mx-auto'>
             <title>Boi Poka - Listed Books</title>
            <div className='bg-gray-200 flex items-center justify-center py-8 text-3xl font-bold rounded-2xl'>
                <h1>Books</h1>
            </div>
            {/* dropdown */}
            <div className='flex justify-center mt-5'>
                <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn btn-success text-white m-1">Sort by: {sort?sort:""} <ChevronDown /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm cursor-pointer">
                    <li className={`${sort==="rating"?'bg-green-300 p-1':""}`} onClick={()=>handleSort("rating")}>Rating</li>
                    <li className={`${sort==="pages"?'bg-green-300 p-1':""}`} onClick={()=>handleSort("pages")}>Number of Pages</li>
                    <li className={`${sort==="years"?'bg-green-300 p-1':""}`} onClick={()=>handleSort("years")}>Publishing Year</li>
                </ul>
            </div>
            </div>
            {/* tab section */}
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift mt-10">
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