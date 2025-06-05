import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/icons/logo.png";

const Blog = () => {
  const articles = [
    {
      title: "The Future of Home Energy Management",
      category: "Technology",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=400&fit=crop",
      excerpt: "Discover how AI and IoT are revolutionizing the way we manage home energy consumption."
    },
    {
      title: "5 Ways to Reduce Your Energy Bill",
      category: "Tips & Tricks",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
      excerpt: "Practical tips and strategies to lower your energy costs while maintaining comfort."
    },
    {
      title: "Solar Energy: A Complete Guide",
      category: "Renewable Energy",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
      excerpt: "Everything you need to know about implementing solar power in your home."
    },
    {
      title: "Smart Home Integration Made Easy",
      category: "Technology",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop",
      excerpt: "Learn how to integrate your energy management system with other smart home devices."
    }
  ];

  const categories = [
    "All",
    "Technology",
    "Tips & Tricks",
    "Renewable Energy",
    "Industry News",
    "Product Updates"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <Link to="/" className="hover:text-green-400 transition">HOME</Link>
            <Link to="/products" className="hover:text-green-400 transition">PRODUCTS</Link>
            <Link to="/energy-management" className="hover:text-green-400 transition">HOME ENERGY MANAGEMENT</Link>
            <Link to="/resources" className="hover:text-green-400 transition">RESOURCES</Link>
            <Link to="/about" className="hover:text-green-400 transition">ABOUT</Link>
          </nav>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-xl transition-all duration-300 shadow-lg">
            SHOP
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest news, tips, and insights about energy management and smart home technology.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-gray-900 hover:bg-green-500 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-green-400 text-sm font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {article.date}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
                  <p className="text-gray-300 mb-4">{article.excerpt}</p>
                  <Link
                    to="#"
                    className="text-green-400 hover:text-green-300 transition inline-flex items-center gap-2"
                  >
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-900 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-8">
              Get the latest articles and updates delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                />
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
     
    </div>
  );
};

export default Blog; 