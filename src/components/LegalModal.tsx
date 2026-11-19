import React from 'react';
import { X, FileText, Lock, Cookie, ShieldCheck } from 'lucide-react';

export type LegalModalType = 'avis-legal' | 'privacitat' | 'cookies' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    'avis-legal': {
      title: 'Avís Legal (Condicions Generals de Transport LOTT / CMR)',
      icon: FileText,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <div className="p-3 bg-amber-950/40 border border-[#E5C158]/30 rounded-lg text-[#F5D061] text-xs">
            <strong>⚠️ Projecte Acadèmic:</strong> Aquesta és una web de prova generada exclusivament en l'àmbit estudiantil. Totes les empreses, dades de tràfic i tarifes són simulades.
          </div>
          <h4 className="font-bold text-white text-base">1. Marc Normatiu de Transport per Carretera</h4>
          <p>
            Tots els transports nacionals es regeixen estrictament per la Llei 16/1987 d'Ordenació dels Transports Terrestres (LOTT) i la Llei 15/2009 del contracte de transport terrestre de mercaderies. Els transports internacionals es troben sotmesos al Conveni relatiu al contracte de transport internacional de mercaderies per carretera (Conveni CMR de Ginebra de 1956).
          </p>
          <h4 className="font-bold text-white text-base">2. Responsabilitat i Assegurança de Càrrega</h4>
          <p>
            La responsabilitat del transportista per pèrdua o avaria es calcula segons els límits legals establerts: per a transport nacional segons IPREM/dia/kg brut (LOTT), i per a internacional CMR fins a 8,33 Drets Especials de Gir (DEG) per quilogram brut de mercaderia afectada. Es pot contractar cobertura a tot risc declarada de valor prèvia petició expressa.
          </p>
          <h4 className="font-bold text-white text-base">3. Carta de Port (CMR) i Albarà Digital</h4>
          <p>
            L'emissió del document de control o e-CMR telemàtic dóna fe de la recepció de la mercaderia en aparent bon estat i de les condicions contractuals de transport pactades entre carregador i transportista.
          </p>
        </div>
      ),
    },
    'privacitat': {
      title: 'Política de Privacitat',
      icon: Lock,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <div className="p-3 bg-amber-950/40 border border-[#E5C158]/30 rounded-lg text-[#F5D061] text-xs">
            <strong>Protecció de Dades en Entorn Acadèmic:</strong> Les dades de cotització no s'emmagatzemen en bases de dades reals ni es cedeixen comercialment.
          </div>
          <h4 className="font-bold text-white text-base">1. Responsable del Tractament</h4>
          <p>
            Astra Nourweey Transports (Entorn de prova estudiantil), Base Logística Polígon Industrial Zona Franca Sector C, 08040 Barcelona. Correu de contacte: trafic@astranourweey.com.
          </p>
          <h4 className="font-bold text-white text-base">2. Finalitat de les Dades</h4>
          <p>
            Elaborar càlculs orientatius de flets terrestres, gestionar rutes simulades i prestar assistència tècnica als exercicis d'aprenentatge.
          </p>
          <h4 className="font-bold text-white text-base">3. Drets dels Usuaris</h4>
          <p>
            Pots exercir els teus drets d'accés, rectificació i supressió adreçant-te a l'adreça de correu indicada.
          </p>
        </div>
      ),
    },
    'cookies': {
      title: 'Política de Cookies',
      icon: Cookie,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 text-xs">
            Aquest portal utilitza cookies estrictament tècniques destinades al funcionament del simulador de rutes i quilometratge.
          </div>
          <h4 className="font-bold text-white text-base">Tipus de Cookies:</h4>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
            <li><strong>Cookies Tècniques Necessàries:</strong> Permeten navegar entre pestanyes i carregar taules de tarifes sense recàrrega brusca.</li>
            <li><strong>Cookies de Sessió:</strong> Conserven la selecció de distància temporal en la calculadora per km.</li>
            <li><strong>Sense Publicitat de Tercers:</strong> No es recullen galetes publicitàries ni rastrejadors externs.</li>
          </ul>
        </div>
      ),
    },
  };

  const active = contentMap[type];
  const Icon = active.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-white">
        <div className="flex items-center justify-between px-6 py-4 bg-black border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-gradient-to-r from-[#FFF0A8] to-[#E5C158] text-black rounded-lg">
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">{active.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
            aria-label="Tancar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[65vh] overflow-y-auto">{active.body}</div>

        <div className="px-6 py-4 bg-black border-t border-neutral-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FFF0A8] via-[#E5C158] to-[#D4AF37] hover:brightness-110 rounded-lg transition-colors cursor-pointer"
          >
            Entès i Tancar
          </button>
        </div>
      </div>
    </div>
  );
};
