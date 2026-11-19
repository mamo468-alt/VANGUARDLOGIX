import React from 'react';
import { Truck, ShieldCheck, Route, Award, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const credentials = [
    {
      icon: Truck,
      title: 'Flota Euro 6 d\'Última Generació',
      desc: 'Més de 350 unitats tractores i semiremolcs equipats amb motors d\'alta eficiència, reducció d\'emissions NOx i sistemes de frenada assistida per a màxima seguretat viària.',
    },
    {
      icon: ShieldCheck,
      title: 'Marc Legal LOTT & Conveni CMR',
      desc: 'Totes les nostres operacions estan avalades pel marc regulador de transport terrestre espanyol i europeu, amb gestió d\'e-CMR i pòlissa de responsabilitat civil de càrrega.',
    },
    {
      icon: Route,
      title: 'Seguiment Telemàtic per Satèl·lit 24/7',
      desc: 'Els nostres tràilers transmeten posició GPS, obertura de portes i estat de temperatura en temps real, connectats directament a la nostra central de tràfic a Barcelona.',
    },
    {
      icon: Award,
      title: 'Xòfers Professionals amb ADR',
      desc: 'Equip de conductors amb experiència en llarga distància, descansos reglamentaris respectats i opció de doble tripulació per a enviaments exprés transfronterers.',
    },
  ];

  return (
    <section id="quisom" className="py-20 md:py-28 bg-neutral-100/70 border-t border-neutral-200 text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-wide text-[#8A6305] uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            Identitat & Compromís Operatiu
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Qui Som · Astra Nourweey Transports
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            A <strong className="text-neutral-950 font-bold">Astra Nourweey Transports</strong> som especialistes en
            connectar empreses amb els seus clients mitjançant una logística terrestre eficient, puntual i
            tecnològica. Des de la nostra base operativa a la Zona Franca de Barcelona, coordinem rutes
            peninsulars i internacionals amb resposta immediata.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          <div className="lg:col-span-7 bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                Més de dues dècades mobilitzant càrrega industrial i comercial
              </h3>
              <p>
                Entenem el transport com una baula clau del teu negoci: un retard a la fàbrica o una fallada en el
                lliurament al client pot aturar una línia de producció sencera. Per això prioritzem el compromís
                de finestres horàries tancades i la comunicació directa amb la persona que gestiona el teu camió.
              </p>
              <p>
                La nostra base estratègica al Polígon Industrial Zona Franca de Barcelona ens connecta en menys de
                10 minuts amb els principals eixos viaris (AP-7, A-2, C-32), facilitant sortides diàries cap a
                Madrid, València, Saragossa, França i el centre d'Europa.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#8A6305] font-mono tabular-nums">
                  +350
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">Tràilers & Camions</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-neutral-950 font-mono tabular-nums">
                  24h-48h
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">Rutes Peninsulars</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#8A6305] font-mono tabular-nums">
                  CMR
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">Garantit Europa</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-950 text-white border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-[#F5D061] mb-3 font-bold">
                Estàndards de Qualitat Viària
              </div>
              <h4 className="text-lg font-bold text-white mb-4">
                Seguretat i sostenibilitat en cada quilòmetre
              </h4>
              <ul className="space-y-3.5 text-sm text-neutral-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>Flota pròpia equipada amb motors Euro 6d de baixes emissions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>Control de descansos de xòfers mitjançant tacògraf digital homologat</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>Plataformes elevadores Dhollandia de 2.000 kg per a descàrrega autònoma</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>Certificacions de qualitat en transport terrestre ISO 9001 i ISO 14001</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] hover:brightness-110 active:scale-[0.99] rounded-lg transition-all cursor-pointer text-center shadow-lg"
              >
                Consultar amb el Cap de Tràfic
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillar Cards on Clean White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-neutral-200/90 rounded-xl p-6 hover:border-[#D4AF37] transition-all shadow-md group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#8A6305] flex items-center justify-center mb-4 border border-amber-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-neutral-950 mb-2">{cred.title}</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{cred.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
