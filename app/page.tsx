// app/page.tsx (Next.js 15 App Router)
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-violet-600">ShopFlow</h1>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          <a href="/home" className="bg-linear-to-r from-purple-700 to-violet-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between py-20">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simplify Your Inventory, Grow Your Business
          </h2>
          <p className="text-gray-700 mb-6">
            LocalStock helps small vendors track their stock, reduce losses, and stay competitive with instant-delivery apps.
          </p>
          <a href="/home" className="bg-linear-to-r from-purple-700 to-violet-600 text-white px-6 py-3 rounded text-lg hover:bg-indigo-700">
            Start Free
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image 
            src="/inventory-illustration.png" 
            alt="Inventory Illustration" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-6xl py-20">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Easy Product Management</h4>
            <p>Quickly add, edit, and delete products, with real-time stock updates.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Low Stock Alerts</h4>
            <p>Get notified when items are running low, so you never lose sales.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Sales Insights</h4>
            <p>Track your best-selling items and understand trends to grow your business.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-indigo-600 py-16 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to take control of your inventory?</h3>
        <a href="/signup" className="bg-white text-indigo-600 px-8 py-3 rounded text-lg hover:bg-gray-100 transition">
          Start Free
        </a>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full max-w-6xl py-10 text-center text-gray-500">
        © 2025 LocalStock. All rights reserved.
      </footer>
    </main>
  );
}
