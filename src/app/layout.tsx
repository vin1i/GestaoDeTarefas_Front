import { Geist, Geist_Mono, Poppins } from "next/font/google";
// import BottomBar from "@/components/BottomBar/BottomBar";
import { Metadata } from "next";
import "./globals.css";
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gestão de Tarefas",
  description: "Aplicação de Gestão de Tarefas",
};

export default function ServerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
        {/* <BottomBar /> */}
        {/* <ToastContainer/> */}
      </body>
    </html>
  );
}
