// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Next Blog. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with <span className="text-pink-400">❤</span> using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
