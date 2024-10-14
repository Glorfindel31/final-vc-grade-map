import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { RouteData, Route } from "@/app/routesList/columns";
import { acronym, allRouteListMutation, cn } from "@/lib/utils";
import { DataTable } from "@/app/routesList/data-table";
import { columnsZone } from "@/app/routesList/columns";
import { ZoneChart } from "./zone-chart";

export default function RouteList({
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
          {allRouteListMutation(data).length} routes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="Moon Korner">
          <TabsList className="grid h-full grid-cols-9">
            {Object.entries(data).map(([areaName]) => (
              <TabsTrigger
                value={areaName}
                key={areaName}
                className="border-r text-xs font-bold"
              >
                {acronym(areaName as string).toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(data).map(([areaName, routes], index) => (
            <TabsContent
              key={`${areaName}-${index}`}
              value={areaName}
              className="m-0 flex flex-col gap-4"
            >
              <h3 className="text-1xl border-b pb-2 pt-4 font-semibold tracking-tight transition-colors">
                {areaName} - {routes.length} routes
              </h3>
              <DataTable columns={columnsZone} data={routes as Route[]} />
              <h3 className="text-1xl border-b pb-2 pt-4 font-semibold tracking-tight transition-colors">
                Zone chart
              </h3>
              <ZoneChart data={routes} />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter className="font-thin italic">
        Are displayed routes per Zones.
      </CardFooter>
    </Card>
  );
}
