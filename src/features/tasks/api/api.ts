import axios from "axios";
import { AddedTask, ErrorFetch, Task } from "../model/types";
import { API_URL } from "./api.config";

const handleApiError = (error: unknown): ErrorFetch => {
  if (error instanceof Error) {
    return { error: true, message: error.message };
  }
  return { error: true, message: "Неизвестная ошибка" };
};

const getTasks = async (): Promise<Task[] | ErrorFetch> => {
  try {
    const responce = await axios.get(API_URL);
    return responce.data;
  } catch (error) {
    return handleApiError(error);
  }
};

const addTask = async (task: AddedTask): Promise<undefined | ErrorFetch> => {
  try {
    await axios.post(API_URL, task);
  } catch (error) {
    return handleApiError(error);
  }
};

const deleteCompletedTasks = async (taskIds: string[]): Promise<undefined | ErrorFetch> => {
  try {
    for (const taskId of taskIds) {
      await axios.delete(`${API_URL}/${taskId}`);
    }
  } catch (error) {
    return handleApiError(error);
  }
};

const changeTaskStatus = async (taskId: string, completed: boolean): Promise<undefined | ErrorFetch> => {
  try {
    await axios.patch(`${API_URL}/${taskId}`, { completed });
  } catch (error) {
    return handleApiError(error);
  }
};

export const todo = { getTasks, addTask, deleteCompletedTasks, changeTaskStatus };
