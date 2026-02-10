type ComingSoonProps = {
  title: string;
  description?: string;
};

export const ComingSoon = ({ title, description }: ComingSoonProps) => {
  return (
    <section className="page-card space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          {description ??
            "本機能は現在企画・設計中です。要件定義・UI設計完了後に実装予定です。"}
        </p>
      </div>
      <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
        機能イメージのみを先にポータルへ公開し、関係者とすり合わせるためのプレースホルダー画面です。
      </div>
    </section>
  );
};

