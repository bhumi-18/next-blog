// pages/posts/[id].tsx
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { posts as allPosts, Post } from "../../data/posts";

type Props = { post: Post };

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map(p => ({ params: { id: p.id } }));
  return { paths, fallback: false }; // all posts pre-rendered
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;
  const post = allPosts.find(p => p.id === id)!;
  return { props: { post } };
};

export default function PostPage({ post }: Props) {
  return (
    <Layout title={post.title} description={post.excerpt}>
      <article className="prose max-w-none">
        <Link href="/" className="no-underline">&larr; Back</Link>
        <h1>{post.title}</h1>
        {post.coverImage && (
          <div className="relative h-72 my-4">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        )}
        <p className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleString()}
        </p>
        <p>{post.body}</p>
      </article>
    </Layout>
  );
}
