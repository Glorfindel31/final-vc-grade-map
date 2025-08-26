"use client";

import { Bar, BarChart, CartesianGrid } from "recharts";

import type { RouteData } from "../app/routesList/columns";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { routesNumberByGrade } from "@/lib/utils";

const generalChartConfig = {
  amount: {
    label: "Routes Amount",
  },
  grade: {
    label: "grade",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function GeneralChart(props: { data: RouteData }) {
  const generalChart = [
    {
      grade: 1,
      number: routesNumberByGrade(props.data, 1),
      fill: "#eab308",
    },
    {
      grade: 2,
      number: routesNumberByGrade(props.data, 2),
      fill: "#eab308",
    },
    {
      grade: 3,
      number: routesNumberByGrade(props.data, 3),
      fill: "#f97316",
    },
    {
      grade: 4,
      number: routesNumberByGrade(props.data, 4),
      fill: "#f97316",
    },
    {
      grade: 5,
      number: routesNumberByGrade(props.data, 5),
      fill: "#22c55e",
    },
    {
      grade: 6,
      number: routesNumberByGrade(props.data, 6),
      fill: "#22c55e",
    },
    {
      grade: 7,
      number: routesNumberByGrade(props.data, 7),
      fill: "#3b82f6",
    },
    {
      grade: 8,
      number: routesNumberByGrade(props.data, 8),
      fill: "#3b82f6",
    },
    {
      grade: 9,
      number: routesNumberByGrade(props.data, 9),
      fill: "#ef4444",
    },
    {
      grade: 10,
      number: routesNumberByGrade(props.data, 10),
      fill: "#ef4444",
    },
    {
      grade: 11,
      number: routesNumberByGrade(props.data, 11),
      fill: "#09090b",
    },
    {
      grade: 12,
      number: routesNumberByGrade(props.data, 12),
      fill: "#09090b",
    },
    {
      grade: 13,
      number: routesNumberByGrade(props.data, 13),
      fill: "#d4d4d8",
    },
    {
      grade: 14,
      number: routesNumberByGrade(props.data, 14),
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
