export default function TeacherDashboardPage() {
  return (
    <div className="space-y-6">
      <section className="page-card space-y-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          教員ダッシュボード
        </h1>
        <p className="text-sm text-slate-600">
          担当クラスや生徒の状況を俯瞰するためのトップページです。まずは 1on1 と
          PBL の進捗が一目で分かるポータルを目指します。
        </p>
      </section>
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="page-card space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            近日の 1on1 予定
          </h2>
          <p className="text-xs text-slate-600">
            直近 1 週間の 1on1 面談スケジュールを表示予定です。
          </p>
        </div>
        <div className="page-card space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            PBL プロジェクト
          </h2>
          <p className="text-xs text-slate-600">
            担当プロジェクトの進捗や提出状況を一覧で確認できるようにします。
          </p>
        </div>
        <div className="page-card space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            お知らせ・連絡事項
          </h2>
          <p className="text-xs text-slate-600">
            校内連絡やシステムからの通知を集約して表示する領域です。
          </p>
        </div>
      </section>
      <section className="page-card space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">MVP ロードマップ</h2>
        <p className="text-xs text-slate-600">
          初期リリースでは、教員が日常的に使う機能から順に実装していきます。
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-slate-600">
          <li>1on1: 開発中（面談一覧・メモ機能を優先）</li>
          <li>PBL: Coming Soon（画面のみ先行公開）</li>
          <li>Settings: Coming Soon（運用ルール確定後に着手）</li>
        </ul>
      </section>
    </div>
  );
}

