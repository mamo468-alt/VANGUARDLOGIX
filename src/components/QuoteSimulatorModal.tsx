import React, { useState, useEffect } from 'react';
import { X, Calculator, ArrowRight } from 'lucide-react';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  onTransferToContact: (data: { service: string; route: string; estimate: string; details: string }) => void;
}

export const QuoteSimulatorModal: React.FC<QuoteSimulatorModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  onTransferToContact,
}) => {
  const [serviceType, setServiceType] = useState<string>(
    preselectedService || 'Transport Nacional per Carretera'
  );
  const [origin, setOrigin] = useState<string>('Barcelona');
  const [destination, setDestination] = useState<string>('Madrid');
  const [truckType, setTruckType] = useState<string>('Tráiler Lona / Tauliner 24t');
  const [pallets, setPallets] = useState<string>('33 europalets (Càrrega Completa FTL)');
  const [hasDoubleDriver, setHasDoubleDriver] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedService) {
      if (preselectedService.toLowerCase().includes('internacional')) {
        setServiceType('Transport Internacional per Carretera (Càrrega Completa FTL)');
        setDestination('Lió, França');
      } else {
        setServiceType('Transport Nacional per Carretera (Càrrega Completa FTL)');
        setDestination('Madrid');
      }
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  // Calculation heuristic strictly for National & International road transport
  const getEstimation = () => {
    const isInternational =
      serviceType.includes('Internacional') ||
      destination.includes('França') ||
      destination.includes('Lió') ||
      destination.includes('París') ||
      destination.includes('Europa');
    const isGroupage =
      serviceType.includes('LTL') ||
      pallets.toLowerCase().includes('1 a 5') ||
      pallets.toLowerCase().includes('grupatge');

    if (isInternational && isGroupage) {
      return {
        transit: '36h - 48h segons corredor europeu',
        rateRange: '350 € - 480 € (Sense IVA)',
        spec: 'Grupatge internacional per carretera amb gestió CMR inclosa.',
      };
    } else if (isInternational) {
      return {
        transit: hasDoubleDriver ? '24h - 36h (Doble xofer)' : '48h - 72h estàndard',
        rateRange: '1.450 € - 1.850 € (Sense IVA)',
        spec: 'Inclou peatges internacionals, e-CMR i seguiment GPS per carretera.',
      };
    } else if (isGroupage) {
      return {
        transit: '24h - 36h a tota la Península',
        rateRange: '250 € - 330 € (Sense IVA)',
        spec: 'Grupatge nacional per carretera amb sortides diàries directes.',
      };
    } else {
      return {
        transit: 'Lliurament directe en 24h',
        rateRange: '950 € - 1.200 € (Sense IVA)',
        spec: 'Camió complet nacional dedicat directe d\'origen a destí sense transbords.',
      };
    }
  };

  const est = getEstimation();

  const handleTransfer = () => {
    const summaryDetails = `Detalls de la Cotització de Carretera:
- Modalitat: ${serviceType}
- Itinerari: ${origin} ➔ ${destination}
- Semiremolc: ${truckType}
- Càrrega: ${pallets}
- Doble Conductor: ${hasDoubleDriver ? 'Sí (Ruta Exprés)' : 'No'}
- Estimació Orientativa: ${est.rateRange}`;

    onTransferToContact({
      service: serviceType,
      route: `${origin} ➔ ${destination}`,
      estimate: est.rateRange,
      details: summaryDetails,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-black border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#FFF0A8] via-[#E5C158] to-[#AA7C11] text-black">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Astra Nourweey · Simulador de Transport per Carretera
              </h3>
              <p className="text-xs text-neutral-400">
                Calcula paràmetres de ruta nacional o internacional i cost orientatiu immediat
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
            aria-label="Tancar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Service */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
              Tipus de Servei de Carretera
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E5C158]"
            >
              <option value="Transport Nacional per Carretera (Càrrega Completa FTL)">
                Transport Nacional per Carretera — Càrrega Completa (FTL)
              </option>
              <option value="Transport Nacional per Carretera (Grupatge LTL)">
                Transport Nacional per Carretera — Grupatge (LTL)
              </option>
              <option value="Transport Internacional per Carretera (Càrrega Completa FTL)">
                Transport Internacional per Carretera — Càrrega Completa (FTL)
              </option>
              <option value="Transport Internacional per Carretera (Grupatge LTL)">
                Transport Internacional per Carretera — Grupatge (LTL)
              </option>
            </select>
          </div>

          {/* Origen & Destinació */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Punt d'Origen
              </label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="ex. Barcelona"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E5C158]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Punt de Destí
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="ex. Madrid / Lió, França"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E5C158]"
              />
            </div>
          </div>

          {/* Semiremolc & Palets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Tipus de Semiremolc
              </label>
              <select
                value={truckType}
                onChange={(e) => setTruckType(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E5C158]"
              >
                <option value="Tráiler Lona / Tauliner 24t">Tráiler Lona / Tauliner 24t (Càrrega lateral)</option>
                <option value="Frigorífic Bi-Temperatura">Frigorífic Bi-Temperatura (Control fred)</option>
                <option value="Furgó Tancat de Seguretat">Furgó Tancat de Seguretat</option>
                <option value="Camió Rígid amb Plataforma">Camió Rígid amb Plataforma Elevadora</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Volum o Palets
              </label>
              <input
                type="text"
                value={pallets}
                onChange={(e) => setPallets(e.target.value)}
                placeholder="ex. 4 palets / 1.200 kg"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E5C158]"
              />
            </div>
          </div>

          {/* Double Driver Toggle */}
          <div className="flex items-center gap-3 pt-1">
            <input
              type="checkbox"
              id="modalDoubleDriver"
              checked={hasDoubleDriver}
              onChange={(e) => setHasDoubleDriver(e.target.checked)}
              className="w-4 h-4 rounded text-amber-500 focus:ring-[#E5C158] bg-neutral-900 border-neutral-700 cursor-pointer"
            />
            <label htmlFor="modalDoubleDriver" className="text-xs sm:text-sm text-neutral-300 cursor-pointer">
              Sol·licitar doble conductor per a trànsit directe non-stop (lliurament exprés)
            </label>
          </div>

          {/* Estimation Box */}
          <div className="bg-black border border-neutral-800 rounded-xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-2">
              <span className="font-mono text-[#F5D061] font-semibold">
                ESTIMACIÓ ORIENTATIVA DE TRÀFIC
              </span>
              <span className="font-mono text-neutral-400">Ruta: {origin} ➔ {destination}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-xs text-neutral-400 block">Temps de trànsit previst:</span>
                <span className="text-white font-semibold font-mono text-base text-[#F5D061]">
                  {est.transit}
                </span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block">Preu orientatiu de mercat:</span>
                <span className="text-white font-mono font-bold text-base">{est.rateRange}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 italic">
              ℹ️ {est.spec}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-black border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400">
            Els nostres caps de tràfic confirmen la disponibilitat en &lt; 2h.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel·lar
            </button>
            <button
              type="button"
              onClick={handleTransfer}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FFF0A8] via-[#E5C158] to-[#D4AF37] hover:brightness-110 active:scale-[0.99] rounded-lg transition-all cursor-pointer"
            >
              <span>Transferir a Cotització</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
