import { DynamicSection } from "@/components/dynamic-section";

export default function FieldTripPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="industry-field-trip"
        defaultTitle="Field Trip"
        defaultContent="<p>Information about educational field trips coming soon.</p>"
      />
    </div>
  );
}
