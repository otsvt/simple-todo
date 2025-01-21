import clsx from "clsx";
import { TaskFilterItemProps } from "../model/types";

export const TaskFilterItem = ({ filter, isActive, changeActiveFilter }: TaskFilterItemProps) => {
  const handleChangeClick = () => changeActiveFilter(filter);

  return (
    <button
      className={clsx(
        "border py-1 px-2 transition-opacity",
        isActive ? "border-black/50 rounded-md" : "border-transparent hover:opacity-50"
      )}
      onClick={handleChangeClick}
    >
      {filter}
    </button>
  );
};
