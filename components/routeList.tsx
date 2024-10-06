import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { RouteData, Route } from "../app/routesList/columns";
import { acronym, allRouteListMutation } from "@/lib/utils";
import { DataTable } from "../app/routesList/data-table";
import { columns } from "../app/routesList/columns";
import { ZoneChart } from "./zone-chart";

export default function RouteList(props: { data: RouteData }) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors">
                    Routes list - {allRouteListMutation(props.data).length}{" "}
                    routes
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="Moon Korner">
                    <TabsList className="grid grid-cols-9 h-full ">
                        {Object.entries(props.data).map(([areaName]) => (
                            <TabsTrigger
                                value={areaName}
                                key={areaName}
                                className="font-bold text-xs border-r"
                            >
                                {acronym(areaName as string).toUpperCase()}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {Object.entries(props.data).map(
                        ([areaName, routes], index) => (
                            <TabsContent
                                key={`${areaName}-${index}`}
                                value={areaName}
                                className="flex flex-col gap-4"
                            >
                                <h3 className="scroll-m-20 border-b pb-2 text-1xl font-semibold tracking-tight transition-colors">
                                    {areaName} - {routes.length} routes
                                </h3>
                                <DataTable
                                    columns={columns}
                                    data={routes as Route[]}
                                />
                                <h3 className="scroll-m-20 border-b pb-2 text-1xl font-semibold tracking-tight transition-colors">
                                    Zone chart
                                </h3>
                                <ZoneChart data={routes} />
                            </TabsContent>
                        )
                    )}
                </Tabs>
            </CardContent>
            <CardFooter className="font-thin italic">
                Are displayed routes per Zones.
            </CardFooter>
        </Card>
    );
}
