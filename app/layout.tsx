import type { Metadata } from "next";
import {  Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600","700", "800", '900']
})


export const metadata: Metadata = {
  title: "Лікар невропатолог - Густілстий Артур Анатолійович",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${mulish.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
