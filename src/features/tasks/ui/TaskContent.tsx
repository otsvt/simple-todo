import { useFilter } from "../hooks/use-filter";
import { TaskContentProps } from "../model/types";
import { TaskFooter } from "./TaskFooter";
import { TaskList } from "./TaskList";
import { UiError } from "../../../shared/ui";

export const TaskContent = ({ tasks, activeFilter, refetchTasks, changeActiveFilter }: TaskContentProps) => {
  const filteredTasks = useFilter(tasks, activeFilter);

  const renderTaskList = () => {
    if (filteredTasks.length === 0) {
      return (
        <div className="p-8 flex items-center justify-center border-b">
          <UiError message={"There is nothing here"} />
        </div>
      );
    }

    return <TaskList tasks={filteredTasks} refetchTasks={refetchTasks} />;
  };

  return (
    <>
      {renderTaskList()}
      <TaskFooter
        activeFilter={activeFilter}
        changeActiveFilter={changeActiveFilter}
        tasks={tasks || []}
        refetchTasks={refetchTasks}
      />
    </>
  );
};
