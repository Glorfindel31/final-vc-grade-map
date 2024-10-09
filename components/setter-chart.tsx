"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import type { AllRoutes } from "../app/routesList/columns";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

type SetterChart = {
    setter: string;
    number: number;
    fill: string;
};

export function transformToSetterChart(data: AllRoutes[]): SetterChart[] {
    const groupedRoutes = data.reduce((acc, route) => {
        if (!acc[route.setter]) {
            acc[route.setter] = [];
        }
        acc[route.setter].push(route);
        return acc;
    }, {} as Record<string, AllRoutes[]>);

    const setterChart: SetterChart[] = Object.entries(groupedRoutes).map(
        ([setter, setterRoutes], index) => ({
            setter,
            number: setterRoutes.length,
            fill: index % 2 === 0 ? "#f97316" : "#3b82f6",
        })
    );

    return setterChart;
}

const setterChartConfig = {
    number: {
        label: "Setter",
        color: "#f97316",
    },
} satisfies ChartConfig;

export function SetterChart(props: { data: AllRoutes[] }) {
    const setterData: SetterChart[] = transformToSetterChart(props.data);
    return (
        <ChartContainer
            config={setterChartConfig}
            className="min-h-[200px] w-full"
        >
            <BarChart accessibilityLayer data={setterData}>
                <CartesianGrid vertical={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <XAxis
                    dataKey="setter"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <Bar dataKey="number" fill="var(--color-grade)" radius={4} />
            </BarChart>
        </ChartContainer>
    );
}
