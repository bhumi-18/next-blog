import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="border-b bg-white shadow-sm">
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
          Next Blog
        </Link>

        {/* Menu Links */}
        <div className="flex gap-6 text-gray-700 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/posts" className="hover:text-blue-600 transition-colors">
            Posts
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
        </div>

        {/* User Info / Login */}
        <div className="flex items-center gap-4">
          {session ? (
            <>
              {/* Profile Pic */}
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  width={32}
                  height={32}
                  className="rounded-full border"
                />
              )}
              {/* User Name */}
              <span className="text-sm font-medium text-gray-700">
                {session.user?.name}
              </span>
              {/* Logout Button */}
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login with Google
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
