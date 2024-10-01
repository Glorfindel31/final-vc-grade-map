import getData from "@/server/get-data";
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

import type { RouteData, Route } from "./routesList/columns";

export function acronym(string: string) {
    const words = string.split(" ");
    const acronymLetters: string[] = [];

    words.forEach((word) => {
        acronymLetters.push(word[0]);
    });

    return acronymLetters.join("");
}

export default async function Home() {
    const res = await getData();
    if (!res || typeof res !== "string") {
        return <div>oops refresh?</div>;
    }
    const data: RouteData = JSON.parse(res);

    return (
        <div className="">
            <main className="flex flex-col items-center">
                <MenuBar />
                <div className="flex flex-col justify-center min-h-screen pt-8">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center w-full mb-4">
                        Vietclimb&apos;s Routes Map and Stats
                    </h1>
                    <Card className="p-2">
                        <CardHeader className="w-full p-2">
                            <CardTitle>Routes list</CardTitle>
                        </CardHeader>
                        <CardContent className="w-full p-2">
                            <Tabs defaultValue="Moon Korner">
                                <TabsList className="grid grid-cols-4 h-full">
                                    {Object.entries(data).map(
                                        ([areaName, routes]) => (
                                            <TabsTrigger
                                                value={areaName}
                                                key={areaName}
                                            >
                                                {acronym(
                                                    areaName as string
                                                ).toUpperCase()}{" "}
                                                - {routes.length}
                                            </TabsTrigger>
                                        )
                                    )}
                                </TabsList>
                                {Object.entries(data).map(
                                    ([areaName, routes], index) => (
                                        <TabsContent
                                            key={`${areaName}-${index}`}
                                            value={areaName}
                                        >
                                            <h3 className="my-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                                                {areaName}
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
                </div>
            </main>
        </div>
    );
}
