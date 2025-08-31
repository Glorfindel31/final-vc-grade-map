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
//   const routesNumber = Object.entries(data).reduce((acc, [routes]) => {
//     return acc + routes.length;
//   }, 0);
//   return routesNumber;
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

const GRADE_CONVERSIONS = [
  { vc: "1", vs: "VB", ft: "3", ovs: "VB", oft: "3", mg: "V0" },
  { vc: "2", vs: "V0", ft: "4", ovs: "V0", oft: "4", mg: "V0" },
  { vc: "3", vs: "V1", ft: "5", ovs: "V1", oft: "5", mg: "V0" },
  { vc: "4", vs: "V2", ft: "5+", ovs: "V2", oft: "5+", mg: "V2" },
  { vc: "5", vs: "V3", ft: "6a/+", ovs: "V2", oft: "5+", mg: "V2" },
  { vc: "6", vs: "V4", ft: "6b/+", ovs: "V3", oft: "6a", mg: "V2" },
  { vc: "7", vs: "V5", ft: "6c/+", ovs: "V3", oft: "6a+", mg: "V2" },
  { vc: "8", vs: "V6", ft: "7a", ovs: "V4", oft: "6b/+", mg: "V2" },
  { vc: "9", vs: "V7", ft: "7a+", ovs: "V5", oft: "6c", mg: "V2" },
  { vc: "10", vs: "V8", ft: "7b/+", ovs: "V5", oft: "6c+", mg: "V2" },
  { vc: "11", vs: "V9", ft: "7c", ovs: "V6", oft: "7a", mg: "V2" },
  { vc: "12", vs: "V10", ft: "7c+", ovs: "V7", oft: "7a+", mg: "V2" },
  { vc: "13", vs: "V11", ft: "8a", ovs: "V8", oft: "7b/+", mg: "V2" },
  { vc: "14", vs: "V12", ft: "8a+", ovs: "V9", oft: "7c", mg: "V2" },
];

export function convertGrade(
  vcGrade: number,
  targetSystem: "vc" | "vs" | "ft" | "ovs" | "oft" | "mg",
): string {
  const gradeEntry = GRADE_CONVERSIONS.find(
    (entry) => entry.vc === vcGrade.toString(),
  );

  if (!gradeEntry) {
    return "N/A";
  }

  return gradeEntry[targetSystem];
}
