"use client";

import { Bar, BarChart, CartesianGrid, YAxis } from "recharts";

import type { RouteData } from "../app/routesList/columns";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { routesNumberByGrade } from "@/lib/utils";

const generalChartConfig = {
    grade: {
        label: "grade",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

export function GeneralChart(props: { data: RouteData }) {
    const generalChart = [
        {
            grade: 0,
            number: routesNumberByGrade(props.data, 0),
            fill: "#ec4899",
        },
        {
            grade: 1,
            number: routesNumberByGrade(props.data, 1),
            fill: "#eab308",
        },
        {
            grade: 2,
            number: routesNumberByGrade(props.data, 2),
            fill: "#f97316",
        },
        {
            grade: 3,
            number: routesNumberByGrade(props.data, 3),
            fill: "#22c55e",
        },
        {
            grade: 4,
            number: routesNumberByGrade(props.data, 4),
            fill: "#3b82f6",
        },
        {
            grade: 5,
            number: routesNumberByGrade(props.data, 5),
            fill: "#ef4444",
        },
        {
            grade: 6,
            number: routesNumberByGrade(props.data, 6),
            fill: "#18181b",
        },
        {
            grade: 7,
            number: routesNumberByGrade(props.data, 7),
            fill: "#d4d4d8",
        },
    ];

    return (
        <ChartContainer
            config={generalChartConfig}
            className="min-h-[200px] w-full"
        >
            <BarChart accessibilityLayer data={generalChart}>
                <CartesianGrid vertical={false} />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="number" fill="var(--color-grade)" radius={4} />
            </BarChart>
        </ChartContainer>
    );
}
