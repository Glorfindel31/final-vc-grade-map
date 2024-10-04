import getData from "@/server/get-data";
import type { RouteData } from "./routesList/columns";
import RouteList from "@/components/routeList";
import Grading from "@/components/grading";
import MenuBar from "@/components/menu-bar";
import OverallChart from "@/components/overallChart";

export default async function Home() {
    const res = await getData();
    if (!res || typeof res !== "string") {
        return <div>oops refresh?</div>;
    }
    const data: RouteData = JSON.parse(res);

    return (
        <main className="flex flex-col items-center w-full min-h-screen">
            <MenuBar />
            <div className="flex flex-col justify-center min-h-screen gap-2 w-screen max-w-sm px-2">
                <h1 className="scroll-m-20 mt-5 mb-2 text-3xl font-bold tracking-tight lg:text-5xl text-center w-full">
                    Vietclimb&apos;s Routes Map and Stats
                </h1>

                <Grading />
                <RouteList data={data} />
                <OverallChart data={data} />

                <footer className="flex flex-col w-full items-center my-4">
                    <div className="flex flex-col w-full items-center">
                        <p className="text-xs font-thin italic">
                            Created by Cedric Florentin | 2024
                        </p>
                    </div>
                </footer>
            </div>
        </main>
    );
}
