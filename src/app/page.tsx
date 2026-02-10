import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="page-card max-w-xl w-full space-y-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          青楓館ポータル（仮）
        </h1>
        <p className="text-sm text-slate-600">
          教員・生徒向けポータルサイトのプロトタイプです。サイドナビ付きレイアウトと主要ページの骨組みのみを実装しています。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/teacher/dashboard"
            className="block rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 hover:border-brand-500 hover:bg-white transition"
          >
            <div className="text-xs font-medium text-slate-500 mb-1">
              教員向け
            </div>
            <div className="text-sm font-semibold text-slate-900">
              Teacher Portal
            </div>
          </Link>
          <Link
            href="/student/home"
            className="block rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 hover:border-brand-500 hover:bg-white transition"
          >
            <div className="text-xs font-medium text-slate-500 mb-1">
              生徒向け
            </div>
            <div className="text-sm font-semibold text-slate-900">
              Student Portal
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

