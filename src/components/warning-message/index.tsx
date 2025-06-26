import { AlertTriangle } from "lucide-react";

export function WarningMessage({ message }: { message: string }) {
  return (
    <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
      <div className="flex items-center space-x-2 text-amber-800">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-sm font-medium">Ops!.., ocorreu um problema</span>
      </div>
      <p className="text-xs text-amber-700 mt-1">{message}</p>
    </div>
  );
}
