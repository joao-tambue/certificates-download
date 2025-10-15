import { useState } from "react";
import { X } from "lucide-react";
import { CertificateOptionCard } from "./CertificateOptionCard";
import { MelhorProjetoForm } from "./MelhorProjetoForm";
import { CertificadoSimplesForm } from "./CertificadoSimplesForm";

export function CertificationFormWidget() {
  const [activeCard, setActiveCard] = useState<"projeto" | "expositor" | "participante" | "stand" | null>(null);

  const closeCard = () => setActiveCard(null);

  const titles = {
    projeto: "Certificado de Melhor Projeto",
    expositor: "Certificado de Melhor Expositor",
    participante: "Certificado de Participante",
    stand: "Certificado de Melhor Stand",
  } as const;

  return (
    <div className="w-full">
      {!activeCard ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CertificateOptionCard title="Melhor Projeto" color="bg-emerald-500 hover:bg-emerald-600" onClick={() => setActiveCard("projeto")} />
          <CertificateOptionCard title="Melhor Expositor" color="bg-blue-500 hover:bg-blue-600" onClick={() => setActiveCard("expositor")} />
          <CertificateOptionCard title="Participante" color="bg-purple-500 hover:bg-purple-600" onClick={() => setActiveCard("participante")} />
          <CertificateOptionCard title="Melhor Stand" color="bg-orange-500 hover:bg-orange-600" onClick={() => setActiveCard("stand")} />
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">{titles[activeCard]}</h3>
            <button onClick={closeCard} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>

          {activeCard === "projeto" && <MelhorProjetoForm onClose={closeCard} />}
          {["expositor", "participante", "stand"].includes(activeCard) && (
            <CertificadoSimplesForm type={activeCard as "expositor" | "participante" | "stand"} onClose={closeCard} />
          )}
        </div>
      )}
    </div>
  );
}
