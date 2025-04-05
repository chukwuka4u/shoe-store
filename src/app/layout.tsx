import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CartContextProvider from "@/lib/providers/cart-provider";
import Footer from "@/components/Footer";
import MainHeader from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steeze",
  description: "Foot Wear Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartContextProvider>
          <main className="overflow-hidden px-4 pt-6 pb-2.5 mx-auto w-full bg-stone-200 max-md:max-w-[480px]">
            <MainHeader />
            {children}
            <Footer />
            <div className="flex absolute z-0 gap-2 items-start self-start min-h-1.5 right-[155px] top-[253px]" />
          </main>
        </CartContextProvider>
      </body>
    </html>
  );
}
