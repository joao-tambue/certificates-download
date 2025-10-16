import { useState } from "react";
import { X } from "lucide-react";
import { CertificateOptionCard } from "./Certificate-option-card";
import { MelhorProjetoForm } from "./forms/Melhor-projeto-form";
import { MelhorExpositorForm } from "./forms/melhor-expositor-form";
import { ParticipanteForm } from "./forms/Participante-form";
import { MelhorStandForm } from "./forms/Melhor-stand-form";

export function CertificationFormWidget() {
  const [activeCard, setActiveCard] = useState<
    "projeto" | "expositor" | "participante" | "stand" | null
  >(null);

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
        <div className="py-6 w-full max-w-[500px] mx-auto transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">{titles[activeCard]}</h3>
            <button onClick={closeCard} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>

          {activeCard === "projeto" && <MelhorProjetoForm onClose={closeCard} />}
          {activeCard === "expositor" && <MelhorExpositorForm onClose={closeCard} />}
          {activeCard === "participante" && <ParticipanteForm onClose={closeCard} />}
          {activeCard === "stand" && <MelhorStandForm onClose={closeCard} />}
        </div>
      )}
    </div>
  );
}
