import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, ShieldCheck, AlertCircle, RefreshCw, Truck } from 'lucide-react';
import { QuoteFormData } from '../types';

interface ContactSectionProps {
  initialData?: {
    service?: string;
    route?: string;
    estimate?: string;
    details?: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    nameOrCompany: '',
    contactEmailOrPhone: '',
    originPoint: '',
    destinationPoint: '',
    cargoDetails: '',
    serviceType: 'Transport Nacional de Carretera',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<null | {
    referenceCode: string;
    submittedAt: string;
    data: QuoteFormData;
  }>(null);

  // Prepopulate if transferred from rates table or service card
  useEffect(() => {
    if (initialData) {
      if (initialData.route && initialData.route.includes('➔')) {
        const parts = initialData.route.split('➔').map((s) => s.trim());
        setFormData((prev) => ({
          ...prev,
          originPoint: parts[0] || prev.originPoint,
          destinationPoint: parts[1] || prev.destinationPoint,
          serviceType: initialData.service || prev.serviceType,
          cargoDetails: initialData.estimate ? `Estimació de referència: ${initialData.estimate}` : prev.cargoDetails,
        }));
      } else if (initialData.details) {
        setFormData((prev) => ({
          ...prev,
          cargoDetails: initialData.details || prev.cargoDetails,
          serviceType: initialData.service || prev.serviceType,
        }));
      }
    }
  }, [initialData]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nameOrCompany.trim()) {
      newErrors.nameOrCompany = "Cal introduir el nom personal o el de l'empresa (ex. TransLogix S.L.).";
    }

    if (!formData.contactEmailOrPhone.trim()) {
      newErrors.contactEmailOrPhone = 'Cal introduir un correu electrònic o telèfon de contacte.';
    }

    if (!formData.originPoint.trim()) {
      newErrors.originPoint = "Indiqueu el punt d'origen o codi postal (ex. Barcelona).";
    }

    if (!formData.destinationPoint.trim()) {
      newErrors.destinationPoint = 'Indiqueu el punt de destí (ex. Lió, França).';
    }

    if (!formData.cargoDetails.trim()) {
      newErrors.cargoDetails = 'Descriviu la càrrega (ex. 4 Palets europeus, 1.200 kg total).';
    } else if (formData.cargoDetails.trim().length < 5) {
      newErrors.cargoDetails = 'Detalleu mínimament els palets, pes o dimensions.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `ASTRA-2026-BCN-${randomSuffix}`;
      const now = new Date().toLocaleTimeString('ca-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });

      setSubmissionSuccess({
        referenceCode: generatedRef,
        submittedAt: now,
        data: { ...formData },
      });
      setIsSubmitting(false);
    }, 650);
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setFormData({
      nameOrCompany: '',
      contactEmailOrPhone: '',
      originPoint: '',
      destinationPoint: '',
      cargoDetails: '',
      serviceType: 'Transport Nacional de Carretera',
    });
    setErrors({});
  };

