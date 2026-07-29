import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-6">
          <div className="flex gap-4">
            <Skeleton className="h-14 w-14 rounded-2xl bg-white/5" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-6 w-3/4 bg-white/5" />
              <Skeleton className="h-4 w-1/2 bg-white/5" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-16 w-full rounded-xl bg-white/5" />
            <Skeleton className="h-16 w-full rounded-xl bg-white/5" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20 rounded-md bg-white/5" />
            <Skeleton className="h-6 w-20 rounded-md bg-white/5" />
          </div>
          <div className="pt-4 border-t border-white/5 flex gap-3">
            <Skeleton className="h-10 flex-1 rounded-md bg-white/5" />
            <Skeleton className="h-10 flex-1 rounded-md bg-white/5" />
            <Skeleton className="h-10 w-10 rounded-md bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}