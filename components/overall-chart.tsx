import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { GeneralChart } from "@/components/general-chart";

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
        {/* <div className="flex w-full flex-col justify-items-center gap-4 py-8 text-center text-xs">
          <div className="flex w-full flex-row justify-between">
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                1
              </div>
              <p>Level 1</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                2
              </div>
              <p>Level 2</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                3
              </div>
              <p>Level 3</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                4
              </div>
              <p>Level 4</p>
            </div>
          </div>
          <div className="flex w-full flex-row justify-between">
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                5
              </div>
              <p>Level 5</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                6
              </div>
              <p>Level 6</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                7
              </div>
              <p>Level 7</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                8
              </div>
              <p>Level 8</p>
            </div>
          </div>
          <div className="flex w-full flex-row justify-between">
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                9
              </div>
              <p>Level 9</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                10
              </div>
              <p>Level 10</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                11
              </div>
              <p>Level 11</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                12
              </div>
              <p>Level 12</p>
            </div>
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                13
              </div>
              <p>Level 13</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
                14
              </div>
              <p>Level 14</p>
            </div>
          </div>
        </div> */}
      </CardContent>
      <CardFooter className="flex flex-col font-thin italic">
        Are displayed level&apos;s chart.
      </CardFooter>
    </Card>
  );
}
