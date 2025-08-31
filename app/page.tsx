"use client";
import { useEffect, useState } from "react";
import getData from "@/server/get-data";

import RouteList from "@/components/route-list";
import AllRouteList from "@/components/all-route-list";
import OverallChart from "@/components/overall-chart";
import RouteSetterChart from "@/components/route-setter-chart";

import Grading from "@/components/grading";
import MenuBar from "@/components/menu-bar";
import MobileAccordion from "@/components/mobile-accordion";
import BackToTop from "@/components/ui/top-button";
import Footer from "@/components/footer";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { RouteData } from "./routesList/columns";

export default function Home() {
  const [data, setData] = useState<RouteData | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsAlertOpen(true);
      localStorage.setItem("hasVisited", "true");
    }

    async function fetchData() {
      const res = await getData();
      if (res && typeof res === "string") {
        setData(JSON.parse(res));
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>V2 in my gym!</div>;
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between gap-4">
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>A Note on Grades</AlertDialogTitle>
            <AlertDialogDescription>
              At VietClimb, our grades are set to help you progress. They're
              specific to our gym and may not match those at your home gym or
              outdoors. Focus on your journey here and enjoy the climb!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Got it</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <MenuBar />
      <div className="flex h-full w-screen max-w-sm flex-col gap-2 px-2 sm:max-w-7xl">
        <h1 className="mb-6 mt-20 w-full text-center text-3xl font-bold sm:text-left sm:text-5xl">
          Vietclimb Setting Stats
        </h1>

        <div className="hidden h-[calc(100vh*1.2)] grid-cols-2 gap-2 sm:grid">
          <RouteList data={data} className="overflow-y-scroll" />
          <AllRouteList data={data} className="overflow-y-scroll" />
          <OverallChart data={data} className="overflow-y-scroll" />
          <RouteSetterChart data={data} className="overflow-y-scroll" />
        </div>

        <MobileAccordion data={data} className="visible sm:hidden" />
        <Grading />
      </div>
      <BackToTop threshold={300} />
      <Footer />
    </main>
  );
}
