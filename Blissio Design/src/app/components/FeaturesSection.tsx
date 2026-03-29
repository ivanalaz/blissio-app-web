export function FeaturesSection() {
  const features = [
    {
      tag: 'Grupe i raspored',
      title: 'Raspored koji svi vide',
      body: 'Admin kreira grupe i termine. Polaznici i roditelji vide tačno kad su treninzi, bez pitanja u Viberu. Otkazivanje jednim klikom briše termin iz svih kalendara.',
      textPosition: 'left'
    },
    {
      tag: 'Plaćanja',
      title: 'Evidencija bez gubitaka',
      body: 'Admin potvrđuje uplate, roditelji vide stanje u realnom vremenu. Automatski podsetnci stižu samo onima koji nisu platili — 10., 15. i 25. u mesecu.',
      textPosition: 'right'
    },
    {
      tag: 'Solo termini',
      title: 'Privatni časovi bez razmene poruka',
      body: 'Instruktor postavlja slobodne termine. Polaznik bira kad mu odgovara. Sve se beleži, podsetnik stiže automatski.',
      textPosition: 'left'
    },
    {
      tag: 'Uloge i dozvole',
      title: 'Svako vidi samo ono što mu treba',
      body: 'Admin, instruktor, roditelj, polaznik — svaka uloga ima svoje prikaze i dozvole. Jedna osoba može biti i polaznik i instruktor istovremeno.',
      textPosition: 'right'
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
          Kako Blissio funkcioniše
        </div>
        
        <h2 
          className="text-[48px] leading-[1.1] mb-20"
          style={{ 
            color: '#F0EDE6',
            fontWeight: 700
          }}
        >
          Sve što studio treba.<br />
          Ništa što ne treba.
        </h2>
        
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                feature.textPosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 max-w-[480px]">
                <div 
                  className="text-[11px] tracking-[0.15em] uppercase mb-4"
                  style={{ color: '#C084FC' }}
                >
                  {feature.tag}
                </div>
                
                <h3 
                  className="text-[28px] mb-4"
                  style={{ 
                    color: '#F0EDE6',
                    fontWeight: 600
                  }}
                >
                  {feature.title}
                </h3>
                
                <p 
                  className="text-[16px] leading-[1.7] max-w-[400px]"
                  style={{ color: 'rgba(240, 237, 230, 0.6)' }}
                >
                  {feature.body}
                </p>
              </div>
              
              <div 
                className="flex-1 w-full lg:w-auto aspect-[4/3] rounded-lg p-8"
                style={{
                  backgroundColor: '#1A1917',
                  border: '0.5px solid rgba(255, 255, 255, 0.08)',
                  backgroundImage: 'linear-gradient(rgba(192, 132, 252, 0.06), rgba(192, 132, 252, 0.06))'
                }}
              >
                <div className="h-full flex items-center justify-center">
                  <div className="space-y-3 w-full max-w-[300px]">
                    <div 
                      className="h-3 rounded"
                      style={{ 
                        backgroundColor: 'rgba(240, 237, 230, 0.1)',
                        width: '60%'
                      }}
                    />
                    <div 
                      className="h-3 rounded"
                      style={{ 
                        backgroundColor: 'rgba(240, 237, 230, 0.08)',
                        width: '80%'
                      }}
                    />
                    <div 
                      className="h-3 rounded"
                      style={{ 
                        backgroundColor: 'rgba(240, 237, 230, 0.06)',
                        width: '40%'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}