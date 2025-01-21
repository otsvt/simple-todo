import { useState } from "react";
import { TaskContent, TaskInput, useTasksFetch } from "../../features/tasks";
import { UiError, UiSpinner } from "../../shared/ui";
import { TaskFilter } from "../../features/tasks/model/types";

export const Todo = () => {
  const { tasks, error, isLoading, refetchTasks } = useTasksFetch();
  const [activeFilter, setActiveFilter] = useState<TaskFilter>(TaskFilter.All);

  const changeActiveFilter = (filter: TaskFilter) => setActiveFilter(filter);

  const renderTaskContent = () => {
    if (isLoading) {
      return (
        <div className="p-6 flex items-center justify-center">
          <UiSpinner />
        </div>
      );
    }

    if (error) {
      return (
        <div className="p-6 flex items-center justify-center">
          <UiError message={error} />
        </div>
      );
    }

    return (
      <TaskContent
        tasks={tasks}
        refetchTasks={refetchTasks}
        activeFilter={activeFilter}
        changeActiveFilter={changeActiveFilter}
      />
    );
  };

  return (
    <main className="w-full bg-main border shadow-xl">
      <TaskInput refetchTasks={refetchTasks} />
      {renderTaskContent()}
    </main>
  );
};
