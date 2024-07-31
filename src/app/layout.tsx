import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "../styles/globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["400", "600", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tokenizadora - Case",
  description: "Tokenizadora - Case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
      <Toaster />
    </html>
  );
}
