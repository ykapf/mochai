import CustomCursor from "./components/Cursor";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mochai | Sip into the future",
  description: "Sip into the future",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children} <CustomCursor />
        </main>
      </body>
    </html>
  );
}
