import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: '#0D0C0B' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 w-full relative">
        <div className="max-w-[680px] lg:ml-[10%]">
          <div 
            className="text-[11px] tracking-[0.2em] uppercase mb-6"
            style={{ color: '#C084FC' }}
          >
            Za plesne studije i klubove · Srbija
          </div>
          
          <h1 
            className="text-[40px] md:text-[72px] leading-[1.1] mb-6"
            style={{ 
              color: '#F0EDE6',
              fontWeight: 700
            }}
          >
            Manje papira.<br />
            Više plesa.
          </h1>
          
          <p 
            className="text-[20px] max-w-[480px] mb-10"
            style={{ 
              color: 'rgba(240, 237, 230, 0.6)',
              fontWeight: 400,
              lineHeight: 1.5
            }}
          >
            Blissio je aplikacija za upravljanje plesnim studijima — rasporedi, plaćanja, evidencija prisutnosti i obaveštenja, sve na jednom mestu.
          </p>
          
          <button 
            className="text-[16px] px-8 py-3.5 rounded-lg transition-all duration-200 hover:bg-[#A855F7] hover:shadow-lg hover:shadow-[#C084FC]/20"
            style={{
              backgroundColor: '#C084FC',
              color: '#0D0C0B',
              fontWeight: 500
            }}
          >
            Prijavi se na listu čekanja
          </button>
          
          <div 
            className="text-[12px] mt-4"
            style={{ color: 'rgba(240, 237, 230, 0.4)' }}
          >
            Već koriste: Studio 5 i Project 567, Novi Sad
          </div>
        </div>
        
        <PhoneMockup />
      </div>
    </section>
  );
}