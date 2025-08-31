"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

type GradeScale = "VC" | "VS" | "FT" | "OVS" | "OFT" | "MG";

interface GradeScaleContextType {
  gradeScale: GradeScale;
  setGradeScale: (scale: GradeScale) => void;
}

const GradeScaleContext = createContext<GradeScaleContextType | undefined>(
  undefined,
);

export function GradeScaleProvider({ children }: { children: ReactNode }) {
  const [gradeScale, setGradeScaleState] = useState<GradeScale>("VC");

  useEffect(() => {
    const storedGradeScale = localStorage.getItem("gradeScale");
    if (
      storedGradeScale &&
      ["VC", "VS", "FT", "OVS", "OFT", "MG"].includes(
        storedGradeScale as GradeScale,
      )
    ) {
      setGradeScaleState(storedGradeScale as GradeScale);
    } else {
      setGradeScaleState("VC");
    }
  }, []);

  const setGradeScale = (scale: GradeScale) => {
    setGradeScaleState(scale);
    localStorage.setItem("gradeScale", scale);
  };

  return (
    <GradeScaleContext.Provider value={{ gradeScale, setGradeScale }}>
      {children}
    </GradeScaleContext.Provider>
  );
}

export function useGradeScale() {
  const context = useContext(GradeScaleContext);
  if (context === undefined) {
    throw new Error("useGradeScale must be used within a GradeScaleProvider");
  }
  return context;
}
