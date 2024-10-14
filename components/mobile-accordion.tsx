import RouteList from "@/components/route-list";
import AllRouteList from "@/components/all-route-list";
import OverallChart from "@/components/overall-chart";
import RouteSetterChart from "@/components/route-setter-chart";
import { RouteData } from "@/app/routesList/columns";
import { cn } from "@/lib/utils";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export interface MobileAccordionProps {
    data: RouteData;
    className?: string;
}

export default function MobileAccordion({
    className,
    data,
    ...props
}: MobileAccordionProps) {
    return (
        <div className={cn(className)} {...props}>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Route list / Zones</AccordionTrigger>
                    <AccordionContent>
                        <RouteList data={data} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>All Route List</AccordionTrigger>
                    <AccordionContent>
                        <AllRouteList data={data} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Overall level chart</AccordionTrigger>
                    <AccordionContent>
                        <OverallChart data={data} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Route-Setter chart</AccordionTrigger>
                    <AccordionContent>
                        <RouteSetterChart data={data} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
