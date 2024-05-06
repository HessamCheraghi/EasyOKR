import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NewGoal() {
  return (
    <div className="mt-auto md:p-4">
      <Card>
        <CardHeader className="md:pt-0 md:p-4">
          <CardTitle>You have no goals!</CardTitle>
          <CardDescription>
            To start, click on <span className="font-bold">Add New Goal</span>{" "}
            to add your first goal.
          </CardDescription>
        </CardHeader>
        <CardContent className="md:p-4 md:pt-0">
          <Button size="sm" className="w-full">
            OK, Got it!
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
