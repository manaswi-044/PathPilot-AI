import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5 backdrop-blur-sm">
          <div className="flex justify-between">
            <div className="space-y-2">
              <Skeleton className="h-6 w-36 bg-white/5" />
              <Skeleton className="h-4 w-24 bg-white/5" />
            </div>
            <Skeleton className="h-12 w-12 rounded-full bg-white/5" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-14 w-full rounded-xl bg-white/5" />
            <Skeleton className="h-14 w-full rounded-xl bg-white/5" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-md bg-white/5" />
            <Skeleton className="h-6 w-20 rounded-md bg-white/5" />
            <Skeleton className="h-6 w-14 rounded-md bg-white/5" />
          </div>
          <Skeleton className="h-10 w-full rounded-xl bg-white/5 pt-2" />
        </div>
      ))}
    </div>
  );
}