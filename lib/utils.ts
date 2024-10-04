import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { RouteData, Route } from "../app/routesList/columns";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function acronym(string: string) {
    const words = string.split(" ");
    const acronymLetters: string[] = [];

    words.forEach((word) => {
        acronymLetters.push(word[0]);
    });

    return acronymLetters.join("");
}
export function routesNumber(data: RouteData) {
    const routesNumber = Object.entries(data).reduce((acc, [routes]) => {
        return acc + routes.length;
    }, 0);
    return routesNumber;
}

export function routesNumberByGrade(data: RouteData, grade: number): number {
    const routesNumber = Object.entries(data).reduce((acc, [, routes]) => {
        const routesByGrade = routes.filter(
            (route: Route) => route.routeGrade === grade
        ).length;
        return acc + routesByGrade;
    }, 0);

    return routesNumber;
}

export function routesNumberByGradeByZone(data: Route[], grade: number) {
    const routesNumber = data.reduce((acc, route) => {
        if (route.routeGrade === grade) {
            return acc + 1;
        }
        return acc;
    }, 0);
    return routesNumber;
}
