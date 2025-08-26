import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Grading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="pb-1 text-center text-2xl font-semibold tracking-tight transition-colors">
          Grading Scale
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-row flex-wrap justify-center gap-4 py-2 text-xs">
          {/* 1-2: Yellow */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-yellow-500 bg-white text-lg font-bold text-gray-800">
              1
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-yellow-500 bg-white text-lg font-bold text-gray-800">
              2
            </div>
          </div>

          {/* 3-4: Orange */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-orange-500 bg-white text-lg font-bold text-gray-800">
              3
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-orange-500 bg-white text-lg font-bold text-gray-800">
              4
            </div>
          </div>

          {/* 5-6: Green */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-green-500 bg-white text-lg font-bold text-gray-800">
              5
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-green-500 bg-white text-lg font-bold text-gray-800">
              6
            </div>
          </div>

          {/* 7-8: Blue */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-blue-500 bg-white text-lg font-bold text-gray-800">
              7
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-blue-500 bg-white text-lg font-bold text-gray-800">
              8
            </div>
          </div>

          {/* 9-10: Red */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-red-500 bg-white text-lg font-bold text-gray-800">
              9
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-red-500 bg-white text-lg font-bold text-gray-800">
              10
            </div>
          </div>

          {/* 11-12: Black */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-zinc-950 bg-white text-lg font-bold text-gray-800">
              11
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-zinc-950 bg-white text-lg font-bold text-gray-800">
              12
            </div>
          </div>

          {/* 13-14: White */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-zinc-300 bg-white text-lg font-bold text-gray-800">
              13
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-zinc-300 bg-white text-lg font-bold text-gray-800">
              14
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
