import { useState, useEffect } from 'react';
import logo from 'figma:asset/93de6f965e6f3739062d7e180df49a78ecfa30c7.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(13, 12, 11, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <img 
          src={logo} 
          alt="Blissio" 
          className="h-16"
        />
        
        <button 
          className="hidden md:block text-[13px] px-5 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#C084FC] hover:bg-opacity-10"
          style={{
            color: '#C084FC',
            border: '1px solid #C084FC',
            backgroundColor: 'transparent'
          }}
        >
          Prijavi se na listu čekanja
        </button>

        <div 
          className="md:hidden w-3 h-3 rounded-full"
          style={{ backgroundColor: '#C084FC' }}
        />
      </div>
    </nav>
  );
}