  return (
    <section id="contacte" className="py-20 md:py-28 bg-white border-t border-neutral-200 text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-bold tracking-wide text-[#8A6305] uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            Gestió de Tràfic & Cotitzacions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
            Demana el teu pressupost de transport per carretera en menys de 2 hores.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            L'equip de gestió de tràfic d'<strong className="text-neutral-950">Astra Nourweey Transports</strong> analitza
            la teva ruta i disponibilitat de flota per oferir-te la millor tarifa ajustada a les teves necessitats operàries.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Dades d'Atenció i Base Logística (Dark Contrast Card) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-950 text-white border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white border-b border-neutral-800 pb-4">
                Dades d'Atenció i Base Logística
              </h3>

              <div className="space-y-6 text-sm">
                {/* 📍 Base Logística Central */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#E5C158] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                      Base Logística Central
                    </div>
                    <p className="text-white font-semibold leading-relaxed">
                      Polígon Industrial Zona Franca, Sector C<br />
                      08040 Barcelona, Espanya
                    </p>
                    <span className="text-xs text-neutral-400 mt-1 block">
                      Connexió directa amb Ronda del Litoral i autopista AP-7
                    </span>
                  </div>
                </div>

                {/* 📞 Telèfon de Tràfic i Rutes */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#E5C158] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                      Telèfon de Tràfic i Rutes
                    </div>
                    <div className="space-y-1">
                      <a
                        href="tel:+34931234567"
                        className="text-white hover:text-[#E5C158] transition-colors font-mono font-bold text-base block"
                      >
                        +34 931 234 567
                      </a>
                      <a
                        href="tel:+34600000000"
                        className="text-neutral-300 hover:text-[#E5C158] transition-colors font-mono text-sm block"
                      >
                        +34 600 000 000 (Guàrdia Tràfic 24h)
                      </a>
                    </div>
                  </div>
                </div>

                {/* ✉️ Correu de Cotitzacions */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#E5C158] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                      Correu de Cotitzacions
                    </div>
                    <a
                      href="mailto:trafic@astranourweey.com"
                      className="text-white hover:text-[#E5C158] transition-colors font-mono font-semibold"
                    >
                      trafic@astranourweey.com
                    </a>
                    <span className="text-xs text-neutral-400 mt-0.5 block">
                      Resposta formal de cotització en menys de 2 hores
                    </span>
                  </div>
                </div>
              </div>

              {/* Operating Info Banner */}
              <div className="pt-4 border-t border-neutral-800 space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E5C158]" />
                  <span>Departament de Càrregues: Dl a Dv de 07:30 a 20:00 h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#E5C158]" />
                  <span>Seguiment GPS de tràilers i albarans: Servei permanent 24/7</span>
                </div>
              </div>
            </div>

            {/* Commitment Box */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-3 shadow-sm">
              <span className="text-[#8A6305] text-lg font-bold">✓</span>
              <span>
                <strong>Compromís Astra Nourweey:</strong> Retorns freqüents des dels principals corredors
                francesos, alemanys i peninsulars amb tarifes altament optimitzades.
              </span>
            </div>
          </div>

          {/* Right Column: Formulari de Calculadora / Cotització (Crisp White Container) */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-50 border border-neutral-200/90 rounded-2xl p-6 sm:p-10 shadow-xl">
              {submissionSuccess ? (
                /* Success Confirmation View */
                <div className="space-y-6 text-center py-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFF4B8] via-[#E5C158] to-[#AA7C11] p-1 flex items-center justify-center mx-auto text-black shadow-md">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                      Sol·licitud de Pressupost Registrada!
                    </h3>
                    <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                      El cap de tràfic assignat a la teva zona està calculant la millor combinació de flota i retorn per a la teva ruta.
                    </p>
                  </div>

                  {/* Receipt Box */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-5 text-left text-xs space-y-2.5 max-w-lg mx-auto shadow-sm">
                    <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                      <span className="text-neutral-500 uppercase font-mono font-semibold">Número d'Expedient Tràfic</span>
                      <span className="font-mono font-bold text-[#8A6305] text-sm">
                        {submissionSuccess.referenceCode}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Sol·licitant / Empresa:</span>
                      <span className="text-neutral-950 font-bold">{submissionSuccess.data.nameOrCompany}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Contacte:</span>
                      <span className="text-neutral-950 font-mono font-semibold">{submissionSuccess.data.contactEmailOrPhone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Itinerari:</span>
                      <span className="text-neutral-950 font-bold">
                        {submissionSuccess.data.originPoint} ➔ {submissionSuccess.data.destinationPoint}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-neutral-200">
                      <span className="text-neutral-500 block mb-1 font-semibold">Càrrega descrita:</span>
                      <p className="text-neutral-800 bg-neutral-50 p-2.5 rounded-lg border border-neutral-200 font-mono text-[11px]">
                        {submissionSuccess.data.cargoDetails}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] hover:brightness-105 rounded-lg transition-all cursor-pointer shadow-md"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Calcular una altra ruta</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-neutral-200 pb-4">
                    <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                      Calculadora / Sol·licitud de Cotització
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      Emplena els punts de recollida i lliurament per obtenir la teva tarifa en menys de 2 hores.
                    </p>
                  </div>

                  {/* Camp 1: Nom o Empresa */}
                  <div>
                    <label
                      htmlFor="nameOrCompany"
                      className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                    >
                      Nom o Empresa <span className="text-[#8A6305]">*</span>
                    </label>
                    <input
                      type="text"
                      id="nameOrCompany"
                      value={formData.nameOrCompany}
                      onChange={(e) => {
                        setFormData({ ...formData, nameOrCompany: e.target.value });
                        if (errors.nameOrCompany) setErrors({ ...errors, nameOrCompany: '' });
                      }}
                      placeholder="ex. TransLogix S.L."
                      className={`w-full bg-white border ${
                        errors.nameOrCompany ? 'border-red-500' : 'border-neutral-300'
                      } rounded-lg px-4 py-2.5 text-sm text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37] shadow-sm transition-colors`}
                    />
                    {errors.nameOrCompany && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.nameOrCompany}</span>
                      </p>
                    )}
                  </div>

                  {/* Camp 2: Correu Electrònic o Telèfon */}
                  <div>
                    <label
                      htmlFor="contactEmailOrPhone"
                      className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                    >
                      Correu Electrònic o Telèfon de Contacte <span className="text-[#8A6305]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactEmailOrPhone"
                      value={formData.contactEmailOrPhone}
                      onChange={(e) => {
                        setFormData({ ...formData, contactEmailOrPhone: e.target.value });
                        if (errors.contactEmailOrPhone) setErrors({ ...errors, contactEmailOrPhone: '' });
                      }}
                      placeholder="ex. contacte@empresa.com / 600 000 000"
                      className={`w-full bg-white border ${
                        errors.contactEmailOrPhone ? 'border-red-500' : 'border-neutral-300'
                      } rounded-lg px-4 py-2.5 text-sm text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37] shadow-sm transition-colors`}
                    />
                    {errors.contactEmailOrPhone && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.contactEmailOrPhone}</span>
                      </p>
                    )}
                  </div>

                  {/* Grid: Punt d'Origen & Punt de Destí */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="originPoint"
                        className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                      >
                        Punt d'Origen <span className="text-[#8A6305]">*</span>
                      </label>
                      <input
                        type="text"
                        id="originPoint"
                        value={formData.originPoint}
                        onChange={(e) => {
                          setFormData({ ...formData, originPoint: e.target.value });
                          if (errors.originPoint) setErrors({ ...errors, originPoint: '' });
                        }}
                        placeholder="ex. Barcelona"
                        className={`w-full bg-white border ${
                          errors.originPoint ? 'border-red-500' : 'border-neutral-300'
                        } rounded-lg px-4 py-2.5 text-sm text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37] shadow-sm transition-colors`}
                      />
                      {errors.originPoint && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.originPoint}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="destinationPoint"
                        className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                      >
                        Punt de Destí <span className="text-[#8A6305]">*</span>
                      </label>
                      <input
                        type="text"
                        id="destinationPoint"
                        value={formData.destinationPoint}
                        onChange={(e) => {
                          setFormData({ ...formData, destinationPoint: e.target.value });
                          if (errors.destinationPoint) setErrors({ ...errors, destinationPoint: '' });
                        }}
                        placeholder="ex. Lió, França"
                        className={`w-full bg-white border ${
                          errors.destinationPoint ? 'border-red-500' : 'border-neutral-300'
                        } rounded-lg px-4 py-2.5 text-sm text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37] shadow-sm transition-colors`}
                      />
                      {errors.destinationPoint && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.destinationPoint}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Camp 5: Detalls de la Càrrega */}
                  <div>
                    <label
                      htmlFor="cargoDetails"
                      className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                    >
                      Detalls de la Càrrega <span className="text-[#8A6305]">*</span>
                    </label>
                    <textarea
                      id="cargoDetails"
                      rows={3}
                      value={formData.cargoDetails}
                      onChange={(e) => {
                        setFormData({ ...formData, cargoDetails: e.target.value });
                        if (errors.cargoDetails) setErrors({ ...errors, cargoDetails: '' });
                      }}
                      placeholder="ex. 4 Palets europeus, 1.200 kg total (Tauliner o Frigorífic, càrrega lateral...)"
                      className={`w-full bg-white border ${
                        errors.cargoDetails ? 'border-red-500' : 'border-neutral-300'
                      } rounded-lg px-4 py-2.5 text-sm text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37] shadow-sm transition-colors leading-relaxed`}
                    />
                    {errors.cargoDetails && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.cargoDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* Botó d'enviament: [ Calcular i Rebre Cotització ] */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-black bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] hover:brightness-105 active:scale-[0.99] disabled:opacity-75 rounded-lg shadow-xl shadow-[#E5C158]/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Calculant disponibilitat de flota...</span>
                        </>
                      ) : (
                        <>
                          <span>Calcular i Rebre Cotització</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-neutral-500 text-center mt-3">
                      Assignació directa a l'oficina de tràfic d'Astra Nourweey. Compromís de resposta en menys de 120 minuts.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
