import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT || 3000);
const root = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json({ limit: "2mb" }));

const leads: Array<Record<string, string | number>> = [];
app.get("/api/health", (_req, res) => res.json({ ok: true, service: "athr-digital-platform" }));
app.get("/api/content", (_req, res) => res.json({ ok: true, data: { leads: leads.length } }));
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body ?? {};
  if (typeof name !== "string" || name.trim().length < 2 || typeof email !== "string" || !email.includes("@") || typeof message !== "string" || message.trim().length < 10) {
    return res.status(400).json({ ok: false, message: "يرجى تعبئة الحقول المطلوبة بشكل صحيح." });
  }
  leads.push({ id: leads.length + 1, name: name.trim(), email: email.trim(), message: message.trim(), createdAt: Date.now() });
  return res.status(201).json({ ok: true, message: "تم استلام رسالتك بنجاح." });
});

if (process.env.NODE_ENV === "production") app.use(express.static(path.join(root, "../dist/client")));
app.listen(port, () => console.log(`ATHR API listening on ${port}`));
