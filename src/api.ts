import type { ContactPayload, ContactResponse, SiteContent } from "./types";
import siteContent from "../data/site-content.json";

export async function fetchContent(): Promise<SiteContent> {
  return siteContent as SiteContent;
}

function isLocalhost() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
}

export async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  const response = isLocalhost()
    ? await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
    : await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          "form-name": "contact",
          ...payload
        }).toString()
      });

  if (!response.ok) {
    const fallbackMessage = "Uw aanvraag kon niet worden verzonden.";

    if (isLocalhost()) {
      const result = (await response.json()) as ContactResponse;
      throw new Error(result.errors?.join(" ") || fallbackMessage);
    }

    throw new Error(fallbackMessage);
  }

  if (isLocalhost()) {
    return (await response.json()) as ContactResponse;
  }

  return {
    ok: true,
    message: "Uw aanvraag is verzonden. Ons team neemt binnenkort contact met u op."
  };
}
