import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <title>Samin Tejas</title>
        <meta name="description" content="Welcome to my portfolio website. Here you can find my projects and contact information." />
        <meta name="keywords" content="portfolio, projects, contact" />
        <meta name="author" content="Samin Tejas" />
        <meta property="og:title" content="Samin Tejas" />
        <meta property="og:description" content="Welcome to my portfolio website. Here you can find my projects and contact information." />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
