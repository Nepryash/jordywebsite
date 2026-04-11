"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_crypto_1 = require("node:crypto");
const zod_1 = require("zod");
const rootDir = process.cwd();
const dataDir = node_path_1.default.join(rootDir, "data");
const clientDistDir = node_path_1.default.join(rootDir, "dist");
const contentFile = node_path_1.default.join(dataDir, "site-content.json");
const submissionsFile = node_path_1.default.join(dataDir, "submissions.json");
const port = Number(process.env.PORT || 3000);
const submissionSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(2, "Name must be at least 2 characters."),
    email: zod_1.z.string().trim().email("A valid email address is required."),
    subject: zod_1.z.string().trim().min(3, "Subject must be at least 3 characters."),
    message: zod_1.z.string().trim().min(10, "Message must be at least 10 characters.")
});
function readJson(filePath, fallback) {
    try {
        if (!node_fs_1.default.existsSync(filePath)) {
            return fallback;
        }
        return JSON.parse(node_fs_1.default.readFileSync(filePath, "utf8"));
    }
    catch {
        return fallback;
    }
}
function writeJson(filePath, value) {
    node_fs_1.default.writeFileSync(filePath, JSON.stringify(value, null, 2));
}
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "1mb" }));
app.get("/api/health", (_request, response) => {
    response.json({ ok: true, timestamp: new Date().toISOString() });
});
app.get("/api/content", (_request, response) => {
    response.json(readJson(contentFile, {}));
});
app.post("/api/contact", (request, response) => {
    const result = submissionSchema.safeParse(request.body);
    if (!result.success) {
        response.status(400).json({
            ok: false,
            errors: result.error.issues.map((issue) => issue.message)
        });
        return;
    }
    const submissions = readJson(submissionsFile, []);
    const submission = {
        id: (0, node_crypto_1.randomUUID)(),
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
if (node_fs_1.default.existsSync(clientDistDir)) {
    app.use(express_1.default.static(clientDistDir));
    app.get(/^(?!\/api).*/, (_request, response) => {
        response.sendFile(node_path_1.default.join(clientDistDir, "index.html"));
    });
}
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
