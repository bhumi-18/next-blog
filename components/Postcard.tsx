import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../data/posts";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      {/* Post Image */}
      {post.coverImage && (
        <div className="relative w-full h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      )}

      {/* Post Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          <Link href={`/posts/${post.id}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
