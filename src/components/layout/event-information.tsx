import { Award, Calendar, MapPin, Users } from "lucide-react";

export function EventInformation() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a Atividade
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma experiência educacional enriquecedora que promoveu aprendizado,
            crescimento pessoal e desenvolvimento de competências essenciais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
              <Calendar className="h-8 w-8 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Duração
            </h4>
            <p className="text-gray-600">
              Atividade intensiva de desenvolvimento educacional
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Participantes
            </h4>
            <p className="text-gray-600">
              Comunidade educacional engajada e dedicada
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
              <MapPin className="h-8 w-8 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Local</h4>
            <p className="text-gray-600">Colégio Árvore da Felicidade/</p>
            <p className="text-gray-600">Mediateca ZeDu</p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
              <Award className="h-8 w-8 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Certificação
            </h4>
            <p className="text-gray-600">
              Reconhecimento oficial de participação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
