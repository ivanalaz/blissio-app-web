export function PhoneMockup() {
  return (
    <div 
      className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2"
      style={{ transform: 'translateY(-50%) rotate(8deg)' }}
    >
      <svg width="280" height="560" viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phone outline */}
        <rect 
          x="1" 
          y="1" 
          width="278" 
          height="558" 
          rx="40" 
          stroke="rgba(255, 255, 255, 0.06)" 
          strokeWidth="2"
          fill="none"
        />
        {/* Notch */}
        <path 
          d="M 100 1 L 100 10 C 100 15 105 20 110 20 L 170 20 C 175 20 180 15 180 10 L 180 1" 
          stroke="rgba(255, 255, 255, 0.06)" 
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}
