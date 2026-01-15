
import { DynamicSection } from "@/components/dynamic-section";

export default function InternshipPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="industry-internship"
        defaultTitle="Internships"
        defaultContent="Information about student internships coming soon."
      />
    </div>
  );
}
