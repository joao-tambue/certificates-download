import { CheckCircle } from "lucide-react";

export function SuccessMessage({ message }: { message: string }) {
  return (
    <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
      <div className="flex items-center space-x-2 text-emerald-800">
        <CheckCircle className="h-4 w-4" />
        <span className="text-sm font-medium">
          Operação concluída com sucesso
        </span>
      </div>
      <p className="text-xs text-emerald-700 mt-1">
        {message}
        <span>Agradecemos por ter comparecido</span>
      </p>
    </div>
  );
}
