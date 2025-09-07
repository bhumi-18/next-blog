// components/Layout.tsx
import Head from "next/head";
import Link from "next/link";
import { PropsWithChildren } from "react";

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
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-3xl px-4 py-4 flex items-center gap-4">
            <Link className="font-semibold" href="/">Next Blog</Link>
            <div className="ml-auto flex gap-4 text-sm">
              <Link href="/client">Client (SWR)</Link>
              <Link href="/ssr">SSR</Link>
              <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Docs</a>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>

        <footer className="mx-auto max-w-3xl px-4 py-8 text-sm text-gray-500">
          Built with Next.js • Deployed on Vercel
        </footer>
      </div>
    </>
  );
}
