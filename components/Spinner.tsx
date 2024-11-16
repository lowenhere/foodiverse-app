import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "muted";
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", color = "primary", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-8 w-8",
      lg: "h-12 w-12",
      xl: "h-16 w-16",
    };

    const colorClasses = {
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin",
          sizeClasses[size],
          colorClasses[color],
          className,
        )}
        {...props}
      >
        <Loader2 className="h-full w-full" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);

Spinner.displayName = "Spinner";

export default Spinner;
