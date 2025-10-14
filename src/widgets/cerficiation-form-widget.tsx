import { useState } from "react";
import { Download } from "lucide-react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WarningMessage } from "../components/warning-message";
import { SuccessMessage } from "../components/success-message";

type Message = {
  message: string;
  status: "WARNING" | "SUCCESS" | string;
};

const downloadCertificationSchema = z.object({
  email: z.string().email("Email inválido"),
  name: z.string().min(3, "Nome precisa ter no mínimo 3 caracteres"),
});

type CertificationForm = z.infer<typeof downloadCertificationSchema>;

export function CertificationFormWidget() {
  const [message] = useState<Message>({
    status: "",
    message: "",
  });
  const [isDownloading] = useState(false);

  const {
    watch,
    setValue,
    formState: { errors },
  } = useForm<CertificationForm>({
    resolver: zodResolver(downloadCertificationSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <>
      {message.status == "WARNING" && (
        <WarningMessage message={message.message} />
      )}
      {message.status == "SUCCESS" && (
        <SuccessMessage message={message.message} />
      )}

      <form className="space-y-4">
        <div className="flex flex-col items-start">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2 text-left"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            value={watch("name")}
            placeholder="Digite seu nome completo"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
            onChange={(e) => {
              setValue("name", e.target.value, {
                shouldValidate: true,
              });
            }}
          />

          {errors.name && (
            <small className="text-red-500 mt-1">{errors.name?.message}</small>
          )}
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2 text-left"
          >
            Email
          </label>
          <input
            type="text"
            value={watch("email")}
            placeholder="Digite seu nome completo"
            onChange={(e) => {
              setValue("email", e.target.value, {
                shouldValidate: true,
              });
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          />

          {errors.email && (
            <small className="text-red-500 mt-1">{errors.email.message}</small>
          )}
        </div>

        <button
          type="submit"
          disabled={isDownloading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:transform-none"
        >
          {isDownloading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Gerando...</span>
            </>
          ) : (
            <>
              <Download className="h-5 w-5" />
              <span>Baixar Certificado</span>
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Certificado em formato PDF de alta qualidade
        </p>
      </form>
    </>
  );
}
