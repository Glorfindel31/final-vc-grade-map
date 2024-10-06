"use client";

import { Bar, BarChart, CartesianGrid } from "recharts";

import type { Route } from "../app/routesList/columns";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { routesNumberByGradeByZone } from "@/lib/utils";

const zoneChartConfig = {
    amount: {
        label: "Routes Amount",
    },
    grade: {
        label: "grade",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

export function ZoneChart(props: { data: Route[] }) {
    const zoneChart = [
        {
            grade: 1,
            number: routesNumberByGradeByZone(props.data, 1),
            fill: "#eab308",
        },
        {
            grade: 2,
            number: routesNumberByGradeByZone(props.data, 2),
            fill: "#f97316",
        },
        {
            grade: 3,
            number: routesNumberByGradeByZone(props.data, 3),
            fill: "#22c55e",
        },
        {
            grade: 4,
            number: routesNumberByGradeByZone(props.data, 4),
            fill: "#3b82f6",
        },
        {
            grade: 5,
            number: routesNumberByGradeByZone(props.data, 5),
            fill: "#ef4444",
        },
        {
            grade: 6,
            number: routesNumberByGradeByZone(props.data, 6),
            fill: "#09090b",
        },
        {
            grade: 7,
            number: routesNumberByGradeByZone(props.data, 7),
            fill: "#d4d4d8",
        },
        {
            grade: 0,
            number: routesNumberByGradeByZone(props.data, 0),
            fill: "#ec4899",
        },
    ];

    return (
        <ChartContainer
            config={zoneChartConfig}
            className="min-h-[50px] w-full p-0 m-0"
        >
            <BarChart accessibilityLayer data={zoneChart}>
                <CartesianGrid vertical={false} />
                <ChartTooltip
                    content={
                        <ChartTooltipContent
                            nameKey="amount"
                            labelKey="label"
                            indicator="line"
                            hideLabel={false}
                        />
                    }
                />
                <Bar dataKey="number" fill="var(--color-grade)" radius={4} />
            </BarChart>
        </ChartContainer>
    );
}
