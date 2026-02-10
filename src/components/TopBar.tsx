import Link from "next/link";
import { EnvBadge } from "./EnvBadge";

type TopBarProps = {
  role: "teacher" | "student";
};

export const TopBar = ({ role }: TopBarProps) => {
  const roleLabel = role === "teacher" ? "教員ポータル" : "生徒ポータル";
  const homeHref = role === "teacher" ? "/teacher/dashboard" : "/student/home";

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <Link href={homeHref} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-500 text-white flex items-center justify-center text-sm font-semibold">
            青
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">
              青楓館ポータル
            </span>
            <span className="text-xs text-slate-500">{roleLabel}</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <EnvBadge />
      </div>
    </header>
  );
};

