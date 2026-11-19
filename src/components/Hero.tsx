import React from 'react';
import { ArrowRight, Truck, ShieldCheck, MapPin, Clock, Route } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onScrollToRates: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onScrollToRates }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#070708] text-white">
      {/* Background Graphic Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient gold accent glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#E5C158]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTA System */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F5D061] uppercase flex items-center gap-1.5">
                <span>🚛 Especialistes en Transport per Carretera Nacional i Internacional</span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
              Portem la teva mercaderia a qualsevol punt{' '}
              <span className="text-gold-gradient">
                d'Espanya i Europa per carretera.
              </span>
            </h1>

            {/* Corporate Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8">
              Coberta completa en llarga i curta distància amb flota pròpia i associada. Gestionem càrregues
              completes (FTL), grupals (LTL) i transport d'urgència amb seguiment en temps real.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {/* Primary Action: Demanar Cotització (Gold Button) */}
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm md:text-base font-bold text-black bg-gradient-to-r from-[#FFF0A8] via-[#E5C158] to-[#D4AF37] hover:brightness-110 active:scale-[0.99] rounded-lg shadow-xl shadow-[#E5C158]/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
              >
                <span>Demanar Cotització</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Action: Consultar Tarifes */}
              <button
                type="button"
                onClick={onScrollToRates}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm md:text-base font-medium text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-[#E5C158]/60 rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                <span>Consultar Tarifes</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
                <span className="text-neutral-300">Conveni CMR & LOTT Garantit</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#E5C158]" />
                <span className="text-neutral-300">Flota Euro 6 Pròpia i Homologada</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E5C158]" />
                <span className="text-neutral-300">Doble conductor per rutes exprés</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-End Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              {/* Generated Image Asset */}
              <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="/src/assets/images/hero_road_freight_trucks_1793896346735.jpg"
                  alt="Camions de càrrega pesada Astra Nourweey Transports en ruta nacional i internacional"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* Live Dispatch Highway Card (Crisp White Card with Gold Highlights) */}
              <div className="p-5 bg-white text-neutral-950 border-t border-neutral-200 shadow-2xl">
                <div className="flex items-center justify-between text-xs text-neutral-600 mb-2">
                  <span className="font-mono uppercase tracking-wider text-[#8A6305] flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    FLOTA EN TRÀNSIT DIRECTE
                  </span>
                  <span className="font-mono text-neutral-500 font-semibold">GPS TELEMÀTIC</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-200">
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Ruta Peninsular Activa</p>
                    <p className="text-sm font-black text-neutral-950">Hub Barcelona ➔ Hub Madrid</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-neutral-500 font-medium">Temps de Trànsit</p>
                    <p className="text-sm font-mono font-black text-[#8A6305]">24h Garantides</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-neutral-600 font-medium">FTL Tráiler 24t & Grupatge LTL</span>
                  <button
                    onClick={onScrollToRates}
                    className="text-xs text-[#8A6305] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    Veure preu de la ruta
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Proof Metrics (Crisp White Surface Cards) */}
        <div className="mt-14 pt-10 border-t border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white text-neutral-950 border border-neutral-200 rounded-xl p-5 shadow-lg">
            <div className="text-2xl sm:text-3xl font-black text-[#8A6305] tracking-tight font-mono tabular-nums mb-1">
              +350
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              Unitats de flota disponibles (Tauliners, Frigorífics i Furgons)
            </p>
          </div>

          <div className="bg-white text-neutral-950 border border-neutral-200 rounded-xl p-5 shadow-lg">
            <div className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight font-mono tabular-nums mb-1">
              99.4%
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              Índex de puntualitat en finestres de descàrrega acordades
            </p>
          </div>

          <div className="bg-white text-neutral-950 border border-neutral-200 rounded-xl p-5 shadow-lg">
            <div className="text-2xl sm:text-3xl font-black text-[#8A6305] tracking-tight font-mono tabular-nums mb-1">
              24h / 48h
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              Lliuraments peninsulars directes porta a porta
            </p>
          </div>

          <div className="bg-white text-neutral-950 border border-neutral-200 rounded-xl p-5 shadow-lg">
            <div className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight font-mono tabular-nums mb-1">
              100%
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              CMR electrònic (e-CMR) i albarà digitalitzat immediat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
