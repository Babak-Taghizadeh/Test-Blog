import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "@/utils/Providers/ReactQueryProvider";

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
  openGraph: {
    title: "لورم بلاگ",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    url: "https://test-blog-eight-xi.vercel.app/",
    images: [
      {
        url: "https://example.com/image.jpg",
        width: 800,
        height: 600,
        alt: "Image description",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${Vazir.className} bg-background antialiased`}>
        <ToastContainer style={{ textAlign: "right" }} />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
