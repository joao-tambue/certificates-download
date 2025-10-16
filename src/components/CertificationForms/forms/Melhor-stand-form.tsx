import { useState } from "react";
import { Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { melhorStandSchema, type MelhorStandForm } from "../schemas";
import { api } from "../../../services/api";

type Props = { onClose: () => void };

export function MelhorStandForm({ onClose }: Props) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<MelhorStandForm>({
    resolver: zodResolver(melhorStandSchema),
  });

  const onSubmit = async (data: MelhorStandForm) => {
    setIsDownloading(true);
    try {
      await api.post("/best-stand", data);
      alert("Certificado de Melhor Stand gerado com sucesso!");
      onClose();
    } catch {
      alert("Erro ao gerar o certificado.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col items-start">
        <label className="text-sm font-medium mb-1">Nome Completo</label>
        <input
          {...register("name")}
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
          placeholder="Nome do grupo"
        />
        {errors.name && <small className="text-red-500">{errors.name.message}</small>}
      </div>

      <div className="flex flex-col items-start">
        <label className="text-sm font-medium mb-1">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
          placeholder="Digite seu email"
        />
        {errors.email && <small className="text-red-500">{errors.email.message}</small>}
      </div>

      <div className="flex flex-col items-start">
        <label className="text-sm font-medium mb-1">Classe</label>
        <input 
          {...register("class")}
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
           placeholder="Ex: 12ª"
           />
      </div>

      <div className="flex flex-col items-start">
        <label className="text-sm font-medium mb-1">Turma</label>
        <select
          {...register("turma")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-600 focus:border-emerald-700"
        >
          <option value="">Selecione uma turma</option>
          <option value="ID">ID</option>
          <option value="IB">IB</option>
          <option value="IF">IF</option>
          <option value="EE">EE</option>
          <option value="ET">ET</option>
        </select>
        {errors.turma && <small className="text-red-500">{errors.turma.message}</small>}
      </div>

      <button
        type="submit"
        disabled={isDownloading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
      >
        {isDownloading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        ) : (
          <>
            <Download className="h-5 w-5" />
            <span>Emitir Certificado</span>
          </>
        )}
      </button>
    </form>
  );
}
