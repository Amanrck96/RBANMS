import { DynamicSection } from "@/components/dynamic-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career Opportunities | RBANM's First Grade College",
    description: "Join RBANM's First Grade College and be part of our mission to transform lives through education.",
};

export default function CareerPage() {
    return (
        <div className="min-h-screen bg-background">
            <DynamicSection
                pageId="career"
                defaultTitle="Career Opportunities"
                defaultContent="Be part of a legacy that values compassion, idealism, and the transformative power of education."
            />
        </div>
    );
}
