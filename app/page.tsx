import getData from "@/server/get-data";
import type { RouteData } from "./routesList/columns";
import RouteList from "@/components/routeList";
import Grading from "@/components/grading";
import MenuBar from "@/components/menu-bar";
import OverallChart from "@/components/overallChart";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { DataTable } from "./routesList/data-table";
import { columnsAll } from "./routesList/columns";
import { allRouteListMutation, type AllRoutes } from "@/lib/utils";

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
                <h1 className="scroll-m-20 mt-5 mb-2 text-3xl font-bold tracking-tight lg:text-5xl text-center w-full">
                    Vietclimb&apos;s Routes Map and Stats
                </h1>

                <Grading />
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Route list / Zones</AccordionTrigger>
                        <AccordionContent>
                            <RouteList data={data} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>All Route List</AccordionTrigger>
                        <AccordionContent>
                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold tracking-tight transition-colors">
                                        All routes list
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <DataTable
                                        columns={columnsAll}
                                        data={
                                            allRouteListMutation(
                                                data
                                            ) as AllRoutes[]
                                        }
                                    />
                                </CardContent>
                                <CardFooter className="font-thin italic"></CardFooter>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Overall level chart</AccordionTrigger>
                        <AccordionContent>
                            <OverallChart data={data} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Route-Setter chart</AccordionTrigger>
                        <AccordionContent>
                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold tracking-tight transition-colors">
                                        Under construction...
                                    </CardTitle>
                                </CardHeader>
                                <CardContent></CardContent>
                                <CardFooter className="font-thin italic"></CardFooter>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <footer className="flex flex-col w-full items-center my-4">
                    <div className="flex flex-col w-full items-center">
                        <p className="text-xs font-thin italic">
                            Created by Cedric Florentin | 2024
                        </p>
                    </div>
                </footer>
            </div>
        </main>
    );
}
