import type { Product } from "./types";

// Server-only — set in .env.local for staging/production. Falls back to the
// local Express API so the site works out of the box in development.
const API_URL = process.env.API_URL ?? "http://localhost:5000";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_URL}/api/products`, {
      // The catalog doesn't change on every request — revalidate quietly
      // in the background instead of caching forever or refetching every load.
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Products request failed with status ${res.status}`);
    }

    const json = await res.json();
    return (json.data ?? []) as Product[];
  } catch (error) {
    console.error("[COZY ERA] Failed to load products:", error);
    return [];
  }
}
