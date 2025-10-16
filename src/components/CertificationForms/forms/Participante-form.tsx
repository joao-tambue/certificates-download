import { useState } from "react";
import { Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { certificadoSimplesSchema, type CertificadoSimplesForm } from "../schemas";
import { api } from "../../../services/api";

type Props = { onClose: () => void };

export function ParticipanteForm({ onClose }: Props) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<CertificadoSimplesForm>({
    resolver: zodResolver(certificadoSimplesSchema),
  });

  const onSubmit = async (data: CertificadoSimplesForm) => {
    setIsDownloading(true);
    try {
      await api.post("/participants", data);
      alert("Certificado de Participante gerado com sucesso!");
      onClose();
    } catch {
      alert("Erro ao gerar o certificado.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {["name", "email"].map((field) => (
        <div key={field} className="flex flex-col items-start">
          <label className="text-sm font-medium mb-1">
            {field === "name" ? "Nome Completo" : "Email"}
          </label>
          <input
            {...register(field as keyof CertificadoSimplesForm)}
            type={field === "email" ? "email" : "text"}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            placeholder={field === "name" ? "Digite seu nome completo" : "Digite seu email"}
          />
          {errors[field as keyof CertificadoSimplesForm] && (
            <small className="text-red-500 mt-1">
              {errors[field as keyof CertificadoSimplesForm]?.message}
            </small>
          )}
        </div>
      ))}

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
