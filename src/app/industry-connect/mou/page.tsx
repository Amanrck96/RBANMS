import { DynamicSection } from "@/components/dynamic-section";

export default function MoUPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="industry-mou"
        defaultTitle="Memorandum of Understanding (MoU)"
        defaultContent="Information about our institutional MoUs coming soon."
      />
    </div>
  );
}
