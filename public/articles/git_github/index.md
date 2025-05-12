authorId: yuorei
title: Git/GitHub について
tags: Git github

# Git/GitHub について

こんにちは!
Zli の [ユオレイ](https://yuorei.github.io/) です。
今回は Git と GitHub について解説します。本記事を読めば Git と GitHub を最低限使いこなせるようになると思いますので、ぜひ参考にしてください。
なお、Git の詳細を知りたい方は公式ドキュメントを参照してください。

[https://git-scm.com/](https://git-scm.com/)

## Git とは

Git は、小規模なプロジェクトから大規模なプロジェクトまで、あらゆる規模のソースコードを効率的に管理できる無料のオープンソース分散バージョン管理システムです。変更履歴を記録し、過去の状態に戻したり、複数のブランチで並行して開発を進めたりできます。

## ダウンロードとインストール

以下のコマンドでバージョンが表示されれば、すでにインストールされています。

```shell
$ git --version
```

表示されなかった場合は、以下の公式ガイドを参考にインストールしてください。

[https://git-scm.com/book/ja/v2/Getting-Started-Installing-Git](https://git-scm.com/book/ja/v2/Getting-Started-Installing-Git)

インストール後、再度バージョンコマンドを実行し、正常に表示されれば完了です。

## 初期設定

最初にユーザー名とメールアドレスをグローバル設定します。

```shell
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"
```

`--global` を省略すると、現在のリポジトリ内のみ設定が適用されます。
設定後、以下のコマンドで確認できます。

```shell
git config --global --list
git config --list
```

もしくは `~/.gitconfig` ファイルを直接参照しても構いません。

## リポジトリの作成

新しいプロジェクトで Git を使うには、作業ディレクトリで以下を実行します。

```shell
mkdir git-practice && cd git-practice
git init
```

これで `.git` ディレクトリが作成され、Git リポジトリが初期化されます。デフォルトブランチ名を指定したい場合は:

```shell
git init -b main
# または
git init --initial-branch=main
```

## ファイルのステージング

ファイルの変更をステージングエリアに追加するには `git add` を使います。

```shell
git add <ファイルパス>
# 複数ファイルの場合
git add <ファイル1> <ファイル2>
```

主なオプション:

* `-A` (`--all`): 変更および新規追加ファイルをすべて追加
* `-u` (`--update`): 変更ファイルのみ追加
* `-p` (`--patch`): 対話的に変更を選択して追加

## ステータスの確認

現在の状態は以下で確認できます。

```shell
git status
```

ステージされたファイルは "Changes to be committed" に表示され、ステージされていない変更は "Changes not staged for commit" に表示されます。

## コミット

ステージした変更をコミットするには:

```shell
git commit -m "コミットメッセージ"
```

エディタでメッセージを入力したい場合は `-m` を省略します。よく使うオプション:

* `--amend`: 直前のコミットを修正
* `-a`: 変更された tracked ファイルを自動でステージしてコミット（但し新規ファイルは対象外）

## ファイルの移動・削除

ファイル名を変更／移動するには:

```shell
git mv <旧名> <新名>
```

削除する場合は通常の `rm` コマンドの後に `git rm` を使います。

## 変更の取り消し

### 作業ツリーの変更を破棄

ステージ前の変更を破棄する:

```shell
git restore <ファイル>
```

### ステージから外す

ステージした変更を外す:

```shell
git restore --staged <ファイル>
```

### コミットを取り消す

```shell
git reset --soft HEAD~1   # コミットのみ取り消し
git reset --mixed HEAD~1  # デフォルト：変更を作業ツリーに残す
git reset --hard HEAD~1   # 変更を完全に破棄
```

## 差分とログ

* 差分の確認: `git diff`
* コミット履歴の確認: `git log`

主なオプション:

* `git log -p`: 各コミットの差分を表示
* `git log --stat`: 変更ファイル一覧を表示
* `git log -n 5`: 最新5件を表示

## ブランチ操作

### ブランチ一覧・作成

```shell
git branch          # 一覧表示
git branch <名前>   # 新規作成
```

### ブランチ切り替え

```shell
git switch <名前>   # 推奨
git checkout <名前> # 従来の方法
```

### ブランチ作成と同時に切り替え

```shell
git switch -c <新規ブランチ名>
```

### マージ

```shell
git switch main
git merge <統合したいブランチ>
```

### コンフリクト解消

コンフリクトが起きたら、対象ファイルの `<<<<<<<`, `=======`, `>>>>>>>` を手動で編集し、再度ステージ・コミットします。

## GitHub とは

GitHub は Git をベースにしたホスティングサービスで、リモートリポジトリを共有し、プルリクエストやコードレビュー、Issue 管理などを通じて共同開発を支援します。

## GitHub のセットアップ

1. [GitHub](https://github.com/) にアクセスし、アカウントを作成
2. SSH 鍵を生成・登録

```shell
ssh-keygen -t ed25519 -C "あなたのメールアドレス"
# id_ed25519.pub の内容をコピー
```

3. GitHub の [SSH Keys 設定画面](https://github.com/settings/ssh) に公開鍵を登録

## リポジトリの公開・Push

1. GitHub 上で新規リポジトリを作成
2. リモートを登録

```shell
git remote add origin git@github.com:<ユーザー名>/<リポジトリ名>.git
```

3. 初回の Push

```shell
git push -u origin main
```

## リモートの更新を取得

* 初回クローン: `git clone <URL>`
* 既存リポジトリの更新:

  * `git fetch`: 情報を取得のみ
  * `git pull`: 取得してマージ

## .gitignore の活用

追跡したくないファイルを `.gitignore` に記載します。

```gitignore
.env
node_modules/
```

`.gitignore` は [gitignore.io](https://www.toptal.com/developers/gitignore) などで生成可能です。

---

以上で、Git と GitHub の基本的な操作を紹介しました。慣れるまでは多くのコマンドがありますが、日常的に使うことで自然に身につきます。ぜひ積極的に試してみてください！
