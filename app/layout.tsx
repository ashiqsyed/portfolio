import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Fjalla_One, Saira} from "next/font/google";

import './globals.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400"
});
const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: "400"
})
const saira = Saira({
  subsets: ['latin'],
  weight: '400'
})
export const metadata: Metadata = {
  title: "Ashiq Syed",
  description: "Personal website showcasing my skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
