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
        header: () => <div className="text-center ">Grade</div>,
        cell: ({ row }) => {
            const routeGrade = row.getValue("routeGrade");
            const colorMap = {
                0: "bg-pink-500",
                1: "bg-yellow-500 text-yellow-500",
                2: "bg-orange-500 text-orange-500",
                3: "bg-green-500 text-green-500",
                4: "bg-blue-500 text-blue-500",
                5: "bg-red-500 text-red-500",
                6: "bg-black text-black",
                default: "bg-slate-100 text-slate-100",
            };

            const backgroundColor = colorMap[routeGrade] || colorMap.default;
            const textColor = backgroundColor.includes("text")
                ? backgroundColor.replace("text-", "")
                : "";
            if (routeGrade) {
                return (
                    <div
                        className={`text-center rounded-2xl w-full ${backgroundColor}`}
                    >
                        {routeGrade as string}
                    </div>
                );
            }
        },
    },
    {
        accessorKey: "setter",
        header: "Setter",
    },
    {
        accessorKey: "betaLink",
        header: "Insta Link",
        cell: ({ row }) => {
            const instaLink = row.getValue("betaLink") as string;
            if (instaLink) {
                return (
                    <a
                        href={instaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        click
                    </a>
                );
            }
        },
    },
];
