# ポートフォリオサイト

ビルドツール・外部依存ゼロの静的ポートフォリオサイトです。`index.html` / `style.css` / `script.js` の 3 ファイルで完結しており、GitHub Pages にそのまま公開できます。

---

## GitHub Pages へのデプロイ手順

### 1. リポジトリを作成する

GitHub で新しいリポジトリを作成します。  
GitHub Pages でルート URL（`https://<ユーザー名>.github.io/`）として公開したい場合は、リポジトリ名を **`<ユーザー名>.github.io`** にしてください。

```
例: katzkawai.github.io
```

サブパス（`https://<ユーザー名>.github.io/<リポジトリ名>/`）でよい場合は任意の名前で構いません。

### 2. ファイルをプッシュする

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
git push -u origin main
```

### 3. GitHub Pages を有効にする

1. リポジトリページの **Settings** タブを開く
2. 左サイドバーの **Pages** をクリック
3. **Source** を `Deploy from a branch` に設定
4. **Branch** を `main` / `(root)` に設定して **Save**

数分後、`https://<ユーザー名>.github.io/` または `https://<ユーザー名>.github.io/<リポジトリ名>/` でサイトが公開されます。

---

## プロフィールの編集方法

`index.html` 内の `{{...}}` プレースホルダを自分の情報に書き換えてください。

| プレースホルダ | 内容 |
|---|---|
| `{{NAME_JP}}` | 氏名（日本語） |
| `{{NAME_EN}}` | 氏名（英語） |
| `{{INITIALS}}` | イニシャル（例: `KK`）|
| `{{HEADLINE_JP}}` | キャッチコピー（日本語） |
| `{{HEADLINE_EN}}` | キャッチコピー（英語） |
| `{{BIO_JP}}` | 自己紹介（日本語） |
| `{{BIO_EN}}` | 自己紹介（英語） |
| `{{PHOTO_URL}}` | プロフィール写真の URL |
| `{{GITHUB_USERNAME}}` | GitHub ユーザー名 |
| `{{EMAIL}}` | メールアドレス |
| `{{X_HANDLE}}` | X (Twitter) ハンドル（`@` なし） |

### スキルの追加

`#skills` セクション内の `<li class="badge ...">` を複製して追加します。  
カテゴリに応じてクラスを使い分けてください。

- 言語系 → `badge-accent`
- ツール・フレームワーク系 → `badge-accent2`
- その他 → `badge-accent3`

### プロジェクトの追加

`#projects` セクション内の `<article class="project-card ...">` を複製して追加します。  
`{{REPO_URL}}` と `{{LIVE_URL}}` を実際の URL に書き換えてください。Live URL がない場合は該当の `<a>` タグを削除してください。

### 経歴の追加

`#experience` セクション内の `<li class="timeline-item ...">` を複製して追加します。  
古い順（上が古い）または新しい順（上が新しい）どちらでも構いません。

### アクセントカラーの変更

`style.css` の `:root` と `[data-theme="light"]` 内の `--accent` / `--accent-2` / `--accent-3` を変更してください。

```css
:root {
  --accent:   #6366f1; /* プライマリカラー */
  --accent-2: #ec4899; /* セカンダリカラー（+60° 補色） */
  --accent-3: #06b6d4; /* ターシャリカラー（-60° 補色） */
}
```

---

## ファイル構成

```
.
├── index.html   # マークアップ・コンテンツ
├── style.css    # スタイル・テーマ・アニメーション
├── script.js    # テーマ切替・言語切替・スクロールアニメーション
└── README.md    # このファイル
```

## 動作確認

ローカルで確認する場合は、ファイルをそのままブラウザで開くか、簡易サーバーを使ってください。

```bash
# Python 3
python3 -m http.server 8080
# → http://localhost:8080 で確認
```
