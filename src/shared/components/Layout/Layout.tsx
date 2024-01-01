import { ReactNode } from "react";
import Sidebar from "@/shared/components/Layout/Sidebar/Sidebar.tsx";
import Header from "../Header/Header.tsx";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}
