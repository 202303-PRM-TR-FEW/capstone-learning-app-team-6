import Navbar from "@/components/NavBar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "LearnU",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: "flex" }}>
        <header>
          <Navbar />
        </header>
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
