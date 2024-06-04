import Title from "./dashboard/Title";
import ObjectiveList from "./dashboard/ObjectiveList";
import FirstObjectiveTooltip from "./dashboard/FirstObjectiveTooltip";
import MobileMenu from "./dashboard/MobileMenu";
import SearchBar from "./dashboard/SearchBar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Main from "./Main";
import CompanyGoalDialog from "./dashboard/CompanyGoalDialog";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <Title />
          <ObjectiveList />
          <FirstObjectiveTooltip />
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileMenu />
          <SearchBar />
          <CompanyGoalDialog />
          <ModeToggle />
        </header>
        <Main />
      </div>
    </div>
  );
}
