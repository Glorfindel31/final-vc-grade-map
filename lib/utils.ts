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
      (route: Route) => route.routeGrade === grade,
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

export function convertVietclimbToVscale(grade: number): string {
  if (grade < 1 || grade > 14) {
    return "N/A"; // Or throw an error, depending on desired behavior for invalid input
  }

  const vscaleGrades = [
    "VB",
    "V0",
    "V1",
    "V2",
    "V3",
    "V4",
    "V5",
    "V6",
    "V7",
    "V8",
    "V9",
    "V10",
    "V11",
    "V12",
  ];

  // Vietclimb grades 1-14 map to array indices 0-13
  return vscaleGrades[grade - 1];
}
