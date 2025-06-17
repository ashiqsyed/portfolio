import type { Metadata } from "next";
import { Geist, Geist_Mono,  Saira} from "next/font/google";

import './globals.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BackgroundBeams } from "@/components/aceternity-ui/background-beams";
import { AuroraBackground } from "@/components/ui/aurora-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
    <html lang="en" >
      <body
        className={`${saira.className} ${geistSans.variable} ${geistMono.variable} bg-gray-900 antialiased h-full`}
      >
        
        
          <Navbar />
          {children}
          <Footer />
          <div className="fixed inset-0 -z-10 w-screen h-screen">
            <BackgroundBeams />
          </div>
      </body>
    
    </html>
  );
}
