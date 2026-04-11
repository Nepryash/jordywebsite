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

  const result = (await response.json()) as ContactResponse;

  if (!response.ok) {
    throw new Error(result.errors?.join(" ") || "Unable to send your request.");
  }

  return result;
}
