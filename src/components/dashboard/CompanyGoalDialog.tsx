import React from "react";
import { Goal } from "lucide-react";
import { v4 as uuid } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { addCompanyGoals, useCompanyGoals } from "@/context/companyGoalStore";

export default function CompanyGoalDialog() {
  const uniqueId = React.useId();
  const [open, setOpen] = React.useState(false);
  const companyGoals = useCompanyGoals();

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements[0] as HTMLInputElement;
    addCompanyGoals({
      id: uuid(),
      label: input.value,
    });

    input.value = "";
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="size-10 rounded-full">
          <Goal className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">see company goals</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Add a new company goal</DialogTitle>
          <DialogDescription>
            You can see the list of your company goals here. add or edit
            existing company goals to the project.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <p>Current Goals:</p>
          <ul className="list-inside list-disc">
            {companyGoals.map((g) => (
              <li className="text-sm font-bold " key={g.id}>
                {g.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 py-4">
          <form onSubmit={handleAdd} className="flex items-center gap-2">
            <Label
              htmlFor={"objective" + uniqueId}
              className="flex-shrink-0 text-left"
            >
              New Goal:
            </Label>
            <Input id={"objective" + uniqueId} className="" required />
            <Button type="submit" className="flex-grow">
              Add
            </Button>
          </form>
        </div>
        <DialogFooter>
          <Button type="button" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
