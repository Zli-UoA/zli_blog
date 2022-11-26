# Zli Blog

デザイン： [figma](https://www.figma.com/file/BeealdPJxbboY3Uh9k17vg/ZliBlog?node-id=109%3A990&t=cqelnDMyiYIpFclv-1)

## 使用するもの

### 環境

- [node v17.2.0](https://nodejs.org/ja/)

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

### src 案1

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

汎用的なReactコンポーネントを配置。

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