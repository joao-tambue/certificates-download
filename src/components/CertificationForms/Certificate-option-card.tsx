import { Download } from "lucide-react";

type Props = {
  title: string;
  color: string;
  onClick: () => void;
};

export function CertificateOptionCard({ title, color, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white p-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex flex-col items-center justify-center space-y-3`}
    >
      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
        <Download className="h-6 w-6" />
      </div>
      <span className="font-semibold text-[16px]">{title}</span>
    </button>
  );
}
