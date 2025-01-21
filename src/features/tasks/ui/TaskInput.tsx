import { TaskInputProps } from "../model/types";
import { UiAddButton, UiError } from "../../../shared/ui";
import { ChangeEvent, FormEvent, useState } from "react";
import { todo } from "../api/api";

export const TaskInput = ({ refetchTasks }: TaskInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (inputValue.trim() === "") return;

    const response = await todo.addTask({ completed: false, text: inputValue });

    if (response) setError(response.message);
    else {
      setInputValue("");
      refetchTasks();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative py-4 px-14 border-b flex items-center justify-between gap-5">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="w-full outline-none text-xl placeholder:italic placeholder:opacity-30"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button
        type="submit"
        className="h-10 w-10 flex shrink-0 justify-center items-center hover:bg-slate-200/50 rounded-full transition-opacity"
      >
        <UiAddButton />
      </button>
      {error && <UiError className="-top-8" message={error} />}
    </form>
  );
};
