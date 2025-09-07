// pages/api/posts/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from "../../../data/posts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string };
  const post = posts.find(p => p.id === id);

  if (req.method === "GET") {
    if (!post) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(post);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
