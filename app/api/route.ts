import { google, Auth } from "googleapis";

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

const auth: Auth.GoogleAuth = new google.auth.GoogleAuth({
    credentials: keys,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const gsapi = google.sheets({ version: "v4", auth });

export async function GET(): Promise<Response> {
    try {
        const gradeList = await gsapi.spreadsheets.values.get({
            spreadsheetId: sheetID,
            range: "SettingSheet!B2:H226",
        });

        const groupedData = gradeList.data.values?.reduce(
            (
                acc: Record<string, ZoneData[]>,
                row
            ): Record<string, ZoneData[]> => {
                if (row.length > 5) {
                    const [
                        zone,
                        zoneId,
                        routeColor,
                        routeGrade,
                        setter,
                        date,
                        betaLink,
                    ] = row;
                    if (!acc[zone]) {
                        acc[zone] = [];
                    }
                    acc[zone].push({
                        zoneId: parseInt(zoneId),
                        routeColor,
                        routeGrade: parseInt(routeGrade),
                        setter,
                        date,
                        betaLink,
                    });
                }
                return acc;
            },
            {} as Record<string, ZoneData[]>
        );

        return new Response(JSON.stringify(groupedData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching grade data:", error);
        return new Response(
            JSON.stringify({ error: "Failed to fetch grade data" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
