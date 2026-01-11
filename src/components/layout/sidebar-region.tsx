'use client';

interface SidebarRegionProps {
    children: React.ReactNode;
}

export function SidebarRegion({ children }: SidebarRegionProps) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}
