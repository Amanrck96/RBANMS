import { DynamicSection } from "@/components/dynamic-section";

export default function AlumniActivityPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="alumni-activity"
        defaultTitle="Alumni Activity"
        defaultContent="Digital India support campaign and other community initiatives."
      />
    </div>
  );
}
