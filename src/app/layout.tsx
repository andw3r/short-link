import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ShortLink - Short links, long impact. Transform cluttered URLs into clean, shareable links.",
  description: "Short links, long impact. Transform cluttered URLs into clean, shareable links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
