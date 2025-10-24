"use client";

import React from "react";
import DeafaultHeader from "@/components/ui/DeafaultHeader";

export default function GuestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <DeafaultHeader />
            <main className="pt-[80px] min-h-screen">{children}</main>
        </>
    );
}
