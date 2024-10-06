import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TbDropletFilled } from "react-icons/tb";

export default function Grading() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors text-center">
                    Grading Scale
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row w-full py-2 text-xs gap-2 justify-center">
                    <div className="pt-6 flex ">
                        <TbDropletFilled className="w-10 h-10 text-yellow-500" />
                    </div>
                    <div className="pt-5 flex ">
                        <TbDropletFilled className="w-10 h-10 text-orange-500" />
                    </div>
                    <div className="pt-4 flex ">
                        <TbDropletFilled className="w-10 h-10 text-green-500" />
                    </div>
                    <div className="pt-3 flex ">
                        <TbDropletFilled className="w-10 h-10 text-blue-500" />
                    </div>
                    <div className="pt-2 flex">
                        <TbDropletFilled className="w-10 h-10 text-red-500" />
                    </div>
                    <div className="pt-1 flex">
                        <TbDropletFilled className="w-10 h-10 text-zinc-950" />
                    </div>
                    <div className="pt-0 flex">
                        <TbDropletFilled className="w-10 h-10 text-zinc-50" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
