// pages/ssr.tsx
import type { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import { posts as rawPosts, Post } from "../data/posts";

type Props = { posts: Post[]; generatedAt: string };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // SSR runs on every request
  return {
    props: {
      posts: rawPosts,
      generatedAt: new Date().toISOString(),
    },
  };
};

export default function SSR({ posts, generatedAt }: Props) {
  return (
    <Layout title="SSR Demo" description="Rendered on each request">
      <h1 className="text-2xl font-bold mb-2">SSR Page</h1>
      <p className="text-sm text-gray-600 mb-6">
        Rendered at: {new Date(generatedAt).toLocaleTimeString()}
      </p>
      <ul className="list-disc pl-6">
        {posts.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </Layout>
  );
}
