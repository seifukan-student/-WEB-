export default function TeacherOneOnOnePage() {
  return (
    <div className="space-y-6">
      <section className="page-card space-y-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          1on1 面談管理（教員）
        </h1>
        <p className="text-sm text-slate-600">
          生徒との 1on1 面談予定・記録を管理するための画面です。面談メモ、宿題、次回アクションを一元管理できるようにしていきます。
        </p>
      </section>
      <section className="page-card space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">
          まずは予定一覧から
        </h2>
        <p className="text-xs text-slate-600">
          MVP では「面談一覧」「詳細メモ」「検索・フィルタ」の 3 段階で機能を拡張していく想定です。
        </p>
      </section>
    </div>
  );
}

