import React, { ReactNode } from "react";

type SpinnerPageProps = {
  message?: string;
};

export default function SpinnerPage({ message = "" }: SpinnerPageProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full p-4">
      <span className="loading loading-spinner loading-lg my-4"></span>
      <p>{message}</p>
    </div>
  );
}
