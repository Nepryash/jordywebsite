import type { ContactPayload, ContactResponse, SiteContent } from "./types";

export async function fetchContent(): Promise<SiteContent> {
  const response = await fetch("/api/content");

  if (!response.ok) {
    throw new Error("Unable to load site content.");
  }

  return (await response.json()) as SiteContent;
}

export async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = (await response.json()) as ContactResponse;

  if (!response.ok) {
    throw new Error(result.errors?.join(" ") || "Unable to send your request.");
  }

  return result;
}
