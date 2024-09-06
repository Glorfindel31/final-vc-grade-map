import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
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
            </main>
        </div>
    );
}
