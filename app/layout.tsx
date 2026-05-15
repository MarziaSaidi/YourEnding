import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourEnding | AI Movie Ending Generator",
  description:
    "Reimagine a movie's final scene and generate a cinematic alternate ending clip with AI."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
