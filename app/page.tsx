import getData from "@/server/get-data";
import { Button } from "@/components/ui/button";
import { DataTable } from "./routesList/data-table";
import { columns } from "./routesList/columns";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

import type { RouteData, Route } from "./routesList/columns";

export default async function Home() {
    const res = await getData();
    if (!res || typeof res !== "string") {
        return <div>oops refresh?</div>;
    }
    const data: RouteData = JSON.parse(res);

    return (
        <div className="">
            <main className="flex flex-col items-center">
                <div className="h-10 w-full bg-transparent border-b items-center justify-between flex">
                    <div>
                        <Button variant="ghost" asChild>
                            <Link
                                href="https://www.instagram.com/vietclimb_beta/"
                                target="_blank"
                            >
                                <FaInstagram />
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link
                                href="https://www.facebook.com/VietClimb"
                                target="_blank"
                            >
                                <FaFacebook />
                            </Link>
                        </Button>
                    </div>
                    <ModeToggle />
                </div>
                <div className="flex justify-center min-h-screen pt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className=" text-4xl font-bold">
                                Vietclimb&apos;s Routes Map and Stats
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="Moon Korner">
                                {Object.entries(data).map(
                                    ([areaName, routes], index) => (
                                        <TabsList key={`${areaName}-${index}`}>
                                            <TabsTrigger
                                                value={areaName}
                                                key={areaName}
                                            >
                                                {areaName} - {routes.length}
                                            </TabsTrigger>
                                        </TabsList>
                                    )
                                )}
                                {Object.entries(data).map(
                                    ([areaName, routes], index) => (
                                        <TabsContent
                                            key={`${areaName}-${index}`}
                                            value={areaName}
                                        >
                                            <DataTable
                                                columns={columns}
                                                data={routes as Route[]}
                                            />
                                        </TabsContent>
                                    )
                                )}
                            </Tabs>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </div>
    );
}
