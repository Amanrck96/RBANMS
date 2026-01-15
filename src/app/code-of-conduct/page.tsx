import { DynamicSection } from "@/components/dynamic-section";

export default function CodeOfConductPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="code-of-conduct"
        defaultTitle="Code of Conduct"
        defaultContent="Professional and ethical standards for students and staff."
      />
    </div>
  );
}
