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

import { RouteData } from "./routesList/columns";

export default async function Home() {
  const res = await getData();
  if (!res || typeof res !== "string") {
    return <div>oops refresh?</div>;
  }
  const data: RouteData = JSON.parse(res);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between gap-4">
      <MenuBar />
      <div className="flex h-full w-screen max-w-sm flex-col gap-2 px-2 sm:max-w-7xl">
        <h1 className="mb-6 mt-20 w-full text-center text-3xl font-bold sm:text-left sm:text-5xl">
          Vietclimb&apos;s Routes Map and Stats
        </h1>
        <Grading />

        <div className="hidden h-[calc(100vh*1.2)] grid-cols-2 gap-2 sm:grid">
          <RouteList data={data} className="overflow-y-scroll" />
          <AllRouteList data={data} className="overflow-y-scroll" />
          <OverallChart data={data} className="overflow-y-scroll" />
          <RouteSetterChart data={data} className="overflow-y-scroll" />
        </div>

        <MobileAccordion data={data} className="visible sm:hidden" />
      </div>
      <BackToTop threshold={300} />
      <Footer />
    </main>
  );
}
