// pages/client.tsx
import useSWR from "swr";
import Link from "next/link";
import Layout from "../components/Layout";
import type { Post } from "../data/posts";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Client() {
  const { data, error, isLoading } = useSWR<Post[]>("/api/posts", fetcher);

  return (
    <Layout title="Client (SWR)" description="Client-side data fetching with SWR">
      <h1 className="text-2xl font-bold mb-4">Client-side Posts</h1>
      {isLoading && <p>Loading…</p>}
      {error && <p className="text-red-600">Failed to load.</p>}
      {data && (
        <ul className="space-y-2">
          {data.map(p => (
            <li key={p.id} className="rounded-lg bg-white p-3 shadow">
              <Link href={`/posts/${p.id}`} className="font-medium">{p.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
