export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export type Stage = "prepare" | "practice" | "apply";

export interface Milestone {
  id: number;
  stage: Stage;
  title: string;
  description: string;
  tasks: Task[];
}