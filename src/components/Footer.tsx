import React from 'react';
import { BrandLogo } from './Navbar';
import { LegalModalType } from './LegalModal';
import { NavSection } from '../types';
import { AlertTriangle, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onNavigate: (section: NavSection) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onNavigate,
  onOpenQuote,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-800 text-neutral-400 text-sm">
      {/* Avís Acadèmic Obligatori Requerit */}
      <div className="bg-amber-950/40 border-b border-[#E5C158]/20 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-xs text-[#F5D061] font-semibold">
          <AlertTriangle className="w-4 h-4 shrink-0 text-[#E5C158]" />
          <span>
            ⚠️ <strong>Projecte Acadèmic:</strong> Aquesta és una web de prova generada exclusivament en l'àmbit estudiantil.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" />

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Operador especialista en càrregues completes (FTL), grupatge industrial (LTL) i lliuraments exprés
              a Espanya i tota la Unió Europea amb base a la Zona Franca de Barcelona.
            </p>
            <div className="pt-2 text-xs text-neutral-500 font-mono">
              Base Logística Zona Franca Sector C · 08040 Barcelona · Conveni CMR & LOTT
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-300 font-semibold">
              Menú de Navegació
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('inici')}
                  className="hover:text-[#F5D061] transition-colors cursor-pointer text-left"
                >
                  Inici
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('serveis')}
                  className="hover:text-[#F5D061] transition-colors cursor-pointer text-left"
                >
                  Serveis de Carretera
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tarifes')}
                  className="hover:text-[#F5D061] transition-colors cursor-pointer text-left"
                >
                  Tarifes Orientatives
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quisom')}
                  className="hover:text-[#F5D061] transition-colors cursor-pointer text-left"
                >
                  Qui Som
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacte')}
                  className="hover:text-[#F5D061] transition-colors cursor-pointer text-left"
                >
                  Contacte i Cotització
                </button>
              </li>
            </ul>
          </div>

          {/* Operational Services Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-300 font-semibold">
              Divisions de Tràfic
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="text-neutral-300">🚛 Transport Nacional per Carretera (24h/48h)</div>
              <div className="text-neutral-300">🇪🇺 Transport Internacional per Carretera (CMR)</div>
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-black bg-gradient-to-r from-[#FFF0A8] via-[#E5C158] to-[#D4AF37] hover:brightness-110 rounded-lg transition-all cursor-pointer"
                >
                  Calcular Pressupost Immediat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 Astra Nourweey Transports. Tots els drets reservats.
          </div>

          {/* Enllaços Legals (Ficticis) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenLegal('avis-legal')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Avís Legal (Condicions General de Transport LOTT / CMR)
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('privacitat')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacitat
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Cookies
            </button>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Tornar a dalt"
            >
              <span>Dalt</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
