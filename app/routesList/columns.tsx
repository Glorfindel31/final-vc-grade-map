"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";

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
        header: () => <div className="text-center px-1">Id</div>,
        cell: ({ row }) => {
            return (
                <div className="text-center px-1">{row.getValue("zoneId")}</div>
            );
        },
    },
    {
        accessorKey: "routeColor",
        header: () => <div className="text-center">Color</div>,
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
            const colorMap = {
                0: "bg-pink-500",
                1: "bg-yellow-500 text-yellow-500",
                2: "bg-orange-500 text-orange-500",
                3: "bg-green-500 text-green-500",
                4: "bg-blue-500 text-blue-500",
                5: "bg-red-500 text-red-500",
                6: "bg-black text-black",
                7: "bg-slate-100 text-slate-100",
            };

            const backgroundColor =
                colorMap[row.getValue("routeGrade") as keyof typeof colorMap];
            if (row.getValue("routeGrade")) {
                return (
                    <div
                        className={`text-center rounded-2xl w-full ${backgroundColor}`}
                    >
                        {row.getValue("routeGrade") as string}
                    </div>
                );
            }
        },
    },
    {
        accessorKey: "setter",
        header: () => <div className="text-right">Setter</div>,
        cell: ({ row }) => {
            return <div className="text-right">{row.getValue("setter")}</div>;
        },
    },
    {
        accessorKey: "betaLink",
        header: "Insta Link",
        cell: ({ row }) => {
            const instaLink = row.getValue("betaLink") as string;
            if (instaLink) {
                return (
                    <Button asChild variant="outline" size="icon">
                        <Link
                            href={instaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaPlay className="w-full" />
                        </Link>
                    </Button>
                );
            }
        },
    },
];
