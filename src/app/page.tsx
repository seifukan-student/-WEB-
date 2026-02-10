import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="page-card max-w-2xl w-full space-y-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          青楓館高等学院 ポータル（プロトタイプ）
        </h1>
        <p className="text-sm text-slate-600">
          教員・生徒向けポータルサイトの最小構成です。サイドナビ付きレイアウトと主要ページの入口のみを実装しています。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/teacher/dashboard"
            className="group block rounded-xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm hover:border-brand-300 hover:bg-brand-50/60 transition"
          >
            <div className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-2">
              教員向け
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                Teacher
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Teacher Portal
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  授業・1on1・PBL の状況を俯瞰する教員用ビューです。
                </p>
              </div>
              <span className="ml-2 h-8 w-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs shadow-sm group-hover:translate-x-0.5 group-hover:bg-brand-600 transition">
                →
              </span>
            </div>
          </Link>
          <Link
            href="/student/home"
            className="group block rounded-xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm hover:border-brand-300 hover:bg-brand-50/60 transition"
          >
            <div className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-2">
              生徒向け
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                Student
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Student Portal
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  今日やるべきことと 1on1 / PBL を確認する生徒用ビューです。
                </p>
              </div>
              <span className="ml-2 h-8 w-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs shadow-sm group-hover:translate-x-0.5 group-hover:bg-brand-600 transition">
                →
              </span>
            </div>
          </Link>
        </div>
        <p className="text-xs text-slate-500">
          ※ 現時点ではログイン機能は実装しておらず、URL で教員 / 生徒ビューを切り替える構造になっています。
        </p>
      </div>
    </main>
  );
}

