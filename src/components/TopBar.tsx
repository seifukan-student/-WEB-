import Link from "next/link";
import Image from "next/image";
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
        <Link href={homeHref} className="flex items-center gap-3">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-white border border-brand-100 shadow-sm overflow-hidden flex items-center justify-center">
            <Image
              src="/brand/logo.png"
              alt="青楓館高等学院 ロゴ"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold text-slate-900">
              青楓館高等学院 ポータル
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

