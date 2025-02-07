import DashboardSkeleton from '@/app/ui/skeletons';

// automatically shows a loading page just by next.js stuff
// when content is reading, page.tsx loads.
export default function Loading() {
    // return <div>Loading...</div>
    // The skeleton shows all the components with a loading background!
    return <DashboardSkeleton />
}