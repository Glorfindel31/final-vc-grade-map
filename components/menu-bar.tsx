import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ModeToggle } from "./ui/toggle-mode";

export default function MenuBar() {
    return (
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
    );
}
