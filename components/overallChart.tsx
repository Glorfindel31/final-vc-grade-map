import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { GeneralChart } from "@/components/general-chart";
import { TbDropletFilled } from "react-icons/tb";
import type { RouteData } from "../app/routesList/columns";

export default function OverallChart(props: { data: RouteData }) {
    return (
        <Card>
            <CardHeader className="py-4 mb-4 px-2">
                <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors">
                    Overall Level Chart
                </CardTitle>
            </CardHeader>
            <CardContent className="w-full py-4 px-2">
                <GeneralChart data={props.data} />
            </CardContent>
            <CardFooter className="font-thin italic flex flex-col">
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
    );
}
