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

        // Add courses
        const courses = [
            { title: "Bachelor of Computer Applications (BCA)", href: "/departments/computer-applications", keywords: "BCA computer applications programming software development IT" },
            { title: "Bachelor of Commerce (B.Com)", href: "/departments/commerce", keywords: "BCom B.Com commerce accounting finance taxation business" },
            { title: "Bachelor of Business Administration (BBA)", href: "/departments/management", keywords: "BBA business administration management entrepreneurship marketing HR" },
            { title: "Bachelor of Arts (BA)", href: "/departments/arts", keywords: "BA arts history political science economics humanities" },
            { title: "Bachelor of Arts (Physical Education)", href: "/departments/physical-education", keywords: "BA physical education PE sports fitness coaching" },
            { title: "Bachelor of Arts (Journalism)", href: "/departments/arts", keywords: "BA journalism media news reporting communication" },
        ];

        courses.forEach((course) => {
            items.push({
                title: course.title,
                href: course.href,
                category: "Courses",
            });
        });

        // Add departments
        const departments = [
            { title: "Computer Applications Department", href: "/departments/computer-applications", keywords: "BCA computer IT technology" },
            { title: "Commerce Department", href: "/departments/commerce", keywords: "BCom commerce accounts finance" },
            { title: "Management Department", href: "/departments/management", keywords: "BBA business management" },
            { title: "Arts Department", href: "/departments/arts", keywords: "BA arts humanities" },
            { title: "Physical Education Department", href: "/departments/physical-education", keywords: "PE sports physical education" },
            { title: "English Department", href: "/departments/english", keywords: "english language communication" },
        ];

        departments.forEach((dept) => {
            items.push({
                title: dept.title,
                href: dept.href,
                category: "Departments",
            });
        });

        // Add contact information - searchable by keywords
        items.push({
            title: "Contact Us - Phone: +91-9845132727",
            href: "/contact",
            category: "Contact Information",
        });

        items.push({
            title: "Contact Us - Email: rbanmsfgc@gmail.com",
            href: "/contact",
            category: "Contact Information",
        });

        items.push({
            title: "Principal: +91-9845132727",
            href: "/contact",
            category: "Contact Information",
        });

        items.push({
            title: "Office: +91-9845132727",
            href: "/contact",
            category: "Contact Information",
        });

        // Add other important pages
        items.push({
            title: "Principal's Message",
            href: "/about/principal-message",
            category: "About",
        });

        items.push({
            title: "Director's Message",
            href: "/",
            category: "About",
        });

        items.push({
            title: "Facilities",
            href: "/facilities",
            category: "Campus",
        });

        items.push({
            title: "Placement",
            href: "/placement",
            category: "Campus",
        });

        items.push({
            title: "Scholarship",
            href: "/scholarship",
            category: "Student Services",
        });

        items.push({
            title: "Research Centre",
            href: "/research",
            category: "Academics",
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
                            placeholder="Search for courses, departments, contact info, activities..."
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
