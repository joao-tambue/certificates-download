import { AlertTriangle, X } from "lucide-react";

type WarningAlertProps = {
  warningMessage: string;
  closeWarning: () => void;
};

export function WarningAlert({
  warningMessage,
  closeWarning,
}: WarningAlertProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        <div className="bg-amber-500 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-white" />
            <h3 className="text-lg font-bold text-white">Aviso Importante</h3>
          </div>
          <button
            onClick={closeWarning}
            className="text-white hover:text-amber-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-700 leading-relaxed mb-6">{warningMessage}</p>

          <div className="flex space-x-3">
            <button
              onClick={closeWarning}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
