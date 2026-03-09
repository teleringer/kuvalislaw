import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuvalis Law Demo | Legal Client Intake",
  description:
    "Demo website for Legal Client Intake showing how an AI legal receptionist could answer after-hours calls for law firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}