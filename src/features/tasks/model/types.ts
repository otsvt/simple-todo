export type Task = { id: string; text: string; completed: boolean };

export type AddedTask = Omit<Task, "id">;

export type ErrorFetch = { error: boolean; message: string };

export interface TaskInputProps {
  refetchTasks: () => Promise<void>;
}

export interface TaskContentProps {
  tasks: Task[] | null;
  refetchTasks: () => Promise<void>;
  activeFilter: TaskFilter;
  changeActiveFilter: (filter: TaskFilter) => void;
}

export interface TaskListProps {
  tasks: Task[];
  refetchTasks: () => Promise<void>;
}

export interface TaskItemProps {
  task: Task;
  refetchTasks: () => Promise<void>;
}

export interface TaskFooterProps {
  tasks: Task[];
  activeFilter: TaskFilter;
  refetchTasks: () => Promise<void>;
  changeActiveFilter: (filter: TaskFilter) => void;
}

export interface TaskFilterItemProps {
  filter: TaskFilter;
  isActive: boolean;
  changeActiveFilter: (filter: TaskFilter) => void;
}

export enum TaskFilter {
  All = "All",
  ACTIVE = "Active",
  COMPLETED = "Completed",
}
