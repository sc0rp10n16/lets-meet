import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import '@stream-io/video-react-sdk/dist/css/styles.css'



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lets Meet",
  description: "It is an video call application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen h-screen`}
      >
        
        <StreamVideoProvider>

          {children}
        </StreamVideoProvider>
        
        
        
      </body>
    </html>
    </ClerkProvider>
  );
}
