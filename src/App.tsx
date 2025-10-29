import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'about'>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid background pattern */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(var(--grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}></div>
      
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="relative">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>
    </div>
  );
}
