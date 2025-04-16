import "./global.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "KYRO",
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
          archivo.variable,
          "bg-background text-textPrim antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
