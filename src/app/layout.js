'use client';
import { Inter } from "next/font/google";
import Loading from "./loading";
import { Suspense, useState, useEffect } from 'react';
// import ShopProvider from '../../context/shopContext';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        {/* <ShopProvider> */}
          <Suspense fallback={<Loading />}>
          {children}
          </Suspense>
        {/* </ShopProvider> */}
      </body>
    </html>
  );
}
