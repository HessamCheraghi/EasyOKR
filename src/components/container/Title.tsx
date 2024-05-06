import { Goal } from "lucide-react";

export function Title() {
  return (
    <div className="flex h-16 md:h-14 items-center border-b pr-4 md:px-4 lg:h-[60px] lg:px-6">
      <a href="/" className="flex items-center gap-2 font-semibold">
        <Goal className="h-6 w-6" />
        <span className="">Goals Project</span>
      </a>
    </div>
  );
}