export const headerLinks = [
    { label: "Home", href: "/#rbanms-fgc" },
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Department", href: "/departments" },
    { label: "College Administration", href: "/administration" },
    { label: "Facilities", href: "/facilities" },
    { label: "Activities", href: "/activities" },
    { label: "Cells & Committees", href: "/cells-committees" },
    { label: "Sports", href: "/departments/physical-education" },
    { label: "NCC", href: "/ncc" },
    { label: "Scholarship", href: "/scholarships" },
    { label: "Research", href: "/research" },
    { label: "IQAC", href: "/iqac" },
    { label: "NAAC", href: "/naac" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
];

export type NavItem = { label: string; href?: string; disabled?: boolean; children?: NavItem[] };

export const dropdownItems: Record<string, NavItem[]> = {
    Home: [],
    "About Us": [
        { label: "Our Founder", href: "/about/founder" },
        { label: "History of the College", href: "/about/history" },
        { label: "Vision", href: "/about/vision" },
        { label: "Mission", href: "/about/mission" },
        { label: "Core Values", href: "/about/core-values" },
        { label: "Board Members", href: "/about/board-members", disabled: true },
    ],
    Academics: [
        { label: "Courses Offered", href: "/academics/courses-offered" },
        { label: "Academic Structure", href: "/academics/academic-structure" },
        { label: "Philosophy of Teaching", href: "/academics/philosophy-of-teaching" },
    ],
    Department: [
        { label: "Department of Commerce", href: "/departments/commerce" },
        { label: "Department of Management Studies", href: "/departments/management" },
        { label: "Department of Computer Applications", href: "/departments/computer-applications" },
        { label: "Department of Arts", href: "/departments/arts" },
        { label: "Department of Languages", href: "/departments/languages" },
        { label: "Department of English", href: "/departments/english" },
        { label: "Department of Physical Education", href: "/departments/physical-education" },
    ],
    Activities: [
        { label: "Cultural", href: "/activities/cultural" },
        { label: "Co-Curricular", href: "/activities/co-curricular" },
    ],
    "Cells & Committees": [
        { label: "Statutory", href: "/cells-committees/statutory" },
        { label: "Others", href: "/cells-committees/others" },
    ],
    NCC: [
        { label: "Army", href: "/ncc/army" },
        { label: "Navy", href: "/ncc/navy" },
    ],
};
