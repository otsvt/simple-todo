import { Task, TaskFilter } from "../model/types";

export const useFilter = (tasks: Task[] | null, activeFilter: TaskFilter) => {
  const filterTasks = (tasks: Task[] | null) => {
    if (!tasks) return [];

    switch (activeFilter) {
      case TaskFilter.ACTIVE:
        return tasks.filter((task) => !task.completed);
      case TaskFilter.COMPLETED:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(tasks);

  return filteredTasks;
};
