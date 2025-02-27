import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaRegMoon, FaSun } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}>      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-opacity-80 sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`">
        <Link href="/">
          <h1 className="text-2xl font-bold">NovaPulse</h1>
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-md">            
            {darkMode ? <FaSun size={20} /> : <FaRegMoon size={20} />}
          </button>
          <FaSearch size={20} className="cursor-pointer" />
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center py-10">
        <h2 className="text-4xl font-extrabold">AI-Driven News, Human Insight</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">Stay updated with cutting-edge, AI-personalized news.</p>
      </header>

      {/* Trending News Section */}
      <section className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-4">Trending News</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-md shadow-sm hover:shadow-lg transition duration-300">
            <Image src="/placeholder-image.jpg" alt="News Image" width={600} height={300} className="rounded-md" />
            <h4 className="text-lg font-bold mt-2">Breaking: AI Advancements in 2025</h4>
            <p className="text-gray-500 dark:text-gray-400">AI is revolutionizing the media industry with automated journalism...</p>
            <Link href="/article/1" className="text-blue-600 dark:text-blue-400 font-semibold">Read More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
