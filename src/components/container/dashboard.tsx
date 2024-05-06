import { NewGoal } from "./NewGoal";
import { GoalList } from "./GoalList";
import { Title } from "./Title";
import { MobileMenu } from "./MobileMenu";
import { SearchBar } from "./SearchBar";
import { Main } from "./Main";
import { ModeToggle } from "../ui/mode-toggle";

export function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <Title />
          <GoalList />
          <NewGoal />
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileMenu />
          <SearchBar />
          <ModeToggle />
        </header>
        <Main />
      </div>
    </div>
  );
}
