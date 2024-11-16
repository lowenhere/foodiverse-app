import React, { ReactNode } from "react";
import Spinner from "@/components/Spinner";

type SpinnerPageProps = {
  message?: string;
};

export default function SpinnerPage({ message = "" }: SpinnerPageProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full p-4">
      <Spinner size="xl" />
      <p className="my-4">{message}</p>
    </div>
  );
}
