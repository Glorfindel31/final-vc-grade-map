import { AllRoutes, RouteData } from "@/app/routesList/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allRouteListMutation, cn } from "@/lib/utils";
import { SetterChart } from "@/components/setter-chart";
export default function RouteSetterChart({
  data,
  className,
}: {
  data: RouteData;
  className?: string;
}) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight transition-colors">
          Route-setter Chart
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SetterChart data={allRouteListMutation(data) as AllRoutes[]} />
      </CardContent>
    </Card>
  );
}
