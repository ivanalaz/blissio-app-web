import { useState } from 'react';

export function WaitlistCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission
    console.log('Email submitted:', email);
  };

  return (
    <section 
      className="py-[140px]"
      style={{ backgroundColor: '#0D0C0B' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
        <h2 
          className="text-[56px] leading-[1.1] mb-5"
          style={{ 
            color: '#F0EDE6',
            fontWeight: 700
          }}
        >
          Spreman da prestaneš<br />
          da vodiš studio u Viberu?
        </h2>
        
        <p 
          className="text-[18px] mb-10 max-w-[440px] mx-auto"
          style={{ color: 'rgba(240, 237, 230, 0.55)' }}
        >
          Prijavi se na listu čekanja. Javiću ti se lično pre nego što otvorimo pristup.
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-3 justify-center items-center mb-4"
        >
          <input
            type="email"
            placeholder="tvoj@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-[320px] text-[16px] px-5 py-3.5 rounded-lg outline-none transition-all duration-200 focus:border-opacity-100"
            style={{
              backgroundColor: '#1A1917',
              border: '0.5px solid #C084FC',
              color: '#F0EDE6'
            }}
            required
          />
          
          <button 
            type="submit"
            className="w-full md:w-auto text-[16px] px-7 py-3.5 rounded-lg transition-all duration-200 hover:bg-[#A855F7] hover:shadow-lg hover:shadow-[#C084FC]/20"
            style={{
              backgroundColor: '#C084FC',
              color: '#0D0C0B',
              fontWeight: 500
            }}
          >
            Prijavi se
          </button>
        </form>
        
        <p 
          className="text-[12px]"
          style={{ color: 'rgba(240, 237, 230, 0.35)' }}
        >
          Bez spam poruka. Samo obaveštenje kada aplikacija bude dostupna.
        </p>
      </div>
    </section>
  );
}