import { Suspense } from 'react';

export default function TestHistoryLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Suspense>
            <div className="flex flex-col w-full h-full bg-gradient-to-l from-neutral-900 to-zinc-950 scroll-y-auto overflow-x-clip">
                {/* <Navbar /> */}
                <div className="flex-1 w-full h-full">{children}</div>
            </div>
        </Suspense>
    );
}
