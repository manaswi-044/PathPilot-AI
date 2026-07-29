import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <Skeleton className="h-10 w-10 rounded-xl bg-white/10" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 bg-white/10" />
                <Skeleton className="h-3 w-16 bg-white/10" />
              </div>
            </div>
            <Skeleton className="h-10 w-10 rounded-full bg-white/10" />
          </div>
          <Skeleton className="h-6 w-full bg-white/10" />
          <div className="flex gap-2">
            <Skeleton className="h-4 w-12 bg-white/10" />
            <Skeleton className="h-4 w-12 bg-white/10" />
          </div>
          <div className="pt-4 border-t border-white/5 flex gap-2">
            <Skeleton className="h-9 flex-1 bg-white/10" />
            <Skeleton className="h-9 flex-1 bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}