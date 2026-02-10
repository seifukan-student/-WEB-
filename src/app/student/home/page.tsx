export default function StudentHomePage() {
  return (
    <div className="space-y-6">
      <section className="page-card space-y-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          ホーム（生徒）
        </h1>
        <p className="text-sm text-slate-600">
          今日やるべきこと・今週の予定をまとめて確認できる、生徒向けのホーム画面です。まずは 1on1
          の予定を見逃さないことにフォーカスし、PBL や設定は次フェーズで追加していきます。
        </p>
      </section>
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="page-card space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">次の 1on1</h2>
          <p className="text-xs text-slate-600">
            直近の 1on1 日程と、事前に考えておくと良いテーマを表示する想定です。
          </p>
        </div>
        <div className="page-card space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            進行中の PBL
          </h2>
          <p className="text-xs text-slate-600">
            将来的に、担当しているプロジェクトのステータスや次の締切を一覧で表示する予定です（現時点では Coming Soon）。
          </p>
        </div>
      </section>
      <section className="page-card space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">MVP ロードマップ</h2>
        <p className="text-xs text-slate-600">
          生徒向けには、日々の学習と 1on1 を支える機能から順に提供していきます。
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-slate-600">
          <li>1on1: 開発中（面談ノート機能を優先）</li>
          <li>PBL: Coming Soon（プロジェクト一覧画面から着手）</li>
          <li>Settings: Coming Soon（通知・プロフィール編集を予定）</li>
        </ul>
      </section>
    </div>
  );
}

