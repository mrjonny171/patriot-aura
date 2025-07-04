import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patriot Aura - The Eagle Has Landed",
  description: "Freedom, Honor, and Gains - The most patriotic memecoin soaring to new heights",
  keywords: ["memecoin", "crypto", "patriot", "eagle", "freedom", "blockchain"],
  icons: {
    icon: '/patriot-eagle.png',
    shortcut: '/patriot-eagle.png',
    apple: '/patriot-eagle.png',
  },
  openGraph: {
    title: "Patriot Aura - The Eagle Has Landed",
    description: "Freedom, Honor, and Gains - The most patriotic memecoin soaring to new heights",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patriot Aura - The Eagle Has Landed",
    description: "Freedom, Honor, and Gains - The most patriotic memecoin soaring to new heights",
  },
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
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
