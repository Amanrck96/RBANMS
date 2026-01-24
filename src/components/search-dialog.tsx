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
            { title: "Bachelor of Computer Applications (BCA)", href: "/departments/computer-applications" },
            { title: "Bachelor of Commerce (B.Com)", href: "/departments/commerce" },
            { title: "Bachelor of Business Administration (BBA)", href: "/departments/management" },
            { title: "Bachelor of Arts (BA)", href: "/departments/arts" },
            { title: "Bachelor of Arts (Physical Education)", href: "/departments/physical-education" },
            { title: "Bachelor of Arts (Journalism)", href: "/departments/arts" },
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
            { title: "Computer Applications Department (BCA)", href: "/departments/computer-applications" },
            { title: "Commerce Department (B.Com)", href: "/departments/commerce" },
            { title: "Management Department (BBA)", href: "/departments/management" },
            { title: "Arts Department (BA)", href: "/departments/arts" },
            { title: "Physical Education Department", href: "/departments/physical-education" },
            { title: "English Department", href: "/departments/english" },
        ];

        departments.forEach((dept) => {
            items.push({
                title: dept.title,
                href: dept.href,
                category: "Departments",
            });
        });

        // Add all contact information
        const contacts = [
            { title: "Phone: 080-48533572", href: "/contact" },
            { title: "Email: principal_rbanms@gmail.com", href: "/contact" },
            { title: "Email: priyamahesh09@gmail.com (Placement)", href: "/contact" },
            { title: "BCA Department Email: rbanmsfgc.bca@gmail.com", href: "/departments/computer-applications" },
            { title: "English Department Email: departmentofenglishrbanms@gmail.com", href: "/departments/english" },
            { title: "Address: #12, Annaswamy Mudaliar Road, Bangalore 560042", href: "/contact" },
        ];

        contacts.forEach((contact) => {
            items.push({
                title: contact.title,
                href: contact.href,
                category: "Contact Information",
            });
        });

        // Add BCA Faculty members
        const bcaFaculty = [
            { name: "Moka Nanditha Varma (HOD, BCA)", email: "nanditha.moka@gmail.com" },
            { name: "Vijaya Lakshmi (BCA Faculty)", email: "vijayalakshmi.rbanmsfgc@gmail.com" },
            { name: "S Divya (BCA Faculty)", email: "dhivya.valli@gmail.com" },
            { name: "Shirley Nesamani (BCA Faculty)", email: "rbanmsfgc.shirley@gmail.com" },
            { name: "Md Ziya Hakim (BCA Faculty)", email: "ziyahakim89@gmail.com" },
        ];

        bcaFaculty.forEach((faculty) => {
            items.push({
                title: `${faculty.name} - ${faculty.email}`,
                href: "/departments/computer-applications",
                category: "Faculty - Computer Applications",
            });
        });

        // Add English Faculty members
        const englishFaculty = [
            { name: "Simran (English Faculty)", email: "s.simranwrites@gmail.com" },
            { name: "Rashi Tibrewal (English Faculty)", email: "rashi30tibrewal@gmail.com" },
            { name: "Tony Chembakassery Paul (English Faculty)", email: "tony17paul@gmail.com" },
        ];

        englishFaculty.forEach((faculty) => {
            items.push({
                title: `${faculty.name} - ${faculty.email}`,
                href: "/departments/english",
                category: "Faculty - English",
            });
        });

        // Add important academic pages
        const academicPages = [
            { title: "Courses Offered", href: "/academics/courses-offered" },
            { title: "Principal's Message", href: "/about/principal-message" },
            { title: "Director's Message", href: "/" },
            { title: "Research Centre - Arcot Narrainswamy", href: "/research" },
            { title: "Facilities", href: "/facilities" },
            { title: "Placement", href: "/placement" },
            { title: "Scholarship", href: "/scholarship" },
            { title: "Alumni Activities", href: "/alumni/activity" },
            { title: "RTI - Right to Information", href: "/rti" },
            { title: "Governance", href: "/governance" },
            { title: "Code of Conduct", href: "/code-of-conduct" },
            { title: "Industry Connect - Internships", href: "/industry-connect/internship" },
            { title: "Industry Connect - Industry Visits", href: "/industry-connect/industry-visits" },
            { title: "Events Calendar", href: "/events" },
            { title: "Contact Us", href: "/contact" },
        ];

        academicPages.forEach((page) => {
            items.push({
                title: page.title,
                href: page.href,
                category: "Pages",
            });
        });

        // Add certificate courses and programs
        const programs = [
            { title: "Web Development & Cloud DevOps (BCA Certification)", href: "/departments/computer-applications" },
            { title: "Campus to Corporate (English Certificate)", href: "/departments/english" },
            { title: "Theatre Arts Certificate Course", href: "/departments/english" },
            { title: "Communication & Soft Skills (Certificate)", href: "/departments/english" },
        ];

        programs.forEach((program) => {
            items.push({
                title: program.title,
                href: program.href,
                category: "Certificate Courses",
            });
        });

        // Add student clubs and activities
        const clubs = [
            { title: "NATYA - Drama Club", href: "/departments/english" },
            { title: "Fourth Wall Theatre Club", href: "/departments/english" },
            { title: "Phoenix Club - Editorial Committee", href: "/departments/english" },
            { title: "Techtantra - BCA Forum", href: "/departments/computer-applications" },
        ];

        clubs.forEach((club) => {
            items.push({
                title: club.title,
                href: club.href,
                category: "Student Clubs",
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
                    <Search className="h-5 w-5 !text-white" />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] p-0 gap-0">
                <DialogHeader className="px-4 py-4 border-b">
                    <DialogTitle className="sr-only">Search Website</DialogTitle>
                    <div className="flex items-center gap-2">
                        <Search className="h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search for courses, faculty, contact info, activities..."
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
