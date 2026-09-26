import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GAUREX | Technology Built Around Problems",
  description: "GAUREX transforms complex business problems into simple, scalable digital systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth cursor-none md:cursor-auto">
      <body className={`${inter.variable} font-sans antialiased bg-white text-black`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
