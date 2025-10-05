import React from 'react';

const ListedBooks = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='bg-gray-200 flex items-center justify-center py-8 text-3xl font-bold rounded-2xl'>
                <h1>Books</h1>
            </div>

            {/* tab section */}
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift mt-20">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Listed Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

            </div>
        </div>
    );
};

export default ListedBooks;