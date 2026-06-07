import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santiago Reyes Herrera | Portfolio",
  description:
    "Personal portfolio of Santiago Reyes Herrera, Systems Engineering student and developer focused on web, mobile, and software solutions.",
  keywords: [
    "Santiago Reyes Herrera",
    "Portfolio",
    "Systems Engineering",
    "Web Developer",
    "Flutter Developer",
    "Python Developer",
    "Cartagena Colombia",
  ],
  authors: [{ name: "Santiago Reyes Herrera" }],
  creator: "Santiago Reyes Herrera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}