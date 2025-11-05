"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FilterSection from "./filtersection";

export default function ServiceFilterSection({ filters, items, onCardClick }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter") || "all";

  return (
    <FilterSection
      filters={filters}
      items={items}
      initialFilter={filterParam}
      onCardClick={onCardClick}
    />
  );
}