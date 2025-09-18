import Head from "next/head";
import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

type Props = PropsWithChildren<{ title?: string; description?: string }>;

export default function Layout({ children, title, description }: Props) {
  const pageTitle = title ? `${title} • Next Blog` : "Next Blog";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar /> {/* ✅ Navbar here */}

        <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>

        <footer className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500 text-center">
          Built with Next.js • Deployed on Vercel
        </footer>
      </div>
    </>
  );
}
