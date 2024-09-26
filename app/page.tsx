import getData from "@/server/get-data";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

interface RouteData {
    [key: string]: Array<{
        zoneId: number;
        routeColor: string;
        routeGrade: number;
        setter: string;
        date: string;
        betaLink?: string;
    }>;
}

export default async function Home() {
    const res = await getData();
    if (!res || typeof res !== "string") {
        return <div>oops refresh?</div>;
    }
    const data: RouteData = JSON.parse(res);

    return (
        <div className="">
            <main className="flex flex-col items-center">
                <div className="h-10 w-full bg-transparent border-b items-center justify-between flex">
                    <div>
                        <Button variant="ghost" asChild>
                            <Link
                                href="https://www.instagram.com/vietclimb_beta/"
                                target="_blank"
                            >
                                <FaInstagram />
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link
                                href="https://www.facebook.com/VietClimb"
                                target="_blank"
                            >
                                <FaFacebook />
                            </Link>
                        </Button>
                    </div>
                    <ModeToggle />
                </div>
                <div className="flex justify-center min-h-screen pt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className=" text-4xl font-bold">
                                Vietclimb's Routes Map and Stats
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {Object.entries(data).map(([areaName, routes]) => (
                                <div key={areaName}>
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th>route name</th>
                                                <th>zone id</th>
                                                <th>route color</th>
                                                <th>route grade</th>
                                                <th>route setter</th>
                                                <th>route date</th>
                                                <th>route link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {routes.map((route) => (
                                                <tr key={route.zoneId}>
                                                    <td>{areaName}</td>
                                                    <td>{route.zoneId}</td>
                                                    <td>{route.routeColor}</td>
                                                    <td>{route.routeGrade}</td>
                                                    <td>{route.setter}</td>
                                                    <td>{route.date}</td>
                                                    <td>
                                                        {route.betaLink ? (
                                                            <a
                                                                href={
                                                                    route.betaLink
                                                                }
                                                            >
                                                                Beta Link
                                                            </a>
                                                        ) : (
                                                            "/"
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </div>
    );
}
