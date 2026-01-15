import { DynamicSection } from "@/components/dynamic-section";

export default function GovernancePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="governance"
        defaultTitle="Governance"
        defaultContent="Information about institutional governance coming soon."
      />
    </div>
  );
}
