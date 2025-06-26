import { CheckCircle, Clock } from "lucide-react";

export function ActivityDetails() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-emerald-50 to-green-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
          <div className="bg-emerald-600 px-8 py-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <Clock className="h-6 w-6 mr-3" />
              Detalhes da Actividade Educacional
            </h3>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Objectivos Alcançados
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    Desenvolvimento de competências educacionais
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    Fortalecimento da comunidade escolar
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    Promoção do aprendizado colaborativo
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    Crescimento pessoal e acadêmico
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Impacto Educacional
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Esta actividade proporcionou uma experiência transformadora,
                  conectando teoria e prática de forma significativa e
                  promovendo o desenvolvimento integral dos participantes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  O Colégio Árvore da Felicidade reconhece e valoriza o
                  comprometimento de cada participante em buscar excelência
                  educacional e crescimento contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
