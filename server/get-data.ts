"use server";

import { sheets as _sheets, auth as _auth } from "@googleapis/sheets";
import { revalidatePath } from "next/cache";

interface ZoneData {
  zoneId: number;
  routeColor: string;
  routeGrade: number;
  setter: string;
  date: string;
  betaLink: string;
}

const sheetID = process.env.SHEET_ID;
const keys = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
  client_x509_cert_url: process.env.CLIENT,
  universe_domain: process.env.UNIVERSE_DOMAIN,
};

const auth = new _auth.GoogleAuth({
  credentials: keys,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const gsapi = _sheets({ version: "v4", auth });

export default async function getData() {
  try {
    const gradeList = await gsapi.spreadsheets.values.get({
      spreadsheetId: sheetID,
      range: "SettingSheet!B2:I226",
    });

    const groupedData = gradeList.data.values?.reduce(
      (
        acc: Record<string, ZoneData[]>,
        row: any[],
      ): Record<string, ZoneData[]> => {
        if (row.length >= 7) {
          const [
            zone, // B: Zone name (e.g., "Moon Korner")
            zoneId, // C: Problem number (e.g., "1", "2", "3")
            routeColor, // D: Color (e.g., "Vàng / Yellow")
            oldVGrade, // E: Old V-grade (e.g., "V4", "V10") - IGNORE THIS
            newGrade, // F: New numerical grade (e.g., "6", "12", "5") - USE THIS
            setter, // G: Setter name (e.g., "Cedric")
            date, // H: Date (e.g., "25/08/2025")
          ] = row;

          if (!acc[zone]) {
            acc[zone] = [];
          }

          // Extract English color from "Vàng / Yellow" format
          const englishColor = routeColor
            ? routeColor.split("/").pop()?.trim() || routeColor
            : "";

          // Use the new numerical grade system (column F)
          const gradeNumber = parseInt(newGrade) || 0;

          // Beta link is optional (column I) - may not exist for all rows
          const betaLink = row.length >= 8 ? row[7] : "";

          acc[zone].push({
            zoneId: parseInt(zoneId) || 0,
            routeColor: englishColor,
            routeGrade: gradeNumber,
            setter: setter || "",
            date: date || "",
            betaLink: betaLink || "", // Use actual beta link from column I
          });
        }
        return acc;
      },
      {} as Record<string, ZoneData[]>,
    );

    const response = JSON.stringify(groupedData);

    revalidatePath("/");
    return response;
  } catch (error) {
    console.error("Error fetching grade data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch grade data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
