import Link from "next/link";

export default function Navbar() {
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
      </nav>
    </header>
  );
}
