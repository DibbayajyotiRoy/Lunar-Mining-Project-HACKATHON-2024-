import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lunar Site",
  description: "Space Mining Site Prediction with Tensor Flow and NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-gradient-to-r from-purple-900 to-blue-900  text-white antialiased")}>
        {children}
      </body>
    </html>
  );
}
