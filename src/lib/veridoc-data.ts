export type Classification = "Likely genuine" | "Needs review" | "Suspicious";
export type CheckState = "Passed" | "Warning" | "Failed";
export type Check = { name: string; state: CheckState; detail: string };
export type DocumentRecord = { id: string; date: string; score: number; classification: Classification; reviewer: string; status: "Complete" | "In review" };

export const demoDocument = { id: "DEMO123456", name: "Rahul Kumar", dob: "12-04-2007", documentNumber: "EXA-2007-4419", address: "14 Sample Street, New Delhi", authority: "Example Authority", issueDate: "18-06-2023", expiryDate: "17-06-2033", score: 38, classification: "Needs review" as Classification, explanation: "The document presents several consistent identity fields, but image quality and formatting anomalies require a human reviewer before acceptance." };
export const demoChecks: Check[] = [
  { name: "OCR extraction", state: "Passed", detail: "All readable text regions were extracted." },
  { name: "Required field detection", state: "Passed", detail: "7 of 7 expected fields were found." },
  { name: "Image quality", state: "Warning", detail: "Low contrast detected around the document number." },
  { name: "Document structure", state: "Passed", detail: "Expected field order is present." },
  { name: "Text consistency", state: "Warning", detail: "Minor baseline variation in the address block." },
  { name: "Formatting consistency", state: "Warning", detail: "Font weight differs in one printed region." },
  { name: "Suspicious region detection", state: "Failed", detail: "One region needs manual inspection." },
  { name: "Metadata analysis", state: "Passed", detail: "No embedded edit history found in sample file." },
];
export const demoRecords: DocumentRecord[] = [
  { id: "DEMO123456", date: "Today, 10:42 AM", score: 38, classification: "Needs review", reviewer: "A. Sharma", status: "In review" },
  { id: "DEMO123455", date: "Today, 09:18 AM", score: 12, classification: "Likely genuine", reviewer: "A. Sharma", status: "Complete" },
  { id: "DEMO123454", date: "Yesterday, 04:36 PM", score: 79, classification: "Suspicious", reviewer: "R. Mehta", status: "Complete" },
  { id: "DEMO123453", date: "Yesterday, 01:07 PM", score: 24, classification: "Likely genuine", reviewer: "R. Mehta", status: "Complete" },
  { id: "DEMO123452", date: "08 Sep 2026, 11:29 AM", score: 55, classification: "Needs review", reviewer: "A. Sharma", status: "Complete" },
];
export const riskFactors = [
  { label: "Image quality", value: 5, tone: "warning" }, { label: "Field completeness", value: 2, tone: "success" }, { label: "Text consistency", value: 4, tone: "warning" }, { label: "Format consistency", value: 3, tone: "warning" }, { label: "Tampering indicators", value: 6, tone: "danger" },
];
export const pipelineSteps = ["Document upload", "OCR & extraction", "Quality checks", "Risk scoring", "Human review"];
