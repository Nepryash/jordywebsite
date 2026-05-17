import { randomUUID } from "node:crypto";
import { getStore } from "@netlify/blobs";
import { z } from "zod";

const submissionSchema = z.object({
  name: z.string().trim().min(2, "Vul minimaal 2 tekens in voor uw naam."),
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  subject: z.string().trim().min(3, "Vul een onderwerp van minimaal 3 tekens in."),
  message: z.string().trim().min(10, "Vul een bericht van minimaal 10 tekens in.")
});

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export default async (req) => {
  if (req.method !== "POST") {
    return json({ ok: false, errors: ["Method not allowed"] }, 405);
  }

  let body;

  try {
    body = await req.json();
  } catch {
    return json({ ok: false, errors: ["Ongeldige aanvraaggegevens."] }, 400);
  }

  const result = submissionSchema.safeParse(body);

  if (!result.success) {
    return json(
      {
        ok: false,
        errors: result.error.issues.map((issue) => issue.message)
      },
      400
    );
  }

  const submission = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    ...result.data
  };

  const store = getStore({ name: "contact-submissions" });
  await store.setJSON(`submissions/${submission.receivedAt}-${submission.id}.json`, submission, {
    metadata: {
      email: submission.email,
      subject: submission.subject
    }
  });

  return json(
    {
      ok: true,
      message: "Uw aanvraag is verzonden. Ons team neemt binnenkort contact met u op."
    },
    201
  );
};

export const config = {
  path: "/api/contact",
  method: ["POST"]
};
