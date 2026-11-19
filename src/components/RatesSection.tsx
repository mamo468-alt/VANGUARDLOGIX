import React, { useState } from 'react';
import { Calculator, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { RoadRateItem } from '../types';

interface RatesSectionProps {
  onSelectRouteForQuote: (routeData: { service: string; route: string; estimate: string }) => void;
}

export const RatesSection: React.FC<RatesSectionProps> = ({ onSelectRouteForQuote }) => {
  const [customDistanceKm, setCustomDistanceKm] = useState<number>(650);
  const [customModality, setCustomModality] = useState<'peninsular' | 'internacional'>('peninsular');

  const referenceRates: RoadRateItem[] = [
    {
      id: 'r1',
      serviceType: 'Grupatge (1 a 5 Palets)',
      route: 'Barcelona ➔ Madrid',
      distance: '~620 km',
      distanceKm: 620,
      priceRange: 'des de 250 € - 330 €',
      minPrice: 250,
      maxPrice: 330,
      transitHours: '24h - 36h',
    },
    {
      id: 'r2',
      serviceType: 'Camió Complet (Tráiler 24t)',
      route: 'Barcelona ➔ Madrid',
      distance: '~620 km',
      distanceKm: 620,
      priceRange: 'des de 950 € - 1.200 €',
      minPrice: 950,
      maxPrice: 1200,
      transitHours: 'Lliurament directe 24h',
    },
    {
      id: 'r3',
      serviceType: 'Grupatge Internacional',
      route: 'Barcelona ➔ Lió (Sud de França)',
      distance: '~640 km',
      distanceKm: 640,
      priceRange: 'des de 350 € - 480 €',
      minPrice: 350,
      maxPrice: 480,
      transitHours: '36h - 48h',
    },
    {
      id: 'r4',
      serviceType: 'Camió Complet Internacional',
      route: 'Barcelona ➔ Lió / París',
      distance: '~1.000 km',
      distanceKm: 1000,
      priceRange: 'des de 1.450 € - 1.850 €',
      minPrice: 1450,
      maxPrice: 1850,
      transitHours: '24h - 48h (Doble xofer)',
    },
  ];

  // Dynamic km calculator
  const calculateEstimate = () => {
    if (customModality === 'peninsular') {
      const min = Math.round(customDistanceKm * 1.20);
      const max = Math.round(customDistanceKm * 1.65);
      return { min, max, ratePerKm: '1,20 € - 1,65 € / km' };
    } else {
      const min = Math.round(customDistanceKm * 1.45);
      const max = Math.round(customDistanceKm * 1.90);
      return { min, max, ratePerKm: '1,45 € - 1,90 € / km' };
    }
  };

  const dynamicCalc = calculateEstimate();

  const handleApplyReferenceRoute = (rate: RoadRateItem) => {
    onSelectRouteForQuote({
      service: rate.serviceType,
      route: rate.route,
      estimate: `${rate.priceRange} (${rate.distance})`,
    });
  };

  const handleApplyCustomCalc = () => {
    onSelectRouteForQuote({
      service: customModality === 'peninsular' ? 'Càrrega Completa Peninsular (Tráiler)' : 'Transport Internacional Europeu',
      route: `Ruta personalitzada de ~${customDistanceKm} km`,
      estimate: `Aprox. ${dynamicCalc.min} € - ${dynamicCalc.max} € (Sense IVA)`,
    });
  };

  return (
    <section id="tarifes" className="py-20 md:py-28 bg-white border-t border-neutral-200 text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-bold tracking-wide text-[#8A6305] uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            Transparència Operativa
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Tarifes Orientatives de Transport per Carretera
          </h2>
          
          {/* Nota informativa requerida */}
          <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-950 flex items-start gap-3 shadow-sm">
            <Info className="w-5 h-5 text-[#8A6305] shrink-0 mt-0.5" />
            <p>
              <strong>Nota informativa:</strong> Aquestes tarifes són estimatives i poden variar segons l'evolució
              del preu del combustible, la tipologia de la mercaderia i la disponibilitat de retorns de flota.
            </p>
          </div>
        </div>

        {/* 📊 Taula de Tarifes de Referència per Ruta (Crisp White & Black Table with Gold Highlights) */}
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-xl mb-12">
          <div className="p-6 bg-neutral-50 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-black text-neutral-950 flex items-center gap-2">
                <span>📊 Taula de Tarifes de Referència per Ruta</span>
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Costos de sortida habituals des del Hub de Barcelona cap als corredors peninsulars i europeus
              </p>
            </div>
            <div className="text-xs font-mono font-bold text-[#8A6305] bg-amber-100/70 border border-amber-200 px-3 py-1.5 rounded-lg self-start sm:self-auto">
              ACTUALITZAT: SETMANA EN CURS
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-100/80 text-xs uppercase font-mono font-bold text-neutral-700 border-b border-neutral-200">
                <tr>
                  <th scope="col" className="px-6 py-4">Tipus de Servei</th>
                  <th scope="col" className="px-6 py-4">Ruta de Mostra</th>
                  <th scope="col" className="px-6 py-4">Distància Aprox.</th>
                  <th scope="col" className="px-6 py-4">Preu Orientatiu (Sense IVA)</th>
                  <th scope="col" className="px-6 py-4 text-right">Acció</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {referenceRates.map((rate) => (
                  <tr
                    key={rate.id}
                    className="hover:bg-amber-50/40 transition-colors group"
                  >
                    <td className="px-6 py-4 font-bold text-neutral-950 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                        <span>{rate.serviceType}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-neutral-700 font-semibold">
                      {rate.route}
                    </td>
                    <td className="px-6 py-4 text-neutral-500 font-mono tabular-nums">
                      {rate.distance}
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono font-black text-[#8A6305] text-base tabular-nums">
                        {rate.priceRange}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleApplyReferenceRoute(rate)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-black bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] hover:brightness-105 active:scale-95 rounded-lg shadow-sm transition-all cursor-pointer"
                      >
                        <span>Demanar aquesta ruta</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 💡 Estimació de Cost per Quilòmetre & Calculadora Dinàmica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Cost per KM Benchmark Cards */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-[#8A6305] font-bold mb-2">
                💡 Estimació de Cost per Quilòmetre
              </div>
              <h3 className="text-xl font-black text-neutral-950 tracking-tight mb-4">
                Bàrem Estàndard de Flets per Distància
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                El cost final per quilòmetre s'ajusta segons volum de càrrega, peatges internacionals d'autopista i semiremolc dedicat.
              </p>

              <div className="space-y-4">
                {/* Benchmark 1 */}
                <div className="p-4 bg-white border border-neutral-200 rounded-xl flex items-start justify-between gap-4 shadow-sm hover:border-[#D4AF37] transition-colors">
                  <div>
                    <h4 className="font-bold text-neutral-950 text-sm sm:text-base mb-1">
                      Càrrega Completa Peninsular (Tráiler)
                    </h4>
                    <p className="text-xs text-neutral-600">
                      Entre 1,20 € / km i 1,65 € / km segons el tipus de semiremolc (Tauliner estàndard vs Frigorífic).
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-black text-lg text-[#8A6305]">1,20 - 1,65 €</span>
                    <span className="text-[11px] text-neutral-500 block font-mono">per km</span>
                  </div>
                </div>

                {/* Benchmark 2 */}
                <div className="p-4 bg-white border border-neutral-200 rounded-xl flex items-start justify-between gap-4 shadow-sm hover:border-[#D4AF37] transition-colors">
                  <div>
                    <h4 className="font-bold text-neutral-950 text-sm sm:text-base mb-1">
                      Transport Internacional Europeu
                    </h4>
                    <p className="text-xs text-neutral-600">
                      Entre 1,45 € / km i 1,90 € / km incloent peatges d'autopista i gestió documental CMR.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-black text-lg text-[#8A6305]">1,45 - 1,90 €</span>
                    <span className="text-[11px] text-neutral-500 block font-mono">per km</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-600">
              ✓ Totes les operacions inclouen assegurança bàsica de mercaderies LOTT i conveni CMR internacional.
            </div>
          </div>

          {/* Right: Interactive Km Calculator Widget */}
          <div className="lg:col-span-5 bg-neutral-950 text-white border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-wider text-[#F5D061] font-bold flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  Calculadora Ràpida per Distància
                </span>
                <span className="text-xs text-neutral-400 font-mono">ESTIMADOR</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-4">
                Simula el teu cost orientatiu per km
              </h4>

              {/* Selector Peninsular / Internacional */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-900 rounded-lg mb-5 border border-neutral-800">
                <button
                  type="button"
                  onClick={() => setCustomModality('peninsular')}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    customModality === 'peninsular'
                      ? 'bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Peninsular (~1,20-1,65€)
                </button>
                <button
                  type="button"
                  onClick={() => setCustomModality('internacional')}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    customModality === 'internacional'
                      ? 'bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Internacional (~1,45-1,90€)
                </button>
              </div>

              {/* Range input */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Distància estimada de la ruta:</span>
                  <span className="font-mono font-bold text-[#F5D061] text-base">{customDistanceKm} km</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2500"
                  step="50"
                  value={customDistanceKm}
                  onChange={(e) => setCustomDistanceKm(Number(e.target.value))}
                  className="w-full accent-[#E5C158] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>100 km (Curta)</span>
                  <span>1.000 km (Europa)</span>
                  <span>2.500 km (Llarga)</span>
                </div>
              </div>

              {/* Live Calculation Output */}
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 mb-6">
                <div className="text-xs text-neutral-400 flex justify-between">
                  <span>Preu aproximat estimat:</span>
                  <span className="text-neutral-400">{dynamicCalc.ratePerKm}</span>
                </div>
                <div className="text-2xl font-black text-gold-gradient font-mono">
                  {dynamicCalc.min} € - {dynamicCalc.max} €
                </div>
                <div className="text-[11px] text-neutral-400 italic">
                  * Preus nets sense IVA, subjectes a confirmació de dates i pes total de la càrrega.
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleApplyCustomCalc}
              className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] hover:brightness-110 active:scale-[0.99] rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Demanar Pressupost d'aquesta Distància</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
