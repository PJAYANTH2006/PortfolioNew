import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Jayanth Pothala | Full Stack Developer",
  description:
    "Award-level portfolio featuring real-time collaboration, AI workflows, and polished full-stack experiences.",
  metadataBase: new URL("https://pjayanth2006.github.io"),
  openGraph: {
    title: "Sai Jayanth Pothala | Full Stack Developer",
    description:
      "Award-level portfolio featuring real-time collaboration, AI workflows, and polished full-stack experiences.",
    images: ["/og-image.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Jayanth Pothala | Full Stack Developer",
    description:
      "Award-level portfolio featuring real-time collaboration, AI workflows, and polished full-stack experiences.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
