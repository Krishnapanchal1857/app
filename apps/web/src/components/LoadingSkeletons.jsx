import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const ResourceCardSkeleton = () => (
  <div className="bg-card border rounded-xl p-6">
    <div className="flex items-start justify-between mb-3">
      <Skeleton className="h-6 w-20" />
    </div>
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-full mb-1" />
    <Skeleton className="h-4 w-2/3 mb-4" />
    <div className="flex items-center justify-between pt-4 border-t">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-20" />
    </div>
  </div>
);

export const ResourceGridSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <ResourceCardSkeleton key={i} />
    ))}
  </div>
);

export const ProfileSkeleton = () => (
  <div className="max-w-2xl mx-auto">
    <div className="bg-card border rounded-xl p-8">
      <div className="flex items-center gap-6 mb-6">
        <Skeleton className="w-24 h-24 rounded-xl" />
        <div className="flex-1">
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  </div>
);
