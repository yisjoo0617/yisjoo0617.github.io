import { format } from "@/libs/date-time";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-28 gap-3">
      <span className="text-xs text-slate-500">
        Copyright © {format(new Date(), 'YYYY')} SeonkyungKim
      </span>
    </footer>
  );
}
