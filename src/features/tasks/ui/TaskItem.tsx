import clsx from "clsx";
import { UiCheckedIcon, UiError } from "../../../shared/ui";
import { TaskItemProps } from "../model/types";
import { todo } from "../api/api";
import { useState } from "react";

export const TaskItem = ({ task, refetchTasks }: TaskItemProps) => {
  const [error, setError] = useState<string | null>(null);

  const handleCheck = async () => {
    setError(null);

    const response = await todo.changeTaskStatus(task.id, !task.completed);

    if (response) setError(response.message);
    else refetchTasks();
  };

  return (
    <div className="relative p-4 border-b">
      <label className="flex items-center gap-4 cursor-pointer">
        <input
          onChange={handleCheck}
          checked={task.completed}
          type="checkbox"
          className="absolute opacity-0 w-0 h-0 peer"
        />
        <div className="w-8 h-8 rounded-full border flex justify-center items-center peer-focus-visible:border-slate-800">
          {task.completed && <UiCheckedIcon />}
        </div>
        <span className={clsx("text-xl", task.completed && "line-through opacity-30")}>{task.text}</span>
      </label>
      {error && <UiError className="right-[calc(100%+1rem)] top-1/2 -translate-y-1/2" message={error} />}
    </div>
  );
};
