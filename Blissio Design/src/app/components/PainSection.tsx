export function PainSection() {
  const painPoints = [
    {
      title: 'Ručno praćenje plaćanja',
      body: 'Ko je platio članarinu, ko duguje, ko kasni — sve se prati u glavi ili u tabeli koja ne prima odgovore.'
    },
    {
      title: 'Zakazivanje solo termina',
      body: 'Koordinacija privatnih časova ide kroz poruke. Termini se gube, polaznici zaboravljaju, instruktori se bune.'
    },
    {
      title: 'Obaveštenja koja nikad ne stignu',
      body: 'Otkazani trening, promenjen termin, podsetnik za uplatu — sve ručno, svaki put iznova.'
    }
  ];

  return (
    <section 
      className="py-[120px]"
      style={{ backgroundColor: '#0D0C0B' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div 
          className="text-[11px] tracking-[0.2em] uppercase mb-3"
          style={{ color: '#C084FC' }}
        >
          Poznato?
        </div>
        
        <h2 
          className="text-[48px] leading-[1.1] mb-12"
          style={{ 
            color: '#F0EDE6',
            fontWeight: 700
          }}
        >
          Vodiš studio kroz<br />
          Viber grupe i Excel tabele.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="p-7 rounded-lg transition-all duration-200 hover:border-opacity-20"
              style={{
                backgroundColor: '#1A1917',
                border: '0.5px solid rgba(255, 255, 255, 0.08)',
                backgroundImage: 'linear-gradient(rgba(192, 132, 252, 0.06), rgba(192, 132, 252, 0.06))'
              }}
            >
              <div 
                className="text-[24px] mb-4"
                style={{ color: '#C084FC' }}
              >
                ×
              </div>
              
              <h3 
                className="text-[16px] mb-3"
                style={{ 
                  color: '#F0EDE6',
                  fontWeight: 500
                }}
              >
                {point.title}
              </h3>
              
              <p 
                className="text-[14px] leading-[1.7]"
                style={{ color: 'rgba(240, 237, 230, 0.55)' }}
              >
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}