import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { RouteData, Route, AllRoutes } from "../app/routesList/columns";

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
// export function routesNumber(data: RouteData) {
//     const routesNumber = Object.entries(data).reduce((acc, [routes]) => {
//         return acc + routes.length;
//     }, 0);
//     return routesNumber;
// }

export function allRouteListMutation(data: RouteData): AllRoutes[] {
    const flattenedRoutes: AllRoutes[] = [];
    let zoneIdCounter = 1;

    Object.entries(data).forEach(([areaName, routes]) => {
        routes.forEach((route) => {
            if (!route.betaLink) {
                flattenedRoutes.push({
                    zoneId: zoneIdCounter++,
                    routeColor: route.routeColor,
                    routeGrade: route.routeGrade,
                    setter: route.setter,
                    date: route.date,
                    zone: areaName,
                });
            } else {
                flattenedRoutes.push({
                    zoneId: zoneIdCounter++,
                    routeColor: route.routeColor,
                    routeGrade: route.routeGrade,
                    setter: route.setter,
                    date: route.date,
                    betaLink: route.betaLink,
                    zone: areaName,
                });
            }
        });
    });

    return flattenedRoutes;
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
