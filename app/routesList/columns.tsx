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
        header: () => <div className="text-center">Id</div>,
        cell: ({ row }) => {
            return <div className="text-center">{row.getValue("zoneId")}</div>;
        },
    },
    {
        accessorKey: "routeColor",
        header: () => <div className="text-center ">Color</div>,
        cell: ({ row }) => {
            const routeColor = row.getValue("routeColor") as string;

            if (routeColor === "Black" || routeColor === "White") {
                return (
                    <div
                        className={`text-center rounded-2xl w-full ${
                            routeColor === "Black"
                                ? "bg-black text-slate-100"
                                : "bg-slate-100 text-black"
                        }`}
                    >
                        {row.getValue("routeColor")}
                    </div>
                );
            } else {
                return (
                    <div
                        className={`text-center rounded-2xl w-full bg-${routeColor.toLowerCase()}-500`}
                    >
                        {row.getValue("routeColor")}
                    </div>
                );
            }
        },
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
