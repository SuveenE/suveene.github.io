import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/home/header";
import Footer from "./components/home/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suveen Ellawela",
  description: "Suveen Ellawela's personal website.",
  icons: {
    icon: "/dino.svg",
  },
  openGraph: {
    title: "Suveen Ellawela",
    description: "Suveen Ellawela's personal website.",
    url: "https://suveene.github.io/",
    siteName: "Suveen Ellawela",
    images: [
      {
        url: "https://suveene.github.io/Suveen.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="shortcut icon" href="/dino.svg" />
      </head>
      <Toaster
        toastOptions={{
          classNames: {
            toast: "bg-white border-2 border-lime-400",
            title: "text-black",
            description: "text-red-400",
            actionButton: "bg-indigo-400",
            cancelButton: "bg-orange-400",
            closeButton: "bg-lime-400",
          },
        }}
      />
      <body className={`${inter.className} bg-white text-black`}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
