import { useEffect, useState } from "react";
import { todo } from "../api/api";
import { Task } from "../model/types";

export const useTasksFetch = () => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);

    const response = await todo.getTasks();

    if ("error" in response) {
      setError(response.message);
    } else {
      setTasks(response);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, error, isLoading, refetchTasks: fetchTasks };
};
