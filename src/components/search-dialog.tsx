"use client";

import * as React from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { headerLinks, dropdownItems } from "@/lib/navigation";
import { activitiesData } from "@/lib/activities";
import { cellsData } from "@/lib/cells";

type SearchResult = {
    title: string;
    href: string;
    category: string;
};

export function SearchDialog() {
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState("");
    const [results, setResults] = React.useState<SearchResult[]>([]);

    // Flatten all searchable items
    const allItems = React.useMemo(() => {
        const items: SearchResult[] = [];

        // Add header links
        headerLinks.forEach((link) => {
            items.push({
                title: link.label,
                href: link.href,
                category: "Menu",
            });
        });

        // Add dropdown items
        Object.entries(dropdownItems).forEach(([category, navItems]) => {
            navItems.forEach((item) => {
                items.push({
                    title: item.label,
                    href: item.href || "#",
                    category: category,
                });
                if (item.children) {
                    item.children.forEach((child) => {
                        items.push({
                            title: child.label,
                            href: child.href || "#",
                            category: `${category} > ${item.label}`,
                        });
                    });
                }
            });
        });

        // Add activities
        activitiesData.forEach((category) => {
            category.items.forEach((item) => {
                items.push({
                    title: item.title,
                    href: `/activities/${category.id}/${item.slug}`,
                    category: `Activities > ${category.title}`,
                });
            });
        });

        // Add cells & committees
        cellsData.forEach((category) => {
            category.items.forEach((item) => {
                items.push({
                    title: item.title,
                    href: `/cells-committees/${category.id}/${item.slug}`,
                    category: `Cells & Committees > ${category.title}`,
                });
            });
        });

        return items;
    }, []);

    React.useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = allItems.filter((item) =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.category.toLowerCase().includes(lowerQuery)
        );
        setResults(filtered);
    }, [query, allItems]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    className="flex items-center justify-center p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Search website"
                >
                    <Search className="h-5 w-5" />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] p-0 gap-0">
                <DialogHeader className="px-4 py-4 border-b">
                    <DialogTitle className="sr-only">Search Website</DialogTitle>
                    <div className="flex items-center gap-2">
                        <Search className="h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search for pages, activities, committees..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="border-0 focus-visible:ring-0 px-0 text-lg h-auto"
                        />
                    </div>
                </DialogHeader>
                <ScrollArea className="h-[400px] p-4">
                    {results.length > 0 ? (
                        <div className="space-y-4">
                            {results.map((result, index) => (
                                <Link
                                    key={index}
                                    href={result.href}
                                    onClick={() => setOpen(false)}
                                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                                >
                                    <div className="font-medium text-foreground">{result.title}</div>
                                    <div className="text-sm text-muted-foreground">{result.category}</div>
                                </Link>
                            ))}
                        </div>
                    ) : query ? (
                        <div className="text-center text-muted-foreground py-8">
                            No results found for "{query}"
                        </div>
                    ) : (
                        <div className="text-center text-muted-foreground py-8">
                            Type to search...
                        </div>
                    )}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
