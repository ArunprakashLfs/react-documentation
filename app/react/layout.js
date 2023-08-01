
import Navbar from '@/components/Home/Navbar';
import '../globals.css';
export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
  }

const ClientLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link
          rel='shortcut icon'
          href='/assets/images/favicon.jpeg'
          type='image/x-icon'
        />
      </head>
      <body className='flex flex-row'>

        <div className='flex flex-col w-full'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
};

export default ClientLayout;
