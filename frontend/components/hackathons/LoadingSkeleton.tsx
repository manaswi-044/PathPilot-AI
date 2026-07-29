import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-6">
          <div className="flex justify-between items-start">
             <Skeleton className="h-6 w-32 bg-white/5" />
             <Skeleton className="h-4 w-12 bg-white/5 rounded-full" />
          </div>
          <Skeleton className="h-8 w-full bg-white/5" />
          <Skeleton className="h-20 w-full rounded-2xl bg-white/5" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-8 w-full bg-white/5" />
            <Skeleton className="h-8 w-full bg-white/5" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-5 w-12 bg-white/5" />
            <Skeleton className="h-5 w-12 bg-white/5" />
            <Skeleton className="h-5 w-12 bg-white/5" />
          </div>
          <div className="pt-6 border-t border-white/5 flex gap-3">
             <Skeleton className="h-10 flex-1 bg-white/5" />
             <Skeleton className="h-10 flex-1 bg-white/5" />
             <Skeleton className="h-10 w-10 bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}