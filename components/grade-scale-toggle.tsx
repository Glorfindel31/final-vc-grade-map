"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useGradeScale } from "@/context/GradeScaleContext";

export function GradeScaleToggle() {
  const { gradeScale, setGradeScale } = useGradeScale();

  const handleGradeScaleChange = (value: string) => {
    setGradeScale(value as "Vietclimb" | "Vscale");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{gradeScale}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-30">
        <DropdownMenuLabel>Grade Scale</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={gradeScale}
          onValueChange={handleGradeScaleChange}
        >
          <DropdownMenuRadioItem value="Vietclimb">
            Vietclimb
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Vscale">Vscale</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
