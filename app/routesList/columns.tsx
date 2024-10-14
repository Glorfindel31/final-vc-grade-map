"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { TbDropletFilled } from "react-icons/tb";

export type AllRoutes = {
  zone: string;
  routeColor: string;
  routeGrade: number;
  setter: string;
  date: string;
  betaLink?: string;
  zoneId: number;
};

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

export const columnsZone: ColumnDef<Route>[] = [
  {
    accessorKey: "zoneId",
    header: ({ column }) => {
      return (
        <div className="justify-left flex items-center">
          <Button
            variant="link"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 text-center"
          >
            Id
            <ArrowUpDown className="ml-1 h-2 w-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="px-1 text-left">{row.getValue("zoneId")}</div>;
    },
  },
  {
    accessorKey: "routeColor",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Button
            variant="link"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 text-center"
          >
            Holds
            <ArrowUpDown className="ml-1 h-2 w-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const routeColor: string = row.getValue("routeColor");
      const color = colorBg[routeColor.toLowerCase() as keyof typeof colorBg];

      if (row.getValue("routeColor")) {
        return (
          <div className="flex w-full justify-center">
            <div className={`h-6 w-8 rounded-2xl ${color}`}></div>
          </div>
        );
      }
    },
  },
  {
    accessorKey: "routeGrade",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Button
            variant="link"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 text-center"
          >
            Grade
            <ArrowUpDown className="ml-1 h-2 w-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const color =
        colorText[row.getValue("routeGrade") as keyof typeof colorText];
      return (
        <div className={`flex w-full justify-center ${color}`}>
          <TbDropletFilled className="h-4 w-4" />
          <TbDropletFilled className="h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "setter",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Button
            variant="link"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 text-center"
          >
            Setter
            <ArrowUpDown className="ml-1 h-2 w-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="px-1 text-center">{row.getValue("setter")}</div>;
    },
  },
  {
    accessorKey: "betaLink",
    header: () => <div className="pr-1 text-right">Beta</div>,
    cell: ({ row }) => {
      const instaLink = row.getValue("betaLink") as string;
      if (instaLink) {
        return (
          <div className="flex w-full justify-end">
            <Button asChild variant="outline" size="icon">
              <Link href={instaLink} target="_blank" rel="noopener noreferrer">
                <FaPlay className="w-full" />
              </Link>
            </Button>
          </div>
        );
      } else {
        return (
          <div className="flex w-full justify-end">
            <Button variant="outline" size="icon" disabled>
              <FaPlay className="w-full" />
            </Button>
          </div>
        );
      }
    },
  },
];

export const columnsAll: ColumnDef<Route>[] = [
  {
    accessorKey: "zone",
    header: ({ column }) => {
      return (
        <div className="justify-left flex items-center">
          <Button
            variant="link"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 text-left"
          >
            Zone
            <ArrowUpDown className="ml-1 h-2 w-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="px-1 text-left text-xs">{row.getValue("zone")}</div>
      );
    },
  },
  {
    accessorKey: "routeColor",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Button
            variant="link"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 text-center"
          >
            Holds
            <ArrowUpDown className="ml-1 h-2 w-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const routeColor: string = row.getValue("routeColor");
      const color = colorBg[routeColor.toLowerCase() as keyof typeof colorBg];

      if (row.getValue("routeColor")) {
        return (
          <div className="flex w-full justify-center">
            <div className={`h-6 w-8 rounded-2xl ${color}`}></div>
          </div>
        );
      }
    },
  },
  {
    accessorKey: "routeGrade",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Button
            variant="link"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 text-center"
          >
            Grade
            <ArrowUpDown className="ml-1 h-2 w-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const color =
        colorText[row.getValue("routeGrade") as keyof typeof colorText];
      return (
        <div className={`flex w-full justify-center ${color}`}>
          <TbDropletFilled className="h-4 w-4" />
          <TbDropletFilled className="h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "setter",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Button
            variant="link"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 text-center"
          >
            Setter
            <ArrowUpDown className="ml-1 h-2 w-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="px-1 text-center">{row.getValue("setter")}</div>;
    },
  },
  {
    accessorKey: "betaLink",
    header: () => <div className="pr-1 text-right">Beta</div>,
    cell: ({ row }) => {
      const instaLink = row.getValue("betaLink") as string;
      if (instaLink) {
        return (
          <div className="flex w-full justify-end">
            <Button asChild variant="outline" size="icon">
              <Link href={instaLink} target="_blank" rel="noopener noreferrer">
                <FaPlay className="w-full" />
              </Link>
            </Button>
          </div>
        );
      } else {
        return (
          <div className="flex w-full justify-end">
            <Button variant="outline" size="icon" disabled>
              <FaPlay className="w-full" />
            </Button>
          </div>
        );
      }
    },
  },
];
