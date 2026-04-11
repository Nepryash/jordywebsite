import express, { type Request, type Response } from "express";
import path from "node:path";
import fs from "node:fs";
import { randomUUID } from "node:crypto";
import { z } from "zod";

const rootDir = process.cwd();
const dataDir = path.join(rootDir, "data");
const clientDistDir = path.join(rootDir, "dist");
const contentFile = path.join(dataDir, "site-content.json");
const submissionsFile = path.join(dataDir, "submissions.json");
const port = Number(process.env.PORT || 3000);

const submissionSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("A valid email address is required."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters."),
  message: z.string().trim().min(10, "Message must be at least 10 characters.")
});

type Submission = z.infer<typeof submissionSchema> & {
  id: string;
  receivedAt: string;
};

function readJson<T>(filePath: string, fallback: T): T {
  try {
    if (!fs.existsSync(filePath)) {
      return fallback;
    }

    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(filePath: string, value: T) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
}

const app = express();

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_request: Request, response: Response) => {
  response.json({ ok: true, timestamp: new Date().toISOString() });
});

app.get("/api/content", (_request: Request, response: Response) => {
  response.json(readJson<Record<string, unknown>>(contentFile, {}));
});

app.post("/api/contact", (request: Request, response: Response) => {
  const result = submissionSchema.safeParse(request.body);

  if (!result.success) {
    response.status(400).json({
      ok: false,
      errors: result.error.issues.map((issue) => issue.message)
    });
    return;
  }

  const submissions = readJson<Submission[]>(submissionsFile, []);
  const submission: Submission = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    ...result.data
  };

  submissions.unshift(submission);
  writeJson(submissionsFile, submissions);

  response.status(201).json({
    ok: true,
    message: "Your request has been sent. Our team will follow up shortly."
  });
});

if (fs.existsSync(clientDistDir)) {
  app.use(express.static(clientDistDir));

  app.get(/^(?!\/api).*/, (_request: Request, response: Response) => {
    response.sendFile(path.join(clientDistDir, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
