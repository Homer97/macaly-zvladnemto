import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const roboto = Roboto({ 
  weight: ["400", "500", "700"], 
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-roboto" 
});

export const metadata: Metadata = {
  title: "ZvládnemTo - Pomoc doma? Zvládnem to.",
  description: "Potřebujete s něčím pomoct? Řekněte nám to a my už někoho šikovného pošleme.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${roboto.variable}`}>
        <body className={inter.className}>{children}</body>
    </html>
  );
}