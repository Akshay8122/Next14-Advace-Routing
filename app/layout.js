import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Advance routing demo",
  description: "Generated by create next app",
};

export default function RootLayout({ children, modal, team }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/vercel.svg" />
      </head>
      <body className={`flex ${inter.className}`}>
        {children}
        {team}
        {modal}
      </body>
    </html>
  );
}
