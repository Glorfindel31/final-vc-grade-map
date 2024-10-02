import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ModeToggle } from "./ui/toggle-mode";

export default function MenuBar() {
    return (
        <div className="h-10  border-b items-center justify-between flex  sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
