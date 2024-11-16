import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

type ErrorPageProps = {
  message?: string;
};

export default function ErrorPage({ message = "" }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full p-4">
      <ExclamationTriangleIcon className="h-12 w-12 my-4" />
      <p className="text-lg font-bold">Something went wrong</p>
      <p>{message}</p>
    </div>
  );
}
