import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { GeneralChart } from "@/components/general-chart";
import { TbDropletFilled } from "react-icons/tb";
import type { RouteData } from "@/app/routesList/columns";
import { cn } from "@/lib/utils";

export default function OverallChart({
  data,
  className,
}: {
  data: RouteData;
  className?: string;
}) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="pb-1 text-2xl font-semibold tracking-tight transition-colors">
          Overall Level Chart
        </CardTitle>
      </CardHeader>
      <CardContent>
        <GeneralChart data={data} />
        <div className="flex w-full flex-col justify-items-center gap-4 py-8 text-center text-xs">
          <div className="flex w-full flex-row justify-between">
            <div className="flex w-full flex-col items-center">
              <TbDropletFilled className="h-10 w-10 text-yellow-500" />
              <p>Beginner</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <TbDropletFilled className="h-10 w-10 text-orange-500" />
              <p>Beginner+</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <TbDropletFilled className="h-10 w-10 text-green-500" />
              <p>Intermediate</p>
            </div>
          </div>
          <div className="flex w-full flex-row justify-between">
            <div className="flex w-full flex-col items-center">
              <TbDropletFilled className="h-10 w-10 text-blue-500" />
              <p>Intermediate+</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <TbDropletFilled className="h-10 w-10 text-red-500" />
              <p>Advance</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <TbDropletFilled className="h-10 w-10 text-zinc-950" />
              <p>Advance+</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <TbDropletFilled className="h-10 w-10 text-zinc-50" />
              <p>Elite</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center">
            <TbDropletFilled className="h-10 w-10 text-pink-500" />
            <p>Joker</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col font-thin italic">
        Are displayed level&apos;s chart.
      </CardFooter>
    </Card>
  );
}
