import { CheckCircle } from "lucide-react";

export function TipsList({ tips }: { tips: string[] }) {
  return (
    <>
      {tips.map((tip, index) => (
        <div key={index} className="flex gap-3 mb-4">
          <div className="flex-shrink-0 mt-1">
            <CheckCircle className="text-green-600 h-5 w-5" />
          </div>
          <div className="flex-grow text-sm md:text-base">{tip}</div>
        </div>
      ))}
    </>
  );
}
