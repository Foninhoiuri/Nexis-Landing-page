
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    isLoaded?: boolean;
}

export function Skeleton({ className, isLoaded, children, ...props }: SkeletonProps) {
    if (isLoaded) {
        return <>{children}</>;
    }

    return (
        <div
            className={cn("animate-pulse rounded-md bg-white/10", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export { Skeleton as default };

