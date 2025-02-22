"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import BlogItem from "@/components/Blog/BlogItem";
import { getPosts } from "@/sanity/sanity-utils";
import { integrations } from "../../integrations.config";
import { Blog } from "@/types/blog";

const BlogPage = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [posts, setPosts] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const postsPerPage = 9; // (3 rows x 3 columns)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/request-demo", label: "Request a Demo" },
    { href: "https://app.staffluent.co/login", label: "Access Platform" },
  ];

  useEffect(() => {
    if (integrations?.isSanityEnabled) {
      setLoading(true);
      getPosts()
        .then((data) => {
          setPosts(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  // Filter posts by search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Header
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        navLinks={navLinks}
      />
      {!isHamburgerMenuOpen ? (
        <div className="bg-white mt-16 min-h-screen flex flex-col">
          {/* Page Header Section */}
          <div className="mt-8 pt-16 pb-10">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12l9-5-9-5-9 5 9 5z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">Blogs</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                News, insights and more
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Dive into our blog for expert insights, tips, and industry trends
                to elevate your project management journey.
              </p>

              {/* Search Input */}
              <div className="max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search for Blogs"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Blog Grid Section */}
          <div className="flex-grow">
            <div className="max-w-[1200px] mx-auto px-4">
              {loading ? (
                <div className="flex items-center justify-center py-10">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                  {currentPosts.length > 0 ? (
                    currentPosts.map((item, index) => (
                      <BlogItem key={index} blog={item} />
                    ))
                  ) : (
                    <p className="text-center text-lg text-gray-700 col-span-3">
                      No posts found.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Pagination */}
          <div className="max-w-[1200px] mx-auto px-4 mt-10 mb-16">
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          <Footer />
        </div>
      ) : (
        // Mobile menu overlay
        <div className="absolute top-0 left-0 w-full h-[calc(100vh-100px)] bg-white flex flex-col items-center gap-4 pr-6 mt-28">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-black">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default BlogPage;
