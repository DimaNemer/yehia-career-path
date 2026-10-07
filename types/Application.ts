export type ApplicationStatus =
  | "Applied"
  | "Under review"
  | "Rejected";

export interface Application {
  id: number;
  title: string;
  company: string;
  status: ApplicationStatus;
}