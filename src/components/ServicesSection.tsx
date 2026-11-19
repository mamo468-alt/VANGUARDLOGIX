import React, { useState } from 'react';
import { Truck, Check, ArrowRight, ShieldCheck, Layers, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
  onOpenConsultationWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForQuote,
  onOpenConsultationWithService,
}) => {
  const [activeFilter, setActiveFilter] = useState<'tots' | 'nacional' | 'internacional'>('tots');

  const services = [
    {
      id: 'nacional',
      emoji: '🚛',
      title: 'Transport Nacional per Carretera',
      subtitle: 'Cobertura peninsular i illes · 24h / 48h',
      description:
        'Servei diari per carretera a tot el territori nacional, connectant directament els principals corredors logístics (Barcelona, Madrid, València, Sevilla, Bilbao) tant en càrrega completa (FTL) com en grupatge (LTL).',
      image: '/src/assets/images/service_national_truck_1793896347217.jpg',
      imageAlt: 'Camió tráiler tauliner en moll de càrrega nacional a Espanya',
      features: [
        'Càrrega Completa (Tráiler FTL) i Grupatge per Carretera (LTL).',
        'Flota adaptada a cada mercaderia (Tauliner XL, Frigorífics, Furgons).',
      ],
      specs: [
        'Tràilers de 13,60 m amb capacitat de fins a 33 europalets',
        'Rutes directes Barcelona - Madrid - València en 24h garantides',
        'Seguiment GPS en directe i albarà digitalitzat immediat',
      ],
      badge: 'Nacional 24h-48h',
    },
    {
      id: 'internacional',
      emoji: '🇪🇺',
      title: 'Transport Internacional per Carretera',
      subtitle: 'Rutes europees directes · Conveni CMR',
      description:
        'Línies regulars i dedicades per carretera connectant Espanya amb França, Alemanya, Itàlia, Portugal, Bèlgica, Països Baixos i Regne Unit, amb gestió integral del transport transfronterer.',
      image: '/src/assets/images/service_international_europe_1793896348298.jpg',
      imageAlt: 'Camió de gran tonatge travessant un viaducte alpí a Europa',
      features: [
        'Opció de doble conductor per a trànsits exprés non-stop per Europa.',
        'Tramitació completa de la carta de port internacional (e-CMR) i duanes viàries.',
      ],
      specs: [
        'Corredor Mediterrani i Atlàntic (Lió, París, Milà, Frankfurt, Rotterdam)',
        'Modalitats de camió complet (FTL) i grupatge internacional (LTL)',
        'Assegurança de mercaderia a tot risc segons Conveni CMR',
      ],
      badge: 'Europa CMR Integrat',
    },
  ];

  const filteredServices =
    activeFilter === 'tots'
      ? services
      : services.filter((s) => s.id === activeFilter);

  return (
    <section id="serveis" className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-200 text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Light Clean Aesthetic) */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-bold tracking-wide text-[#8A6305] uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            Catàleg de Serveis de Carretera
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Transport per Carretera Nacional i Internacional
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            A <strong className="text-neutral-950">Astra Nourweey Transports</strong> ens dediquem en exclusiva al
            transport de mercaderies per carretera, oferint rutes nacionals i internacionals amb flota moderna i puntualitat garantida.
          </p>

          {/* Interactive Filter Tabs (Refined light segmented buttons) */}
          <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-white border border-neutral-300 rounded-xl shadow-sm inline-flex">
            <button
              onClick={() => setActiveFilter('tots')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'tots'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Totes les Rutes
            </button>
            <button
              onClick={() => setActiveFilter('nacional')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'nacional'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              🚛 Transport Nacional
            </button>
            <button
              onClick={() => setActiveFilter('internacional')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'internacional'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              🇪🇺 Transport Internacional
            </button>
          </div>
        </div>

        {/* 2 Services Cards Grid (Crisp White Cards with subtle Gold highlights) */}
        <div className={`grid grid-cols-1 ${filteredServices.length > 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-1 max-w-3xl'} gap-8 mb-16`}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 shadow-md group"
            >
              <div>
                {/* Photo Container */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-black/85 backdrop-blur-md border border-[#E5C158]/60 rounded-full font-mono text-xs text-[#F5D061] font-bold shadow-sm">
                      {service.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xl drop-shadow">{service.emoji}</span>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold drop-shadow">
                      Flota Homologada
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-neutral-950 tracking-tight mb-1 group-hover:text-[#8A6305] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#8A6305] font-mono uppercase tracking-wider font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Característiques clau */}
                  <div className="space-y-3 pt-5 border-t border-neutral-200 mb-6">
                    <div className="text-xs uppercase font-mono tracking-wider text-[#8A6305] font-bold">
                      Característiques Principals
                    </div>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800">
                        <div className="mt-0.5 rounded-full p-0.5 bg-[#E5C158]/20 text-[#8A6305] shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#8A6305]" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Especificacions tècniques */}
                  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 text-xs text-neutral-600 space-y-1.5">
                    <div className="font-bold text-neutral-900 mb-1">Capacitats operatives:</div>
                    {service.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] hover:brightness-105 active:scale-[0.99] rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <span>Cotitzar Servei</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenConsultationWithService(service.title)}
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Més Detalls</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Fleet Photography Showcase */}
        <div className="bg-neutral-950 text-white border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Photo Slot */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[340px] overflow-hidden">
              <img
                src="/src/assets/images/fleet_showcase_warehouse_1793896348302.jpg"
                alt="Flota de camions de transport per carretera Astra Nourweey Transports alineats en molls de càrrega"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-neutral-950 hidden lg:block" />
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/85 backdrop-blur-md rounded-md text-xs font-mono text-[#F5D061] border border-neutral-700">
                Astra Nourweey · Base Logística Zona Franca, Sector C (Barcelona)
              </div>
            </div>

            {/* Showcase Text & Types of Fleet */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-5">
              <div className="text-xs uppercase font-mono tracking-wider text-[#F5D061] font-bold">
                Flota Pròpia i Homologada Euro 6
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Tipologies de Semiremolc Adaptades a Cada Sector
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Tots els vehicles d'Astra Nourweey compleixen l'estàndard Euro 6d, incorporen telemàtica
                GPS en directe i estan condicionats per a mercaderia general, industrial i ADR.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl">
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                    Lones Tauliner XL
                  </div>
                  <p className="text-neutral-400">Càrrega lateral i sostre elevable per a indústria.</p>
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl">
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                    Frigorífics Bi-Temp
                  </div>
                  <p className="text-neutral-400">Control de temperatura (-20ºC a +18ºC) amb termògraf.</p>
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl">
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                    Furgons Tancats
                  </div>
                  <p className="text-neutral-400">Pany de seguretat d'alta protecció per a alt valor.</p>
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl">
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                    Plataforma Hidràulica
                  </div>
                  <p className="text-neutral-400">Descàrrega autònoma per a magatzems sense moll.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectServiceForQuote('Transport de Càrrega Específica')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] rounded-lg transition-all cursor-pointer shadow-md"
                >
                  <span>Demanar Disponibilitat de Flota</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
