import type { Metadata } from 'next';
import '@/app/ui/globals.css';
import { inter } from './ui/fonts';
import Header from './layouts/Header';

export const metadata: Metadata = {
  title: 'Tozan',
  description:
    'Our mission is to create a community that inspires, informs, and empowers its members.',
  authors: {
    name: 'Abdulrahman Ismael',
    url: 'https://www.linkedin.com/in/abdulrahmanismael',
  },
  creator: 'Abdulrahman Ismael',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased px-7`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
