import { Skeleton } from "@/components/ui/skeleton";

interface SidebarSkeletonProps {
  isCollapsed?: boolean;
}

export function SidebarSkeleton({ isCollapsed = false }: SidebarSkeletonProps) {
  return (
    <div
      className={`bg-background shadow-lg border-r border-gray-200/30 dark:border-gray-700/30 transition-all duration-300 flex flex-col h-screen ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header Skeleton */}
      <div className="flex items-center justify-between p-4 mb-2">
        {isCollapsed ? (
          <div className="flex items-center justify-center w-full">
            <Skeleton className="w-8 h-8 rounded-lg" />
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-3">
              <Skeleton className="w-8 h-8 rounded-lg" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="w-8 h-8 rounded-lg" />
          </>
        )}
      </div>

      {/* Navigation Skeleton */}
      <nav className="flex-1 px-4 py-2 space-y-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "space-x-3"
            } px-3 py-3 rounded-xl`}
          >
            <Skeleton className="w-5 h-5 rounded" />
            {!isCollapsed && <Skeleton className="h-4 w-20" />}
          </div>
        ))}
      </nav>

      {/* User Section Skeleton */}
      <div className="p-4 mt-4">
        {/* Theme Toggle Skeleton */}
        <div className="flex items-center justify-center mb-4">
          {isCollapsed ? (
            <Skeleton className="w-8 h-8 rounded-lg" />
          ) : (
            <div className="flex items-center space-x-3 w-full">
              <Skeleton className="w-8 h-8 rounded-lg" />
              <Skeleton className="h-4 w-12" />
            </div>
          )}
        </div>

        {/* User Info Skeleton */}
        <div className="space-y-3">
          {/* User Profile Skeleton */}
          <div className="flex items-center space-x-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            {!isCollapsed && (
              <div className="flex-1 space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            )}
          </div>

          {/* Sign Out Button Skeleton */}
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "space-x-3"
            } px-3 py-2`}
          >
            <Skeleton className="w-5 h-5 rounded" />
            {!isCollapsed && <Skeleton className="h-4 w-16" />}
          </div>
        </div>
      </div>
    </div>
  );
}
