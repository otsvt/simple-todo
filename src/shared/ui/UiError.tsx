import clsx from "clsx";

interface UiErrorProps {
  message: string;
  className?: string;
}

export const UiError = ({ className, message }: UiErrorProps) => {
  return <span className={clsx(className, "absolute text-red-600 italic text-xl text-nowrap")}>{message}</span>;
};
