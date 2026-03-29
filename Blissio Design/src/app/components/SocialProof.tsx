export function SocialProof() {
  const testimonials = [
    {
      quote: 'Konačno ne moram da šaljem poruke jednu po jednu. Svi vide raspored, svi dobijaju podsetnike.',
      attribution: 'Project 567 · Plesni studio, Novi Sad'
    },
    {
      quote: 'Vodimo takmičarski klub sa više grupa i instruktora. Blissio drži sve na jednom mestu.',
      attribution: 'Studio 5 · Takmičarski plesni klub, Novi Sad'
    }
  ];

  return (
    <section 
      className="py-[100px]"
      style={{ backgroundColor: '#1A1917' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div 
            className="text-[11px] tracking-[0.2em] uppercase mb-3"
            style={{ color: '#C084FC' }}
          >
            Već u upotrebi
          </div>
          
          <h2 
            className="text-[40px] leading-[1.1]"
            style={{ 
              color: '#F0EDE6',
              fontWeight: 700
            }}
          >
            Prave škole. Pravi podaci.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-9 rounded-lg"
              style={{
                backgroundColor: '#0D0C0B',
                border: '0.5px solid rgba(255, 255, 255, 0.08)',
                backgroundImage: 'linear-gradient(rgba(192, 132, 252, 0.06), rgba(192, 132, 252, 0.06))'
              }}
            >
              <blockquote 
                className="text-[18px] leading-[1.6] italic mb-5"
                style={{ 
                  color: 'rgba(240, 237, 230, 0.8)',
                  fontWeight: 400
                }}
              >
                "{testimonial.quote}"
              </blockquote>
              
              <div 
                className="text-[14px]"
                style={{ color: 'rgba(240, 237, 230, 0.4)' }}
              >
                {testimonial.attribution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}