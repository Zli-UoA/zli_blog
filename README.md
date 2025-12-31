# Zli Official Blog

会津大学の総合技術系サークル [Zli](https://zli.jp/) の公式ブログです。技術情報やイベントレポートなどを発信しています。

## 目次

- [技術スタック](#技術スタック)
- [プロジェクト構造](#プロジェクト構造)
- [セットアップ](#セットアップ)
- [記事の投稿方法](#記事の投稿方法)
- [著者の追加方法](#著者の追加方法)
- [タグの追加方法](#タグの追加方法)
- [コマンド一覧](#コマンド一覧)

## 技術スタック

- **フレームワーク**: [Astro](https://astro.build/) v5
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/) v4
- **コンテンツ**: Markdown / MDX

## プロジェクト構造

```text
├── public/              # 静的ファイル（フォント等）
├── src/
│   ├── components/      # Astroコンポーネント
│   ├── content/
│   │   ├── authors/     # 著者情報
│   │   ├── posts/       # ブログ記事
│   │   └── tags.json    # タグ情報
│   ├── layouts/         # ページレイアウト
│   ├── pages/           # ルーティング
│   └── styles/          # グローバルスタイル
├── astro.config.ts      # Astro設定
├── package.json
└── tsconfig.json
```

## セットアップ

### 必要な環境

- Node.js 18以上
- npm

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/Zli-UoA/zli_blog.git
cd zli_blog

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーは `http://localhost:4321` で起動します。

## 記事の投稿方法

### 1. 記事用ディレクトリを作成

`src/content/posts/` 配下に記事用のディレクトリを作成します。

```bash
mkdir src/content/posts/your-article-slug
```

### 2. 記事ファイルを作成

ディレクトリ内に `index.md`（または `index.mdx`）を作成し、以下のフロントマターを記述します。

```yaml
title: 記事のタイトル
description: 記事の説明文
authors:
  - your-author-id # 著者のID（複数指定可能）
pubDate: 2025-01-01 # 公開日
updatedDate: 2025-01-02 # 更新日（任意）
heroImage: ./eyeCatch.png # アイキャッチ画像（任意）
tags: # タグ（任意、複数指定可能）
  - event
  - hackathon
```

> **Note**: タグIDは `src/content/tags.json` に存在するものを指定してください。存在しないタグを指定するとビルドエラーになります。新しいタグが必要な場合は、先に[タグを追加](#タグの追加方法)してください。

### 3. 画像を追加（任意）

アイキャッチ画像や記事内で使用する画像は、記事と同じディレクトリに配置します。

```text
src/content/posts/your-article-slug/
├── index.md
├── eyeCatch.png
└── screenshot.png
```

記事内で画像を使用する場合：

```markdown
![画像の説明](./screenshot.png)
```

### 4. プレビューで確認

```bash
npm run dev
```

`http://localhost:4321/posts/your-article-slug` で記事を確認できます。

## 著者の追加方法

### 1. 著者用ディレクトリを作成

`src/content/authors/` 配下に著者IDのディレクトリを作成します。

```bash
mkdir src/content/authors/your-id
```

### 2. 著者情報ファイルを作成

ディレクトリ内に `index.json` を作成します。

```json
{
  "$schema": "../../../../.astro/collections/authors.schema.json",
  "id": "your-id",
  "displayName": "表示名",
  "bio": "自己紹介文。\n改行も使用可能です。",
  "icon": "./icon.png"
}
```

### 3. アイコン画像を追加

同じディレクトリにアイコン画像（`icon.png`など）を配置します。

```text
src/content/authors/your-id/
├── index.json
└── icon.png
```

## タグの追加方法

`src/content/tags.json` にタグを追加します。キーがタグIDになります。

```json
{
  "event": {
    "displayName": "イベント",
    "description": "Zliが開催・参加したイベントの記事",
    "color": "#3b82f6"
  },
  "your-new-tag": {
    "displayName": "新しいタグ",
    "description": "タグの説明（任意）",
    "color": "#3b82f6"
  }
}
```

### フィールド説明

| フィールド    | 必須 | 説明                                        |
| :------------ | :--: | :------------------------------------------ |
| キー          |  ✓   | タグのID（URLに使用、英数字とハイフン推奨） |
| `displayName` |  ✓   | タグの表示名                                |
| `description` |      | タグの説明文（タグページに表示）            |
| `color`       |      | タグの色（HEXカラーコード、例: `#3b82f6`）  |

### 既存のタグ一覧

| ID            | 表示名         | 色      |
| :------------ | :------------- | :------ |
| `event`       | イベント       | #3b82f6 |
| `hackathon`   | ハッカソン     | #ef4444 |
| `aizuhack`    | AizuHack       | #f97316 |
| `workshop`    | 勉強会         | #06b6d4 |
| `conference`  | カンファレンス | #ec4899 |
| `tutorial`    | チュートリアル | #14b8a6 |
| `development` | 開発           | #22c55e |
| `zli`         | Zli            | #8b5cf6 |
| `git`         | Git            | #f05032 |
| `github`      | GitHub         | #181717 |
| `elm`         | Elm            | #1293d8 |
| `stores`      | STORES         | #000000 |

## コマンド一覧

| コマンド          | 説明                                  |
| :---------------- | :------------------------------------ |
| `npm install`     | 依存関係のインストール                |
| `npm run dev`     | 開発サーバーを起動 (`localhost:4321`) |
| `npm run build`   | 本番用ビルドを `./dist/` に出力       |
| `npm run preview` | ビルド結果をローカルでプレビュー      |
| `npm run fmt`     | Prettierでコードをフォーマット        |
| `npm run astro`   | Astro CLIコマンドを実行               |
