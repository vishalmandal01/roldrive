import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/header";
import { WhatsappIcon } from "../../public/svg/whatsapp-icon";
import Footer from "./_components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rol Drive",
  description: "Created by Vishal",
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
        <div className="relative">
          <Header />
          {children}
          <div className="fixed bottom-10 right-[6vw] bg-white/10 backdrop-blur-md p-3 rounded-full">
            {" "}
            <WhatsappIcon className=" size-[30px]" />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
