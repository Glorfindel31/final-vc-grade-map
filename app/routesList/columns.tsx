"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import { TbDropletFilled } from "react-icons/tb";

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

const colorText = {
    0: " text-pink-500",
    1: " text-yellow-500",
    2: " text-orange-500",
    3: " text-green-500",
    4: " text-blue-500",
    5: " text-red-500",
    6: " text-zinc-950",
    7: " text-zinc-50",
};

const colorBg = {
    pink: "bg-pink-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    black: "bg-zinc-950",
    purple: "bg-purple-500",
    white: "bg-zinc-50",
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
        header: () => <div className="text-center">Holds</div>,
        cell: ({ row }) => {
            const routeColor: string = row.getValue("routeColor");
            const color =
                colorBg[routeColor.toLowerCase() as keyof typeof colorBg];

            if (row.getValue("routeColor")) {
                return (
                    <div className="flex justify-center w-full">
                        <div className={`h-6 w-8 rounded-2xl ${color}`}></div>
                    </div>
                );
            }
        },
    },
    {
        accessorKey: "routeGrade",
        header: () => <div className="text-center ">Grade</div>,
        cell: ({ row }) => {
            const color =
                colorText[row.getValue("routeGrade") as keyof typeof colorText];
            return (
                <div className={`flex justify-center w-full ${color}`}>
                    <TbDropletFilled className="w-6 h-6" />
                    <TbDropletFilled className="w-6 h-6" />
                </div>
            );
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
        header: () => <div className="text-right pr-1">Beta</div>,
        cell: ({ row }) => {
            const instaLink = row.getValue("betaLink") as string;
            if (instaLink) {
                return (
                    <div className="flex justify-end w-full">
                        <Button asChild variant="outline" size="icon">
                            <Link
                                href={instaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaPlay className="w-full" />
                            </Link>
                        </Button>
                    </div>
                );
            } else {
                return (
                    <div className="flex justify-end w-full">
                        <Button variant="outline" size="icon" disabled>
                            <FaPlay className="w-full" />
                        </Button>
                    </div>
                );
            }
        },
    },
];
