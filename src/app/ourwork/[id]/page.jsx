import { Suspense } from "react";
import OurWorkShowcase from "@/components/ourworkshowcase";

export default function WorkDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OurWorkShowcase />
    </Suspense>
  );
}
