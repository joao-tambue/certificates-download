import { Footer } from "./components/layout/footer";
import { Award, CheckCircle, FileText } from "lucide-react";
import { ActivityDetails } from "./components/layout/activity-details";
import { EventInformation } from "./components/layout/event-information";
import { CertificationFormWidget } from "./components/CertificationForms/cerficiation-form-widget";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/logo-caf.png"
                alt="Colégio Árvore da Felicidade"
                className="h-16 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-emerald-800">
                  Colégio Árvore da Felicidade
                </h1>
                <p className="text-emerald-600 text-sm">
                  Obtenha a sua certificação digital.
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-emerald-700">
              <Award className="h-5 w-5" />
              <span className="font-medium">Certificação Digital</span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-lg font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            <span>Mega Feira de Ciência e Tecnologia</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Baixe Seu
            <span className="text-emerald-600 block">Certificado</span>
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Parabéns por sua participação! Seu certificado digital está pronto
            para download. Reconhecemos seu comprometimento e dedicação durante
            nossa actividade educacional.
          </p>

          <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-6">
              <FileText className="h-8 w-8 text-emerald-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Obter Certificado
            </h3>
            <CertificationFormWidget />
          </div>
        </div>
      </section>

      <EventInformation />

      <ActivityDetails />

      <Footer />
    </div>
  );
}

export default App;
