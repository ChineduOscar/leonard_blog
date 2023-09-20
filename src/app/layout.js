import './globals.css';
import Layout from '@/layout/mainlayout';

export const metadata = {
<<<<<<< HEAD
  title: 'Ugwu Leonard',
  description: 'Get Great books, Buy books, Read books, Nice books',
=======
  title: 'Leonards blog',
  description: 'Get Great books, Buy books, Read books',
>>>>>>> c7079b11153fc50fbad4eb5a5ad93423a9f14185
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
