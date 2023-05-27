import React from 'react';
import Books from './Books';

const BooksMain = async () => {
  const data = await fetch(
    'https://raw.githubusercontent.com/chineduoscar/LeonardBlogApi/main/webapi.json'
  );
  const res = await data.json();

  return (
    <>
      <div className='about_banner'>
        <div>
          <div className='page_name'>All Books</div>
        </div>
      </div>
      <div className='section2_books'>
        <div className='intro_about'>All Books Written by Ugwu Leonard</div>
        <div className='books_display'>
          {res.books?.map((book) => (
            <Books
              key={book.id}
              id={book.id}
              title={book.title}
              image={book.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksMain;
