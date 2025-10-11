import React, { use, useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';
import { getFromLs } from '../LDB/LDB';
import { BooksContext } from '../Context/BooksContext';

const PagesToRead = () => {
    const [readedBooks, setReadedBooks] = useState([])
    const booksData = use(BooksContext)
    useEffect(() => {
        const readBooksIdArry = getFromLs("readBooks")
        const myBooksList = booksData.filter(book => readBooksIdArry.includes(book.bookId))
        setReadedBooks(myBooksList)
    }, [booksData])

    const colors = ['#0088FE', 'green', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className='bg-gray-200 w-11/12 mx-auto mt-3 rounded-sm'>
            <title>Boi Poka - Pages To Read</title>
            <BarChart width={500} height={600} data={readedBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={"bookName"} />
                <YAxis />
                <Bar 
                dataKey={"totalPages"}
                 shape={<TriangleBar />} 
                 label={{ position: 'top' }} 
                 fill="#8884d8"
                >
                    {readedBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;