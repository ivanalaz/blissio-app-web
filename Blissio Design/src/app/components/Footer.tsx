export function Footer() {
  return (
    <footer 
      className="py-8"
      style={{ 
        backgroundColor: '#0D0C0B',
        borderTop: '0.5px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div 
          className="text-[13px]"
          style={{ color: 'rgba(240, 237, 230, 0.35)' }}
        >
          Blissio · 2026
        </div>
        
        <div 
          className="text-[13px]"
          style={{ color: 'rgba(240, 237, 230, 0.35)' }}
        >
          contact@blissio.app
        </div>
      </div>
    </footer>
  );
}