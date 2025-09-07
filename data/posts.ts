export interface Post {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  coverImage: string;
  createdAt: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    excerpt: "This is the first post excerpt.",
    body: "This is the full content of the first post.",
    coverImage: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Second Post",
    excerpt: "This is the second post excerpt.",
    body: "This is the full content of the second post.",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Third Post",
    excerpt: "Another interesting excerpt.",
    body: "This is the full content of the third post.",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    createdAt: new Date().toISOString(),
  },
];
