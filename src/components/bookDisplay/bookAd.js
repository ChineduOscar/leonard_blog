import React from 'react';
import Link from 'next/link';

const BookAd = async () => {
  const data = await fetch(
    'https://raw.githubusercontent.com/chineduoscar/LeonardBlogApi/main/webapi.json'
  );
  console.log(data);
  const res = await data.json();
  console.log(res);
  const firstTwoBooks = res.books.slice(0, 2);
  return (
    <>
      <div className='text'>My books</div>
      <div className='advert_section'>
        {firstTwoBooks.map((book) => (
          <div key={book.id} className='ad'>
            <Link href={`/book/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                className='section3_home_image'
              />
            </Link>
            <div className='ad_books'>{book.title}</div>
            <Link href={`/book/${book.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookAd;
