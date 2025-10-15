import { useState } from "react";
import { Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { certificadoSimplesSchema } from "./schemas";
import type { CertificadoSimplesForm } from "./schemas";
import { api } from "../../services/api";

type Props = {
  onClose: () => void;
  type: "expositor" | "participante" | "stand";
};

export function CertificadoSimplesForm({ onClose, type }: Props) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<CertificadoSimplesForm>({
    resolver: zodResolver(certificadoSimplesSchema),
  });

  const getTitle = {
    expositor: "Melhor Expositor",
    participante: "Participante",
    stand: "Melhor Stand",
  }[type];

  const onSubmit = async (data: CertificadoSimplesForm) => {
    setIsDownloading(true);

    try {
      // Define o endpoint conforme o tipo de certificado
      let endpoint = "";
      switch (type) {
        case "expositor":
          endpoint = "/best-expo";
          break;
        case "participante":
          endpoint = "/participants";
          break;
        case "stand":
          endpoint = "/best-stand";
          break;
        default:
          endpoint = "/best-expo";
      }

      const payload = {
        name: data.name,
        email: data.email,
      };

      console.log("Enviando payload:", payload, "para", endpoint);

      const response = await api.post(endpoint, payload);

      console.log("Resposta da API:", response.data);
      alert(`Certificado de ${getTitle} gerado com sucesso!`);
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
      {["name", "email"].map((field) => (
        <div key={field} className="flex flex-col items-start">
          <label
            htmlFor={field}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {field === "name" ? "Nome Completo" : "Email"}
          </label>
          <input
            {...register(field as keyof CertificadoSimplesForm)}
            type={field === "email" ? "email" : "text"}
            id={field}
            placeholder={
              field === "email"
                ? "Digite seu email"
                : "Digite seu nome completo"
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
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
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
      >
        {isDownloading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          </>
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
