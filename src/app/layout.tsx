import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "../../utils/Providers/ReactQueryProvider";

const Vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "لورم بلاگ",
    template: "%s - لورم بلاگ",
  },
  description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${Vazir.className} bg-background antialiased`}>
        <ToastContainer />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
