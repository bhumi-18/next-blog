import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Navbar />   {/* 👈 Navbar added globally */}
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />   {/* 👈 Footer at bottom */}
    </SessionProvider>
  );
}
