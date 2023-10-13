import BackgroundGradient from "@/components/background-gradient";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import cx from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const clash = localFont({
  src: "../styles/ClashDisplay-Semibold.otf",
  variable: "--font-clash",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cx(clash.variable, inter.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <BackgroundGradient />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
