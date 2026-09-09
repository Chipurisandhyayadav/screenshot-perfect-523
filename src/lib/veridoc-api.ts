import type { DocumentRecord } from "./veridoc-data";

export type AnalyzeDocumentResponse = {
  documentId: string;
  riskScore: number;
  classification: string;
  findings: unknown[];
};

export async function analyzeDocument(file: File): Promise<AnalyzeDocumentResponse> {
  const body = new FormData();
  body.append("document", file);
  const response = await fetch("/api/analyze-document", { method: "POST", body });
  if (!response.ok) throw new Error("Document analysis is unavailable.");
  return response.json() as Promise<AnalyzeDocumentResponse>;
}

export async function getDocument(id: string) { const response = await fetch(`/api/document/${encodeURIComponent(id)}`); if (!response.ok) throw new Error("Document could not be loaded."); return response.json(); }
export async function getHistory(): Promise<DocumentRecord[]> { const response = await fetch("/api/history"); if (!response.ok) throw new Error("History could not be loaded."); return response.json() as Promise<DocumentRecord[]>; }
export async function getDashboard() { const response = await fetch("/api/dashboard"); if (!response.ok) throw new Error("Dashboard could not be loaded."); return response.json(); }
