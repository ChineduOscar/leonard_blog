import './globals.css';
import Layout from '@/layout/mainlayout';

export const metadata = {
  title: 'Ugwu Leonard',
  description: 'Get Great books, Buy books, Read books, Nice books',
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
