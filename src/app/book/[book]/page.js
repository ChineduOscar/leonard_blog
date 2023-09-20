import Image from 'next/image';

const book = async ({ params }) => {
  const bookId = params.book - 1; //this is not the real id is just the index location of the particular book that was clicked
  const data = await fetch(
    'https://raw.githubusercontent.com/chineduoscar/LeonardBlogApi/main/webapi.json'
  );
  const response = await data.json();

  const res = response.books[bookId]; //this will give you the response.book[1]  or [2] or [3] depending on the book clicked
  return (
    <main>
      <div className='about_banner'>
        <div>
          <div className='page_name'>{res.title}</div>
        </div>
      </div>
      <div className='section2_book'>
        <div className='book_summary'>{res.overview}</div>
        <div>
          <img
            src={res.image}
            alt={res.title}
            className='section3_home_image'
          />
        </div>
      </div>
      <div className='section3_book'>
        <div className='intro_text'>Place your Order</div>
        <div className='small_text'>Ebook Format</div>
        <div className='array_of_btns'>
          {res.formats
            .filter((format) => format.type === 'ebook')
            .map((format) =>
              format.sites.map((site) => (
                <a key={site.name} href={site.link}>
                  <button className='buy'>{site.name}</button>
                </a>
              ))
            )}
        </div>
        <div className='small_text'>Hard Format</div>
        <div className='array_of_btns'>
          {res.formats
            .filter((format) => format.type === 'hardcopy')
            .map((format) =>
              format.sites.map((site) => (
                <a key={site.name} href={site.link}>
                  <button className='buy'>{site.name}</button>
                </a>
              ))
            )}
        </div>
      </div>
    </main>
  );
};

export default book;
