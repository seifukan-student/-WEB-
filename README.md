## 青楓館ポータル WEB（プロトタイプ）

Next.js（App Router）+ TypeScript + Tailwind CSS で構成した、教員・生徒向けポータルサイトのモジュール骨組みです。ログインは未実装で、URL により `/teacher` / `/student` を切り替える構成になっています。

---

### 使用技術

- **フレームワーク**: Next.js 14（App Router / `src/app`）
- **言語**: TypeScript
- **スタイル**: Tailwind CSS

---

### ルーティング構成

- `/teacher/dashboard`
- `/teacher/1on1`
- `/teacher/pbl` (Coming Soon)
- `/teacher/settings` (Coming Soon)
- `/student/home`
- `/student/1on1`
- `/student/pbl` (Coming Soon)
- `/student/settings` (Coming Soon)

共通コンポーネントは `src/components` 配下に配置しています。

---

### 現状の前提

- **認証なし**: 現時点ではログイン機能は未実装で、URL ベースで `/teacher` / `/student` を切り替えています。
- **DB 未接続**: データベース連携はまだ行っておらず、次のステップとして Supabase 連携を想定しています。

---

### ローカル開発

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスしてください。

主な確認用 URL:

- 教員ダッシュボード: `http://localhost:3000/teacher/dashboard`
- 生徒ホーム: `http://localhost:3000/student/home`

---

### Vercel へのデプロイ

1. **Git リポジトリを作成**（未作成の場合）

   ```bash
   git init
   git add .
   git commit -m "chore: initial portal scaffold"
   ```

2. **GitHub / GitLab などにプッシュ**

3. **Vercel で New Project を作成**

   - 対象リポジトリを選択
   - `Framework Preset` は **Next.js**
   - `Root Directory` はリポジトリルート
   - その他の設定はデフォルトで問題ありません

4. **環境表示 (ENV バッジ) について**

   - Vercel 側で自動的に `VERCEL_ENV` が設定されます
   - `production` / `preview` / （それ以外は `local`）としてヘッダー右上に表示されます

---

### 今後の実装予定（例）

- **認証まわり**
  - セッション管理 / ロール（教員 / 生徒）の正式な切り替え
  - 学校アカウントとの連携（SSO など検討）

- **1on1 機能**
  - 面談スケジュール登録・一覧
  - 面談メモ / 宿題 / 次回アクションの記録
  - 教員・生徒双方からの参照 UI

- **PBL 管理**
  - プロジェクト・タスクボード
  - 提出物・フィードバック管理

- **設定画面**
  - 通知設定（メール / LINE 等の検討）
  - プロフィール編集

---

### メモ

- UI はあくまで **プロトタイプ** であり、レイアウト・ルーティング・共通コンポーネントの確認が主目的です。
- 実装時は、`ComingSoon` コンポーネントを差し替える形で各機能を拡張していく想定です。

