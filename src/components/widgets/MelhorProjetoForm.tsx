import { useState } from "react";
import { Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { melhorProjetoSchema } from "./schemas";
import type { MelhorProjetoForm } from "./schemas";
import { api } from "../../services/api";

export function MelhorProjetoForm({ onClose }: { onClose: () => void }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<MelhorProjetoForm>({
    resolver: zodResolver(melhorProjetoSchema),
  });

  const onSubmit = async (data: MelhorProjetoForm) => {
    setIsDownloading(true);

    try {
      const payload = {
        name: data.name,
        classe: data.class,
        curso: data.course,
        email: data.email,
      };

      const response = await api.post("/best-project", payload);

      console.log("Resposta da API:", response.data);
      alert("Certificado gerado com sucesso!");
      onClose();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Erro ao enviar dados:", error.message);
    } else {
        console.error("Erro desconhecido:", error);
    }
    alert("Erro ao gerar o certificado. Tente novamente.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {[
        { id: "name", label: "Nome Completo", type: "text", placeholder: "Digite seu nome completo" },
        { id: "email", label: "Email", type: "email", placeholder: "Digite seu email" },
        { id: "class", label: "Classe", type: "text", placeholder: "Ex: 12ª Classe" },
      ].map(field => (
        <div key={field.id} className="flex flex-col items-start">
          <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
          <input
            {...register(field.id as keyof MelhorProjetoForm)}
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          />
          {errors[field.id as keyof MelhorProjetoForm] && (
            <small className="text-red-500 mt-1">{errors[field.id as keyof MelhorProjetoForm]?.message}</small>
          )}
        </div>
      ))}

      <div className="flex flex-col items-start">
        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Curso</label>
        <select
          {...register("course")}
          id="course"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
        >
          <option value="">Selecione um curso</option>
          <option value="Informática">Informática</option>
          <option value="Eletrônica">Electronica</option>
        </select>
        {errors.course && <small className="text-red-500 mt-1">{errors.course.message}</small>}
      </div>

      <button
        type="submit"
        disabled={isDownloading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
      >
        {isDownloading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          </>
        ) : (
          <>
            <Download className="h-5 w-5" />
            <span>Baixar Certificado</span>
          </>
        )}
      </button>
    </form>
  );
}
