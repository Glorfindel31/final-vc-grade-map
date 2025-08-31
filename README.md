# Vietclimb Routes Map and Stats

This project is a Next.js web application designed to visualize and present bouldering route data for the Vietclimb bouldering gym. It fetches route information from a Google Sheet, processes it, and displays it through interactive lists and charts.

## Features

- **Dynamic Data Fetching**: Retrieves the latest bouldering route data directly from a specified Google Sheet using the `googleapis` library.
- **Comprehensive Route Lists**: Displays all routes with details such as zone, route ID, color, grade, setter, and date.
- **Statistical Charts**: Provides various charts to visualize overall route distribution, setter contributions, and other relevant statistics using `recharts`.
- **Mobile Responsiveness**: Includes an accordion view for mobile devices to ensure a good user experience across different screen sizes.
- **Theme Switching**: Supports light and dark modes for user preference, powered by `next-themes`.
- **Modern UI Components**: Utilizes `@radix-ui/react-*` components and `shadcn/ui` for a clean and accessible user interface.

## Technologies Used

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Data Fetching**: Google APIs (specifically Google Sheets API)
- **UI Components**: Radix UI, Shadcn UI
- **Charting**: Recharts
- **State Management/Utilities**: `clsx`, `tailwind-merge`, `lucide-react`, `react-icons`
- **TypeScript**: For type safety and improved developer experience.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone [repository-url]
    cd final-vc-grade-map
    ```
2.  **Install dependencies**:
    ```bash
    pnpm install
    # or npm install
    # or yarn install
    ```
3.  **Set up Google Sheets API**:

    - Enable the Google Sheets API in the Google Cloud Console.
    - Create a service account and download its JSON key file.
    - Share your Google Sheet with the service account's email address.
    - Set up environment variables in a `.env.local` file based on the `server/get-data.ts` file's `keys` object and your Google Sheet ID.

    Example `.env.local`:

    ```
    SHEET_ID="YOUR_GOOGLE_SHEET_ID"
    TYPE="service_account"
    PROJECT_ID="your-project-id"
    PRIVATE_KEY_ID="your-private-key-id"
    PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
    CLIENT_EMAIL="your-service-account-email@your-project-id.iam.gserviceaccount.com"
    CLIENT_ID="your-client-id"
    AUTH_URI="https://accounts.google.com/o/oauth2/auth"
    TOKEN_URI="https://oauth2.googleapis.com/token"
    AUTH_PROVIDER="https://www.googleapis.com/oauth2/v1/certs"
    CLIENT="https://www.googleapis.com/robot/v1/metadata/x509/your-service-account-email%40your-project-id.iam.gserviceaccount.com"
    UNIVERSE_DOMAIN="googleapis.com"
    ```

    **Note**: Ensure `PRIVATE_KEY` is correctly formatted with `\n` for newlines.

4.  **Run the development server**:
    ```bash
    pnpm run dev
    # or npm run dev
    # or yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js application routes and main pages.
  - `page.tsx`: The main dashboard displaying route lists and charts.
  - `layout.tsx`: Root layout for the application, including theme provider and fonts.
  - `routesList/`: Components and definitions for the route data table.
- `components/`: Reusable UI components.
  - `all-route-list.tsx`: Component to display all routes in a data table.
  - `overall-chart.tsx`: Chart component for overall route statistics.
  - `route-setter-chart.tsx`: Chart component for route setter statistics.
  - `mobile-accordion.tsx`: Mobile-specific accordion view for charts and lists.
  - `ui/`: Shadcn UI components.
- `lib/`: Utility functions.
  - `utils.ts`: General utility functions, including `cn` for Tailwind CSS class merging.
- `server/`: Server-side logic.
  - `get-data.ts`: Server action to fetch and process data from Google Sheets.
