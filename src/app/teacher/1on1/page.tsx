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
        <h2 className="text-sm font-semibold text-slate-900">今後の機能イメージ</h2>
        <p className="text-xs text-slate-600">
          ポータル全体の中心機能として、教員の 1on1 インビ・割当フローを段階的に拡張していく想定です。
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-slate-600">
          <li>翌週分の 1on1 枠を自動生成し、担当クラスの生徒を自動割当する。</li>
          <li>未割当や抜け漏れが一目で分かるリストを表示し、その理由も確認できる。</li>
          <li>特定の生徒だけ時間変更・他教員への振替といった例外修正を、画面上から手動で行える。</li>
          <li>将来的には Google カレンダー連携で、教員の対応不可時間を自動ブロックする。</li>
        </ul>
      </section>
    </div>
  );
}

