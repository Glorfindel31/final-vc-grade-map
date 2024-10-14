import { DataTable } from "@/app/routesList/data-table";
import { columnsAll, AllRoutes, RouteData } from "@/app/routesList/columns";
import { allRouteListMutation, cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AllRouteList({
  data,
  className,
}: {
  data: RouteData;
  className?: string;
}) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight transition-colors">
          All routes list
        </CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columnsAll}
          data={allRouteListMutation(data) as AllRoutes[]}
        />
      </CardContent>
      <CardFooter className="font-thin italic"></CardFooter>
    </Card>
  );
}
