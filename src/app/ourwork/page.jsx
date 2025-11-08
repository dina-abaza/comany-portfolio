"use client"

import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import FilterSection from "@/components/filtersection";
import Header from "@/components/Header";
import { useState } from "react";

export default function ProjectsPage() {
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState("all");
  const filters = [
    { value: "all", label: "all projects" },
    { value: "application", label: "mobile applications" },
    { value: "website", label: "website development" },
    { value: "design", label: "ui/ux design" },
  ];

  const items = [
    { id: 1, category: "application", title: "BOOKING APP", description: "Reservation app UI and flow.", image: "/service5.png" },
    { id: 2, category: "website", title: "FURNITURE STORE", description: "E-commerce website for furniture.", image: "/service2.png" },
    { id: 3, category: "design", title: "ADMIN DASHBOARD", description: "Management dashboard UI.", image: "/service14.png" },
    { id: 4, category: "website", title: "EDUCATION PLATFORM", description: "Interactive learning website.", image: "/service4.png" },
    { id: 5, category: "application", title: "FLIGHT BOOKING APP", description: "Flight search and reservation app.", image: "/service1.png" },
    { id: 6, category: "design", title: "BRAND IDENTITY", description: "Logo and visual system design.", image: "/service7.png" },
    { id: 7, category: "application", title: "RESTAURANT ORDER APP", description: "Mobile ordering and delivery tracking.", image: "/service6.png" },
    { id: 8, category: "website", title: "HOTEL BOOKING SITE", description: "Booking and room management system.", image: "/service8.png" },
    { id: 9, category: "design", title: "PORTFOLIO UI", description: "Clean personal portfolio interface.", image: "/service9.png" },
    { id: 10, category: "application", title: "E-COMMERCE APP", description: "Online shopping app for mobile.", image: "/service10.png" },
    { id: 11, category: "website", title: "CORPORATE WEBSITE", description: "Professional business site.", image: "/service11.png" },
    { id: 12, category: "design", title: "MARKETING LANDING PAGE", description: "Conversion-optimized landing design.", image: "/service2.png" },
    { id: 13, category: "application", title: "HEALTHCARE APP", description: "Modern UI for clinics and health services.", image: "/service13.png" },
    { id: 14, category: "website", title: "BLOG PLATFORM", description: "CMS blog system for creators.", image: "/service14.png" },
    { id: 15, category: "design", title: "DASHBOARD ANALYTICS", description: "UI for data visualization and KPIs.", image: "/service15.png" },
    { id: 16, category: "application", title: "SOCIAL MEDIA APP", description: "Feed, likes, and chat features.", image: "/service16.png" },
    { id: 17, category: "website", title: "TRAVEL AGENCY SITE", description: "Tours, packages, and bookings.", image: "/service17.png" },
    { id: 18, category: "design", title: "UI KIT SYSTEM", description: "Reusable UI components for Figma.", image: "/service18.png" },
    { id: 19, category: "application", title: "FITNESS APP", description: "Workout tracking and diet planner.", image: "/service4.png" },
    { id: 20, category: "website", title: "REAL ESTATE PLATFORM", description: "Property listings and agent dashboard.", image: "/service5.png" },
  ];

  return (
    <main>
      <Header
        title={"our work speaks for us"}
        description={
          "from designe to programming integrated digital solutions that made a real difference whit our clients."
        }
      />
      <FilterSection  filters={filters} items={items}
       activeFilter={activeFilter}
       setActiveFilter={setActiveFilter}
       onCardClick={(item) => router.push(`/ourwork/${item.id}`)}
     />

      <div className="flex justify-center items-center mb-12">
     <PrimaryButton href={"/contact"} text= "START YOUR PROJECT NOW" />
     </div>
    </main>
  );
}
