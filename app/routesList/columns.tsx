"use client";

import { ColumnDef } from "@tanstack/react-table";

export type RouteData = {
    [key: string]: Array<{
        zoneId: number;
        routeColor: string;
        routeGrade: number;
        setter: string;
        date: string;
        betaLink?: string;
    }>;
};

export const columns: ColumnDef<RouteData>[] = [
    {
        accessorKey: "zoneId",
        header: "zoneId",
    },
    {
        accessorKey: "routeColor",
        header: "routeColor",
    },
    {
        accessorKey: "routeGrade",
        header: "routeGrade",
    },
    {
        accessorKey: "setter",
        header: "setter",
    },
    {
        accessorKey: "date",
        header: "date",
    },
    {
        accessorKey: "betaLink",
        header: "betaLink",
    },
];
