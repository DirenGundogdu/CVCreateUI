import type { Metadata } from "next";
import { ReactNode } from "react";
import {NextIntlClientProvider} from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import '../lib/fontawesome';

interface RootLayoutProps {
    children: ReactNode;
    params: { locale: string };
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CVCreate",
  description: "CVCreate",
};


export default function RootLayout({ children, params }: Readonly<RootLayoutProps>) {
    return (
        <html lang={params.locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={params.locale}>
      <nav className="bg-white border-gray-200 dark:bg-[#405D72]">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Image
                      src="/logo.png"
                      alt="CVCREATE Logo"
                      width={50}
                      height={50}
                      priority
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CVCREATE</span>
              </div>
              <button data-collapse-toggle="navbar-default" type="button"
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">

                      <li>
                          <Link href={"/auth"} className="block py-2 px-3 text-white font-extrabold">
                              <FontAwesomeIcon icon={faUserTie} />
                          </Link>
                      </li>
                     {/* <li>
                          <a href="#"
                             className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                      </li>*/}

                  </ul>
              </div>
          </div>
      </nav>
      {children}
      </NextIntlClientProvider>
      </body>
      </html>
  );
}
