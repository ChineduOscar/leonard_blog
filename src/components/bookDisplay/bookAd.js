import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BookAd = async () => {
<<<<<<< HEAD
  const truncate = (input) => {
    if (input.length > 150) {
      return input.substring(0, 150) + '...';
    }
    return input;
  };

=======
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
  const data = await fetch(
    'https://raw.githubusercontent.com/chineduoscar/LeonardBlogApi/main/webapi.json'
  );
  console.log(data);
  const res = await data.json();
  console.log(res);
<<<<<<< HEAD
  const allBooks = res.books;
  return (
    <>
      <div className='text'>My Books</div>
      <div className='advert_section'>
        {allBooks.map((book) => (
          <div key={book.id} className='ad'>
            <Link href={`/book/${book.id}`}>
              <div className='advert_image_container'>
                <img
                  src={book.image}
                  alt={book.title}
                  className='section3_home_image'
                />
              </div>
            </Link>
            <div className='ad_books'>{book.title}</div>
            <div className='book_overview'>{truncate(book.overview)}</div>
=======
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
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
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
