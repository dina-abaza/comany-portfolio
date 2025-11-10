"use client";
import { useState , useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FilterSection from "./filtersection";

export default function ServiceFilterSection({ filters, items ,onCardClick }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";

    // أي تغيير في URL يحدّث state الأب
  const [activeFilters, setActiveFilters] = useState(initialFilter);

  useEffect(() => {
    setActiveFilters(initialFilter);
  }, [searchParams]);


  return (
    <FilterSection
      filters={filters}
      items={items}
      activeFilter={activeFilters} 
    //   setActiveFilter={setActiveFilters}
      onCardClick={onCardClick}
    />
  );
}