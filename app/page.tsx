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
import { TbDropletFilled } from "react-icons/tb";
export default async function Home() {
    const res = await getData();
    if (!res || typeof res !== "string") {
        return <div>oops refresh?</div>;
    }
    const data: RouteData = JSON.parse(res);

    return (
        <main className="flex flex-col items-center w-full min-h-screen">
            <MenuBar />
            <div className="flex flex-col justify-center min-h-screen gap-2 w-screen max-w-sm px-2">
                <h1 className="scroll-m-20 mt-5 text-3xl font-bold tracking-tight lg:text-5xl text-center w-full">
                    Vietclimb&apos;s Routes Map and Stats
                </h1>
                {/* 
                    <Card>
                        <CardHeader className="w-full py-4 mb-4 px-2">
                            <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors text-center">
                                {routesNumber(data)} routes in total at
                                Vietclimb today.
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="w-full py-4 mb-4 px-2">
                            <p>links here</p>
                        </CardContent>
                    </Card> */}

                <Card className="w-full">
                    <CardHeader className="py-4 mb-4 px-2">
                        <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors">
                            Routes list - {routesNumber(data)} routes
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="py-4 mb-4 px-2">
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
                                            {areaName} - {routes.length} routes
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
                    <CardFooter className="font-thin italic">
                        Are displayed routes per Zones.
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader className="py-4 mb-4 px-2">
                        <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors">
                            Overall Level Chart
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="w-full py-4 px-2">
                        <GeneralChart data={data} />
                    </CardContent>
                    <CardFooter className="font-thin italic flex flex-col p-0">
                        <div className="flex flex-col w-full py-8 text-center justify-items-center text-xs gap-4">
                            <div className="flex flex-row w-full justify-between">
                                <div className="w-full flex flex-col items-center">
                                    <TbDropletFilled className="w-10 h-10 text-yellow-500" />
                                    <p>Beginner</p>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <TbDropletFilled className="w-10 h-10 text-orange-500" />
                                    <p>Beginner+</p>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <TbDropletFilled className="w-10 h-10 text-green-500" />
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-full justify-between">
                                <div className="w-full flex flex-col items-center">
                                    <TbDropletFilled className="w-10 h-10 text-blue-500" />
                                    <p>Intermediate+</p>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <TbDropletFilled className="w-10 h-10 text-red-500" />
                                    <p>Advance</p>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <TbDropletFilled className="w-10 h-10 text-zinc-950" />
                                    <p>Advance+</p>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <TbDropletFilled className="w-10 h-10 text-zinc-50" />
                                    <p>Elite</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full items-center">
                                <TbDropletFilled className="w-10 h-10 text-pink-500" />
                                <p>Joker</p>
                            </div>
                        </div>
                        Are displayed level&apos;s chart.
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}
