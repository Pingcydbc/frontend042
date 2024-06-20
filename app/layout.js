import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'; // Your global CSS file if any
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chayodom",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body className={inter.className}>
          {children}

        </body>
      </html>

    </>
  )
}
