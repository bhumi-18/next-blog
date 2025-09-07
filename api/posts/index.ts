// pages/api/posts/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { posts, Post } from "../../../data/posts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // return all posts
    return res.status(200).json(posts);
  }
  if (req.method === "POST") {
    // very naive create (in-memory)
    const body = req.body as Partial<Post>;
    if (!body.title || !body.body || !body.id) {
      return res.status(400).json({ error: "id, title and body are required" });
    }
    const exists = posts.some(p => p.id === body.id);
    if (exists) return res.status(409).json({ error: "Post id already exists" });

    const newPost: Post = {
      id: body.id,
      title: body.title,
      excerpt: body.excerpt ?? "",
      body: body.body,
      coverImage: body.coverImage,
      createdAt: new Date().toISOString(),
    };
    posts.unshift(newPost);
    return res.status(201).json(newPost);
  }
  return res.status(405).json({ error: "Method not allowed" });
}
