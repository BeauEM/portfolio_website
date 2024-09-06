import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import StarsCanvas from "@/components/ui/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beau Elliott's Webdev Portfolio",
  description:
    "Modern React portfolio showcasing Beau Elliott's web development work in Denver, Colorado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <StarsCanvas />
        </ThemeProvider>
      </body>
    </html>
  );
}
