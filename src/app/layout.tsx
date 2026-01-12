import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Raleway,
  Open_Sans,
} from "next/font/google";
import "./globals.css";
import "./style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin Sharma | Portfolio",
  keywords: [
    "Sachin Sharma",
    "Portfolio",
    "Accountant",
    "GST Consultant",
    "Income Tax Consultant",
    "sachinsharma.com",
  ],
  description:
    "I am an experienced Accountant with over 2 years of hands-on expertise in GST filing, account maintenance, and income tax return preparation. Having worked with reputed CA firms, I prioritize accuracy, compliance, and timely reporting in all my work. Explore my profile to learn more about my professional journey and skills.",

  authors: [{ name: "Sachin Sharma", url: "https://sachinsharma.com" }],
  creator: "Sachin Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${raleway.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
