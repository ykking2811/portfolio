import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuantumBackground from "@/components/QuantumBackground";

export const metadata: Metadata = {
  title: "Yashodhan Kulkarni | Portfolio",
  description: "Portfolio of Yashodhan Kulkarni, Backend + Embedded Systems Developer",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-primary selection:text-on-primary min-h-screen flex flex-col relative z-0">
        <QuantumBackground />
        <Navbar />
        <div className="flex-grow pt-16 relative z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
