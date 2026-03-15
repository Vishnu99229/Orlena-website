import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const blogPosts = [
  {
    title: "How to Increase Average Order Value in Your Cafe or Restaurant",
    excerpt: "Most cafe and restaurant owners in India are leaving significant revenue on the table every single shift. Here are the proven strategies to increase average order value in 2026.",
    date: "March 15, 2026",
    readTime: "6 min read",
    slug: "how-to-increase-average-order-value-restaurant"
  }
];

export const BlogList: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-stone-900 leading-tight">
            Blog
          </h1>
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border text-left border-stone-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-stone-900 leading-snug">
                  {post.title}
                </h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#FF6B35] font-semibold hover:text-[#e85d00] transition-colors"
                >
                  Read More →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
