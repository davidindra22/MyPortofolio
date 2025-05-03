/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "./component/Navbar";

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "Created By Davied Indra Rachman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+NG+Modern&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
