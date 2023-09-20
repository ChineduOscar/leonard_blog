import Link from 'next/link';
import Image from 'next/image';

const Books = ({ id, title, image }) => {
  return (
    <main>
      <div className='ad'>
        <Link href={`/book/${id}`}>
          <img src={image} alt={title} className='section3_home_image' />
        </Link>
        <div className='ad_books'>{title}</div>
        <Link href={`/book/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </main>
  );
};

export default Books;
// <Link href={`/${id}`}></Link>
