
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DynamicSection } from "@/components/dynamic-section";

export default function RTIPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="rti"
        defaultTitle="RTI"
        defaultContent="Right to Information details coming soon."
      />
    </div>
  );
}
