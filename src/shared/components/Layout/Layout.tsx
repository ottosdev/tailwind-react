import { Outlet } from "react-router-dom";
import Sidebar from "@/shared/components/Layout/Sidebar/Sidebar.tsx";
import Header from "../Header/Header.tsx";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4"><Outlet /></div>
      </div>
    </div>
  )
}
