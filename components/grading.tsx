"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGradeScale } from "@/context/GradeScaleContext";
import { gradeScales } from "@/lib/grades";

export default function Grading() {
  const { gradeScale } = useGradeScale();
  const grades = gradeScales[gradeScale];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="pb-1 text-center text-2xl font-semibold tracking-tight transition-colors">
          Grading Scale
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-row flex-wrap justify-center gap-4 py-2 text-xs">
          {grades.map((grade, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border-4 ${grade.color} bg-white text-base font-bold text-gray-800`}
              >
                {grade.grade}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
