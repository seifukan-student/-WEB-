export default function StudentOneOnOnePage() {
  return (
    <div className="space-y-6">
      <section className="page-card space-y-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          1on1 ノート（生徒）
        </h1>
        <p className="text-sm text-slate-600">
          教員との 1on1 面談で話した内容や次回までのアクションを整理するための画面です。
        </p>
      </section>
      <section className="page-card space-y-2">
        <h2 className="text-sm font-semibold text-slate-900">
          面談ごとの振り返り
        </h2>
        <p className="text-xs text-slate-600">
          MVP では「面談メモ」「気づき」「次回までにやること」を簡単に残せるフォームから実装していく予定です。
        </p>
      </section>
    </div>
  );
}

