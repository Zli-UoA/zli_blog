# Zli Blog

## デザイン

[figma](https://www.figma.com/file/BeealdPJxbboY3Uh9k17vg/ZliBlog?node-id=109%3A990&t=cqelnDMyiYIpFclv-1)

## 環境

- [node v17.2.0](https://nodejs.org/ja/)

## 記事の投稿方法

大まかな流れとしては

1. ブランチを切る
2. 自信をメンバーに追加（初回のみ）
3. 記事を追加
4. PR を投げてレビューしてもらう（誰にしてもらうかは決めてない。とりま@shinbunbun に）
5. 問題なけれマージして完了

### 2. 自身をメンバーに追加（初回のみ）

1. `/public/authors/list.json` に自分の id と displayName を追加する。id は a~z, A~Z, 0~9, -, \_のみでお願いします。
2. `/public/authors`内に先ほど list に追加した id のディレクトリを作成する。
3. 作成したディレクトリ内に、表示したいアイコンを`icon.png`で配置。
4. 同ディレクトリ内に、自己紹介を`index.md`で配置

### 3. 記事を追加

1. `/public/articles`内に a~z, A~Z, 0~9, -, \_のみを使った自分で識別できる名前のディレクトリを作成する。（例：zli_no_blog_wo_tukutta_hanashi）。
2. 作成したディレクトリにアイキャッチを`eyeCatch.png`で配置。
3. 同ディレクトリに、記事を`index.md`で配置

記事の最初にはいくつかのメタデータを含めてもらう必要があります。以下のような形でお願いします。

```md
---
authorId: eraser5th
title: ZliのBlogを作った話
tags: React hoge fuga
---

# hogehoge
```

authorId には、メンバー追加の際に決めたものを使ってください。

title にはその記事のタイトルを容れてください。

タグを追加したくない場合には、`tags:`はそのままにして、タグを容れなければ大丈夫です。
また日本語でタグを追加する場合、空白を全角にしないよう気をつけてください。

4. `/public/articles/list.json`に以下の形式で記事の情報を登録する。

```
{
  "dirName": "zli_no_blog_wo_tukutta_hanashi", // 作成したディレクトリの名前
  "title": "ZliのBlogを作った話",              // 記事のタイトル
  "tags": ["React", "hoge", "fuga"],           // タグを配列で
  "authorId": "eraser5th"                      // 自身のid
}
```

## 執筆時に見ためを確認したい場合。

プロジェクトのルートで以下を実行すると開発サーバが立ち上がる。

```sh
npm run dev
```

表示された URl にアクセスすれば確認可能。

# 以下開発者向け(wip)

## 使用するもの

### ビルドツール

- [Vite v3.2.3](https://vitejs.dev/)

### ライブラリ

- [React v18.2.0](https://ja.reactjs.org/)
- [Typescript v4.6.4](https://www.typescriptlang.org/)
- [SWR](https://swr.vercel.app/ja)
- [React Hook Form 7.39.5](https://react-hook-form.com/)
- [classnames](https://github.com/JedWatson/classnames)
- [React router v6.4.3](https://reactrouter.com/en/main)
- [Vanilla extract](https://vanilla-extract.style/)
  - [css](https://vanilla-extract.style/documentation/getting-started/)
  - [sprinkles](https://vanilla-extract.style/documentation/packages/sprinkles/)
  - [recipes](https://vanilla-extract.style/documentation/packages/recipes/)

### リンター・フォーマッター

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 構成

```
/
├ public/
├ src/
├ .gitignore
├ index.html
├ package.json
├ package-lock.json
├ README.md
├ tsconfig.json
├ tsconfig.node.json
├ vite.config.ts
├ .eslintrc.json
├ .prettierrc.json

```

### src 案 1

コードはこの中に配置する。

```
/src
├─ hooks/
├─ types/
├─ utils/
├─ style_utils/
├─ components/
├─ pages/
```

#### hooks

汎用的なカスタムフックを配置。

#### types

汎用的な型を配置。

#### utils

汎用的な関数群を配置。

#### style_utils

汎用的なスタイルを配置。utility first css の ユーティリティクラスだと思ってもらえるとよいかも。

#### components

汎用的な React コンポーネントを配置。

#### pages

### src 案２

```
src
├─ utils/
│  ├─ hooks/
│  ├─ lib/
│  ├─ types/
│  ├─ style/
│  ├─ components/
├─ usecase/
├─ pages/
```

#### utils

汎用的なコードを配置。

#### pages

```
pages
└─ [pageName]/
   ├─ index.tsx
   └─ components.tsx

ページを配置。

### /public

アイコン（ブラウザのタブに表示されるやつ）などを配置。

###
```
