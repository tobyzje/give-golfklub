import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner'
import RootLayoutClient from "./components/RootLayoutClient"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Give Golfklub",
  description: "Give Golfklub - En golfklub for alle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
        <Toaster />
      </body>
    </html>
  );
}
