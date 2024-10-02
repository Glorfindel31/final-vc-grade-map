import getData from "@/server/get-data";
import type { RouteData, Route } from "./routesList/columns";
import { acronym, routesNumber } from "@/lib/utils";
import { DataTable } from "./routesList/data-table";
import { columns } from "./routesList/columns";
import MenuBar from "@/components/menu-bar";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralChart } from "@/components/general-chart";

export default async function Home() {
    const res = await getData();
    if (!res || typeof res !== "string") {
        return <div>oops refresh?</div>;
    }
    const data: RouteData = JSON.parse(res);

    return (
        <div className="bg-background">
            <main className="flex flex-col items-center bg-transparent">
                <MenuBar />
                <div className="flex flex-col justify-center min-h-screen p-2 gap-2">
                    <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl text-center w-full">
                        Vietclimb&apos;s Routes Map and Stats
                    </h1>
                    <Card className="p-2">
                        <CardHeader className="w-full p-2">
                            <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors">
                                {routesNumber(data)} routes in total at
                                Vietclimb today.
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="w-full p-2">
                            <p>links here</p>
                        </CardContent>
                    </Card>
                    <Card className="p-2">
                        <CardHeader className="w-full p-2">
                            <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors">
                                Routes list - {routesNumber(data)} routes
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="w-full p-2">
                            <Tabs defaultValue="Moon Korner">
                                <TabsList className="grid grid-cols-9 h-full ">
                                    {Object.entries(data).map(([areaName]) => (
                                        <TabsTrigger
                                            value={areaName}
                                            key={areaName}
                                            className="font-bold text-xs border-r"
                                        >
                                            {acronym(
                                                areaName as string
                                            ).toUpperCase()}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                {Object.entries(data).map(
                                    ([areaName, routes], index) => (
                                        <TabsContent
                                            key={`${areaName}-${index}`}
                                            value={areaName}
                                        >
                                            <h3 className="my-4 scroll-m-20 border-b pb-2 text-1xl font-semibold tracking-tight transition-colors">
                                                {areaName} - {routes.length}{" "}
                                                routes
                                            </h3>
                                            <DataTable
                                                columns={columns}
                                                data={routes as Route[]}
                                            />
                                        </TabsContent>
                                    )
                                )}
                            </Tabs>
                        </CardContent>
                        <CardFooter>Are displayed routes per Zones.</CardFooter>
                    </Card>
                    <Card className="p-2">
                        <CardHeader className="w-full p-2">
                            <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors">
                                Routes list - {routesNumber(data)} routes
                            </CardTitle>
                        </CardHeader>
                        <GeneralChart data={data} />
                        <CardFooter>
                            Are displayed level&apos;s chart.
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </div>
    );
}
