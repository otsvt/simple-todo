import { useState } from "react";
import { todo } from "../api/api";
import { TaskFilter, TaskFooterProps } from "../model/types";
import { UiError } from "../../../shared/ui";
import { TaskFilterItem } from "./TaskFilterItem";

export const TaskFooter = ({ tasks, activeFilter, refetchTasks, changeActiveFilter }: TaskFooterProps) => {
  const [error, setError] = useState<string | null>(null);
  const filters = Object.values(TaskFilter);

  const activeTasksLength = tasks.filter((task) => !task.completed).length || 0;
  const completedTaskIds = tasks.filter((task) => task.completed).map((task) => task.id);

  const handleTasksDelete = async () => {
    setError(null);

    if (completedTaskIds.length === 0) return;

    const response = await todo.deleteCompletedTasks(completedTaskIds);
    if (response) setError(response.message);
    else refetchTasks();
  };

  return (
    <div className="relative py-2 px-4 grid grid-cols-3 items-center gap-10">
      <span className="justify-self-start italic opacity-50">{activeTasksLength} items left</span>
      <div className="justify-self-center flex gap-5 opacity-50">
        {filters.map((filter, i) => (
          <TaskFilterItem
            key={i}
            filter={filter}
            isActive={activeFilter === filter}
            changeActiveFilter={changeActiveFilter}
          />
        ))}
      </div>
      <button
        className="justify-self-end italic opacity-50 hover:opacity-25 transition-opacity"
        onClick={handleTasksDelete}
      >
        Clear completed
      </button>
      {error && <UiError message={error} className="left-[calc(100%+1rem)] top-1/2 -translate-y-1/2" />}
    </div>
  );
};
