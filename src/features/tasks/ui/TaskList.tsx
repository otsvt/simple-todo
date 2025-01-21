import { TaskListProps } from "../model/types";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, refetchTasks }: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem refetchTasks={refetchTasks} task={task} />
        </li>
      ))}
    </ul>
  );
};
