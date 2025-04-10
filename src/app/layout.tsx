import "./global.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexus",
  description: "Connecting you to the pulse of the crypto market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={twMerge(
          inter.variable,
          "bg-background text-textPrim antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
