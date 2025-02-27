"use client";  // ✅ Add this at the top

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaRegMoon, FaSun, FaUser, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Article {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function Home(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedTheme: string | null = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    }
  }, []);

  const toggleDarkMode = (): void => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Technology", href: "/technology" },
    { title: "Business", href: "/business" },
    { title: "Science", href: "/science" },
    { title: "Entertainment", href: "/entertainment" },
    { title: "Sports", href: "/sports" },
    { title: "Announcements", href: "/announcements" }
  ];

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}>      
      {/* Navbar */}
      <nav className={`flex justify-between items-center p-4 shadow-md bg-opacity-80 sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center gap-6">
          <Link href="/">
            <h1 className="text-2xl font-bold">NovaPulse</h1>
          </Link>
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="hover:text-blue-500 transition">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-md">            
            {darkMode ? <FaSun size={20} /> : <FaRegMoon size={20} />}
          </button>
          <FaSearch size={20} className="cursor-pointer" />
          <Link href="/login" className="p-2 rounded-md flex items-center gap-2 border border-gray-400 dark:border-gray-600 px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <FaUser size={18} />
            <span>Login</span>
          </Link>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center py-10">
        <h2 className="text-4xl font-extrabold">AI-Driven News, Human Insight</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">Stay updated with cutting-edge, AI-personalized news.</p>
      </header>

      {/* Main Content Sections */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">        
        {/* Trending News */}
        <div className="col-span-2">
          <h3 className="text-2xl font-semibold mb-4">Trending News</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="p-4 border rounded-md shadow-sm hover:shadow-lg transition duration-300">
                <Image src="/placeholder-image.jpg" alt="News Image" width={600} height={300} className="rounded-md" />
                <h4 className="text-lg font-bold mt-2">Breaking: AI Advancements in 2025</h4>
                <p className="text-gray-500 dark:text-gray-400">AI is revolutionizing the media industry with automated journalism...</p>
                <Link href="/article/1" className="text-blue-600 dark:text-blue-400 font-semibold">Read More</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements & Top Ten */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Latest Announcements</h3>
          <ul className="space-y-3">
            {["AI Summit 2025 Announced", "New Ethics Guidelines for AI", "AI Stocks on the Rise"].map((announcement, idx) => (
              <li key={idx} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm">
                {announcement}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-4">Top 10 AI Innovations</h3>
          <ul className="space-y-3">
            {["GPT-5 Breakthrough", "AI-Powered Medicine", "Self-Driving Advancements"].map((innovation, idx) => (
              <li key={idx} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm">
                {idx + 1}. {innovation}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 mt-10">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="#" className="hover:text-blue-500 transition"><FaFacebook size={24} /></Link>
          <Link href="#" className="hover:text-blue-500 transition"><FaTwitter size={24} /></Link>
          <Link href="#" className="hover:text-blue-500 transition"><FaInstagram size={24} /></Link>
          <Link href="#" className="hover:text-blue-500 transition"><FaLinkedin size={24} /></Link>
        </div>
        <p className="text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} NovaPulse Media. All rights reserved.</p>
      </footer>
    </div>
  );
}
