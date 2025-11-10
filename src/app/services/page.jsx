'use client';

import { useServiceStore } from "@/store/useServiceStore";
import Header from "@/components/Header";
import ServicesBetter from "@/components/servicesbetter";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import ServiceFilterSection from "@/components/ServiceFilterSection"

export default function ServicesPage() {
    const router = useRouter();
    const { setSelectedService } = useServiceStore();

    const filters = [
        { value: "all", label: "ALL SERVICES" },
        { value: "website", label: "WEBSITE DEVELOPMENT" },
        { value: "mobile", label: "MOBILE APPLICATIONS" },
        { value: "uiux", label: "UI / UX DESIGN" },
        { value: "maintenance", label: "MAINTENANCE & SUPPORT" },
    ];

    const items = [
        { id: 1, category: "mobile", title: "MOBILE APP DESIGN", description: "Modern and intuitive app interfaces.", image: "/service_imgs/s1.jpg" },
        { id: 2, category: "website", title: "BUSINESS WEBSITES", description: "Professional corporate sites for companies.", image: "/service_imgs/s2.jpg" },
        { id: 3, category: "mobile", title: "CROSS-PLATFORM APPS", description: "Flutter or React Native apps for iOS & Android.", image: "/service_imgs/s3.jpg" },
        { id: 4, category: "uiux", title: "DASHBOARD & SYSTEM DESIGN", description: "Interfaces for management systems and admins.", image: "/service4.png" },
        { id: 5, category: "uiux", title: "APP PROTOTYPING", description: "UI/UX prototypes before development.", image: "/service1.png" },
        { id: 6, category: "website", title: "WEBSITE REDESIGN", description: "Revamping old sites with modern UI.", image: "/service6.png" },
        { id: 7, category: "maintenance", title: "BUG FIXING & UPDATES", description: "Regular updates and performance improvements.", image: "/service7.png" },
        { id: 8, category: "mobile", title: "E-COMMERCE APPS", description: "Build mobile shops with payment and delivery integrations.", image: "/service8.png" },
        { id: 9, category: "website", title: "LANDING PAGES", description: "High-conversion landing pages for marketing campaigns.", image: "/service9.png" },
        { id: 10, category: "uiux", title: "PORTFOLIO DESIGN", description: "Elegant and clean portfolios for professionals.", image: "/service10.png" },
        { id: 11, category: "maintenance", title: "SECURITY MONITORING", description: "Keep your app safe with constant protection and checks.", image: "/service11.png" },
        { id: 12, category: "website", title: "BLOG SYSTEM", description: "Create and manage blog content easily.", image: "/service2.png" },
        { id: 13, category: "mobile", title: "SOCIAL MEDIA APP", description: "Custom platforms for community and content sharing.", image: "/service13.png" },
        { id: 14, category: "uiux", title: "BRANDING & STYLE GUIDE", description: "Consistent visual identity across your products.", image: "/service14.png" },
        { id: 15, category: "maintenance", title: "PERFORMANCE OPTIMIZATION", description: "Make your website and app run faster and smoother.", image: "/service15.png" },
        { id: 16, category: "website", title: "BOOKING SYSTEMS", description: "Online booking for hotels, restaurants, or services.", image: "/service16.png" },
        { id: 17, category: "mobile", title: "HEALTHCARE APPS", description: "Modern apps for clinics and medical management.", image: "/service17.png" },
        { id: 18, category: "uiux", title: "USER RESEARCH", description: "Understand your audience for better design decisions.", image: "/service18.png" },
        { id: 19, category: "maintenance", title: "DATA BACKUP", description: "Automatic secure data backups for your systems.", image: "/service4.png" },
        { id: 20, category: "website", title: "MULTI-LANGUAGE WEBSITES", description: "Reach global audiences with multilingual support.", image: "/service7.png" },
    ];

    const handleCardClick = (item) => {
        setSelectedService(item);
        router.push("/servicesdetailes");
    };

    return (
        <main className="mt-10">
            <Header
                title={"our services build your project from idea to launch"}
                description={
                    "from ui/ux to web and mobile development we provide you with comprehensive solutions that ensure a destenctive user experience and strong code to help your project grow steadily."
                }
            />
            <Suspense fallback={<div>Loading...</div>}>

                <ServiceFilterSection filters={filters} items={items}
                    onCardClick={handleCardClick}
                />

            </Suspense>

            <ServicesBetter />

            <div className="mb-12 ml-0 flex mt-[-80px] flex-col items-center gap-4 md:flex-row md:justify-start md:items-center md:ml-10">
                <PrimaryButton href={"/contact"} text="START YOUR PROJECT NOW" />
                <SecondaryButton href={"/ourwork"} text="CONTUCT US" />
            </div>

        </main>
    );
}
