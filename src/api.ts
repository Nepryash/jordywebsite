import type { ContactPayload, ContactResponse, SiteContent } from "./types";
import siteContent from "../data/site-content.json";

export async function fetchContent(): Promise<SiteContent> {
  return siteContent as SiteContent;
}

export async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const fallbackMessage = "Uw aanvraag kon niet worden verzonden.";
    const result = (await response.json().catch(() => null)) as ContactResponse | null;
    throw new Error(result?.errors?.join(" ") || result?.message || fallbackMessage);
  }

  return (await response.json()) as ContactResponse;
}
