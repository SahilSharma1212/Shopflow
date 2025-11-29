import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-500/40 rounded-full blur-3xl animate-pulse-slow -top-10 -left-10"></div>
        <div className="absolute w-72 h-72 bg-violet-600/40 rounded-full blur-3xl animate-pulse-slow-2 bottom-0 right-0"></div>
      </div>

      {/* Content */}
      <div className="relative text-center z-10 border-2 border-purple-700 p-10 rounded-2xl">
        <h1 className="text-8xl font-extrabold bg-linear-to-r from-purple-700 via-violet-600 to-purple-900 bg-clip-text text-transparent animate-fade-down">
          404
        </h1>

        <p className="mt-4 text-gray-700 text-lg animate-fade-up">
          The page you’re looking for doesn’t exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-6 py-2 rounded-lg bg-linear-to-r from-purple-700 to-violet-600 text-white font-medium shadow-md hover:scale-105 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
