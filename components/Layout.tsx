import Head from "next/head";
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

        <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
      </div>
    </>
  );
}
