"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

  if (!posthogKey) {
    console.error("NEXT_PUBLIC_POSTHOG_KEY is not set");
    throw new Error("NEXT_PUBLIC_POSTHOG_KEY is not set");
  }

  posthog.init(posthogKey, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
  });
}
export function CSPostHogProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
