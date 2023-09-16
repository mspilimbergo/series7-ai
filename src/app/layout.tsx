
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { useRouter } from "next/router";
import "./globals.css";
export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Series 7 AI",
  description: "Ace Your Series 7 Exam!",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  // const router = useRouter();
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        <Providers>
          {/* <Navbar  /> */}
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
