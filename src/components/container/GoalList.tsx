import { Button } from "../ui/button";

const activeIndex = "5";
const goals = [
  {
    id: "1",
    title: "Dashboard",
  },
  {
    id: "2",
    title: "Orders",
  },
  {
    id: "3",
    title: "Products",
  },
  {
    id: "4",
    title: "Customers",
  },
  {
    id: "5",
    title: "Analytics",
  },
];

export function GoalList() {
  return (
    <div className="flex-1">
      <nav className="grid items-start p-2 text-sm font-medium lg:px-4 gap-2">
        <Button variant="default" className="mb-2">
          Add new Goal
        </Button>

        {goals.map((goal) => (
          <Button
            key={goal.id}
            variant={goal.id === activeIndex ? "secondary" : "ghost"}
            className="justify-start"
          >
            {goal.title}
          </Button>
        ))}
      </nav>
    </div>
  );
}
