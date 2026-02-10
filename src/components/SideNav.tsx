 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

type SideNavProps = {
  items: NavItem[];
};

export const SideNav = ({ items }: SideNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname?.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
              isActive
                ? "bg-brand-50 text-brand-700 font-semibold border border-brand-100 shadow-sm"
                : "text-slate-600 border border-transparent hover:bg-slate-50 hover:border-brand-200"
            }`}
          >
            <span>{item.label}</span>
            {isActive && (
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

