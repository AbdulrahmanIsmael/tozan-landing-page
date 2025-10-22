import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";
import Header from "@/app/layouts/Header";
import Footer from "@/app/layouts/Footer";

export const metadata: Metadata = {
  title: "Tozan",
  description:
    "Our mission is to create a community that inspires, informs, and empowers its members.",
  authors: {
    name: "Abdulrahman Ismael",
    url: "https://www.linkedin.com/in/abdulrahmanismael",
  },
  creator: "Abdulrahman Ismael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased px-8 py-4 overflow-x-hidden`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
