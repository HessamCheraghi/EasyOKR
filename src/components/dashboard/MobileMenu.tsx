import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Title from "./Title";
import FirstObjectiveTooltip from "./FirstObjectiveTooltip";
import ObjectiveList from "./ObjectiveList";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <Title />
        <ObjectiveList />
        <FirstObjectiveTooltip />
      </SheetContent>
    </Sheet>
  );
}
