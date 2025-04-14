import "./global.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { GeistSans } from "geist/font/sans";

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
          GeistSans.className,
          "bg-background text-textPrim antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
