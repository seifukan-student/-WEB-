export default function StudentOneOnOnePage() {
  return (
    <div className="space-y-6">
      <section className="page-card space-y-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          1on1 ノート（生徒）
        </h1>
        <p className="text-sm text-slate-600">
          教員との 1on1 面談で話した内容や次回までのアクションを整理するための画面です。自分の 1on1
          予定を見て、当日何を話すかを準備できる状態を目指します。
        </p>
      </section>
      <section className="page-card space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">今後の機能イメージ</h2>
        <p className="text-xs text-slate-600">
          生徒側では、自分の 1on1 予定を見逃さず、面談前後の振り返りがしやすい状態を目指して機能を拡張していきます。
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-slate-600">
          <li>教員が割り当てた 1on1 の日時と担当教員を一覧で確認できる。</li>
          <li>面談前に話したいことをメモしておき、当日の振り返りも同じ画面に残せる。</li>
          <li>次回までにやることを簡単に登録し、ホーム画面からも確認できる。</li>
        </ul>
      </section>
    </div>
  );
}

