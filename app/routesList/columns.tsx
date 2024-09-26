"use client";

import { ColumnDef } from "@tanstack/react-table";

export interface Route {
    zoneId: number;
    routeColor: string;
    routeGrade: number;
    setter: string;
    date: string;
    betaLink?: string;
}

type RouteArray<T extends Route> = T[];

export type RouteData = {
    [key: string]: RouteArray<Route>;
};

export const columns: ColumnDef<Route>[] = [
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
