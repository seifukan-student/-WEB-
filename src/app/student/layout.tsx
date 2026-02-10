import type { ReactNode } from "react";
import { TopBar } from "@/components/TopBar";
import { SideNav } from "@/components/SideNav";

export default function StudentLayout({ children }: { children: ReactNode }) {
  const items = [
    { label: "Home", href: "/student/home" },
    { label: "1on1", href: "/student/1on1" },
    { label: "PBL", href: "/student/pbl" },
    { label: "Settings", href: "/student/settings" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <TopBar role="student" />
      <div className="flex-1 flex">
        <aside className="hidden sm:block w-56 border-r border-slate-200 bg-white px-4 py-6">
          <SideNav items={items} />
        </aside>
        <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}

