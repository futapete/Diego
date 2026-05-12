import type { Metadata } from "next";
import { Oxanium, VT323 } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Diego Leo Yodico",
  description: "Retro-futuristic developer portfolio of Diego Leo Yodico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oxanium.variable} ${vt323.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
