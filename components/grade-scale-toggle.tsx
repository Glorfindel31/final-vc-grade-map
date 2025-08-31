"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useGradeScale } from "@/context/GradeScaleContext";

export function GradeScaleToggle() {
  const { gradeScale, setGradeScale } = useGradeScale();

  const handleGradeScaleChange = (value: string) => {
    setGradeScale(value as "VC" | "VS" | "FT" | "OVS" | "OFT" | "MG");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {gradeScale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-30">
        <DropdownMenuRadioGroup
          value={gradeScale}
          onValueChange={handleGradeScaleChange}
        >
          <DropdownMenuRadioItem value="VC">Vietclimb</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="VS">Vscale</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="FT">Font Scale</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="OVS">
            Outdoor Vscale
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="OFT">
            Outdoor Font Scale
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="MG">V2 in my gym</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
