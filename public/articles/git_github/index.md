---
authorId: yuorei
title: git,GitHubについて
tags: git github
---

# git,GitHubについて
こんにちは!
Zliの[ユオレイ](https://yuorei.github.io/)です。
今回はgit,GitHubについて解説していきます。この記事を読めばgit,GitHubを最低限は使えるようになると思います。ぜひ参考にしてみてください。  
gitの全てを知りたい方は
https://git-scm.com/
こちらの公式を参考にしてください。

## gitについて

gitとは、小規模なプロジェクトから非常に大規模なプロジェクトまで、あらゆるプロジェクトを迅速かつ効率的に処理できるように設計された、 無料のオープンソースの分散バージョン管理システムです。gitを使うことでソースコードの管理が非常に快適になります。
gitは、プログラムのソースコードなどの変更履歴を記録できて、過去の履歴を参照してその時の状態に戻すことができます。
共同作業をするときは、branchをきって作業できるのでmainのbranchには影響をあたえずに作業できます。

## ダウンロード

```
git -v
```
これでバージョンが出てきていればすでにダウンロード済みなのでここは飛ばしてください。
出なかった方は今からダウンロードしていきます。
ここからダウンロードしてください。
https://git-scm.com/downloads
ダウンロードが終わったら先ほどのコマンドを実行してバージョンが出たらダウンロード完了です。

## セットアップ

はじめに自分のユーザーネームとメールアドレスをグローバルに設定します。
設定するためには`git config`を使います。
ユーザーネームとメールアドレスは適宜変更してください。
```
git config --global user.name "yuorei"
git config --global user.email "example@example.com"
```
`--global`とはグローバルに設定をするという意味があります。つまり今後gitを使う時のデフォルトが、全て今設定したものとなります。ちなみに`--global`をつけないとローカルに設定されます。

設定をしたら確認をします。
`--list`もしくは`-l`をつけることで確認できます。
```
git config --global --list
git config --global -l
```

```
user.name=yuorei
user.email=example@example.com
init.defaultbranch=main
core.autocrlf=false
```

もしくは` ~/.gitconfig`から確認もできます。

## プロジェクトの作成

プロジェクトでgitを使うためにGitリポジトリを作成します。
```
mkdir git_practice && cd git_practice
```
`git init`を使うことで作成ができます。もしもともと存在していた場合は再度作り直されます。`.git`のあるディレクトリで作業をします。
```
git init
```
`.git`があるかを確認するには`ls -a`で確認してみてください。これがGitリポジトリです。現在は空にGitリポジトリです。
デフォルトではブランチ名は`main`になっています。ブランチについては後ほど解説をします。もしmain以外のブランチ名を使いたい場合は`git init -b ブランチ名`もしくは`git branch --initial-branch=ブランチ名`となります。

## ファイルの内容をインデックスに追加
ここではファイルの変更をステージングエリアに追加します。
ステージングエリアとはGitレポジトリにコミットするファイルを置いておくためのエリアです。
```
git add 変更したファイルのパス
```
もし複数のファイルを追加したい場合は以下のように追加してください。
```
git add 変更したファイルのパス1 変更したファイルのパス2
```

`git add`のオプションは以下のものがあります。
```
git add [--verbose | -v] [--dry-run | -n] [--force | -f] [--interactive | -i] [--patch | -p]
	  [--edit | -e] [--[no-]all | --[no-]ignore-removal | [--update | -u]] [--sparse]
	  [--intent-to-add | -N] [--refresh] [--ignore-errors] [--ignore-missing] [--renormalize]
	  [--chmod=(+|-)x] [--pathspec-from-file=<file> [--pathspec-file-nul]]
	  [--] [<pathspec>…]
```

一部を解説します。  
`--all`もしくは`-A`は変更したもの、新しくアップロードしたものを全てステージングエリアに追加します。

`--update`もしくは `-u`は変更したものを全てステージングエリアに追加します。新しくアップロードしたものは追加されません。

`--interactive`もしくは`-i`は対話的に行うことができます。

## ファイルの変更の確認
ステージングエリアに追加されているかどうかを確認するには、以下のコマンドを使います。
```
git status
```
変更があってステージングエリアに追加されていない場合は以下のように表示されます。
```
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	test.txt

nothing added to commit but untracked files present (use "git add" to track)
```
`add`を使ってステージングエリアに追加をすると以下のように表示されます。
```
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   test.txt
```
このようにして確認できます。

## リポジトリへの変更を記録
先ほど変更してステージングエリアに追加したもので、コミットメッセージを含む新しいコミットを作成します。
以下のコマンドを使います。
```
git commit
```
このコマンドを使うと`vi`というテキストエディターが開きます。ここで`vi`の操作でコミットを残してコミットを作成できます。
```
ここにコミットメッセージを書く
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch main
# Changes to be committed:
#       modified:   test.txt
#
```
`#`になっている部分はコメントとなりコミットメッセージに反映されません。よく`git commit -m "ここにコミットメッセージ"`を見るかもしれませんが`-m`をつけないとファイルの変更の確認をできます。
```
# On branch main
# Changes to be committed:
#       modified:   test.txt
#
```
`git commit`オプションは以下のものがあります。
```
git commit [-a | --interactive | --patch] [-s] [-v] [-u<mode>] [--amend]
	   [--dry-run] [(-c | -C | --squash) <commit> | --fixup [(amend|reword):]<commit>)]
	   [-F <file> | -m <msg>] [--reset-author] [--allow-empty]
	   [--allow-empty-message] [--no-verify] [-e] [--author=<author>]
	   [--date=<date>] [--cleanup=<mode>] [--[no-]status]
	   [-i | -o] [--pathspec-from-file=<file> [--pathspec-file-nul]]
	   [(--trailer <token>[(=|:)<value>])…​] [-S[<keyid>]]
	   [--] [<pathspec>…​]
```
一部を解説します。  

`-m "ここにコミットメッセージ"`もしくは`--message="ここにコミットメッセージ"`はコミットメッセージをコマンドラインから入力できるオプションです。よく使うオプションです。

`--amend`は直前のコミットを修正するオプションです。コミットをしたけどコミットメッセージを変更したいときや、新たに同じコミットにファイル追加したい時に使います。注意として必ずpushをする前に行ってください。

`-a`もしくは`--all`は変更および削除されたファイルを自動的にステージングエリアに追加して、そのままコミットをします。このオプションは変更したファイルを確認することなくコミットしてしまうので、誤って追加するつもりのないファイルまでコミットしてしまう可能性があることから使わない方がよいと思います。

## ファイル名を変更
ファイルの名前を変更したことをコミットする場合には以下のコマンドを使います。
```
git mv 古いファイル名 新しいファイル名
```

## 作業ツリーファイルを復元
ステージングエリアに追加したものを取り下げることや、作業ツリーから消したものを復元することや、コミットを復元する時に使います。
```
git restore
```
`git restore ファイルのパス`で変更したものをリセットできます。　

オプションには以下のものがあります。
```
git restore [<options>] [--source=<tree>] [--staged] [--worktree] [--] <pathspec>…​
git restore [<options>] [--source=<tree>] [--staged] [--worktree] --pathspec-from-file=<file> [--pathspec-file-nul]
git restore (-p|--patch) [<options>] [--source=<tree>] [--staged] [--worktree] [--] [<pathspec>…​]
```
一部を解説します。  
`--stage`はステージングエリアに追加したものを取り下げることができます。

## ファイル内の差分について
ファイル内の差分を確認します。
```
git diff
```
このコマンドは`git add`する前に変更点を見ることができます。
オプションはいくつかありますがここでは紹介しません。

## ログについて
過去のコミットを遡るには以下のコマンドを使います。
```
git log
```
このコマンドを使うと過去のコミットの情報が確認できます。
以下のものが表示されます。
```
commit 39c2e9e967cabce71abba975b83f2fadbd758b82 (HEAD -> main)
Author: yuorei <example@example.com>
Date:   Fri Jun 9 17:20:28 2023 +0900

    first commit
```
`39c2e9e967cabce71abba975b83f2fadbd758b82`これはSHA-1でハッシュ化されたものです。これを指定することで、このコミットに対して何かしらのことができます。
```
Author: yuorei <example@example.com>
Date:   Fri Jun 9 17:20:28 2023 +0900
```
この部分は作成者と日時が記載されています。
最後の`first commit`はコミットメッセージです。

`git log`のオプションは以下なものがあります。
```
git log [<options>] [<revision-range>] [[--] <path>…​]
```
一部を解説します。  

`-n 10`はログを10個表示させるオプションです。数字は自分の好きなように指定できます。

`-p`はコミット時の変更内容を確認できます。

`--stat`は変更があったファイルの一覧を確認できます。

## リセット
gitでリセットをする時に使います。
```
git reset
```
特定のコミットまでもどす時には以下のコマンドで復元させることができます。
```
git reset --hard ハッシュ値
```

## ブランチについて
ブランチについて解説します。ブランチとは、履歴の流れを分岐して記録していくためのものです。分岐したブランチは他のブランチの影響を受けないため、同じリポジトリ中で複数の変更を同時に進めていくことができます。
おそらくmainもしくはmasterブランチが本番になると思います。このブランチから新しくブランチをきって、そこで新たに開発をして問題がなければ本番のブランチにマージをします。
ブランチに関するものには以下のコマンドを使います。
```
git branch
```

`git branch`はブランチの一覧を表示してくれます。
`git branch 作りたいブランチ名`で新しくブランチを作成できます。
オプションは以下のものがあります。
```
git branch [--color[=<when>] | --no-color] [--show-current]
	[-v [--abbrev=<n> | --no-abbrev]]
	[--column[=<options>] | --no-column] [--sort=<key>]
	[--merged [<commit>]] [--no-merged [<commit>]]
	[--contains [<commit>]] [--no-contains [<commit>]]
	[--points-at <object>] [--format=<format>]
	[(-r | --remotes) | (-a | --all)]
	[--list] [<pattern>…​]
git branch [--track[=(direct|inherit)] | --no-track] [-f]
	[--recurse-submodules] <branchname> [<start-point>]
git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>]
git branch --unset-upstream [<branchname>]
git branch (-m | -M) [<oldbranch>] <newbranch>
git branch (-c | -C) [<oldbranch>] <newbranch>
git branch (-d | -D) [-r] <branchname>…​
git branch --edit-description [<branchname>]
```

`--delete`もしくは`-d ブランチ名`はブランチを削除してくれます。`-D ブランチ名`を使うと確認なしで削除してくれます。`-d`と`-f`を組み合わせたものです。

`--copy`もしくは`-c 新しいブランチ名`はブランチをコピーして新しく作れます。`-C 新しいブランチ名`は`-c`と`-f`を組み合わせたものです。

`--move 古いブランチ名 新しいブランチ名`もしくは`-m 古いブランチ名 新しいブランチ名`でブランチを改名できます。現在のブランチを改名したい場合は古いブランチ名は不要です。

## ブランチの切り替え
ブランチを切り替えるには以下のコマンドを使います。
```
git switch ブランチ名
```
```
git checkout ブランチ名
```
現在はブランチを切り替えるのであれば`switch`の方が新しいのでそちらを使うことをお勧めします。
オプションは以下のものがあります。
```
git switch [<options>] [--no-guess] <branch>
 git switch [<options>] --detach [<start-point>]
 git switch [<options>] (-c|-C) <new -branch> [<start-point>]
 git switch [<options>] --orphan <new-branch>
```
一部を解説します。  

`--create 新しいブランチ名`もしくは`-c 新しいブランチ名`を使うことでブランチを作って、切り替えをしてくれます。`checkout -b 新しいブランチ名`と同じことをします。

## コミットはせずに変更を退避する
コミットはせずにブランチを切り替えたい時に以下のコマンドを使います。
```
git stash
```
オプションは以下のものがあります。
```
git stash list [<log-options>]
git stash show [-u | --include-untracked | --only-untracked] [<diff-options>] [<stash>]
git stash drop [-q | --quiet] [<stash>]
git stash pop [--index] [-q | --quiet] [<stash>]
git stash apply [--index] [-q | --quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash [push [-p | --patch] [-S | --staged] [-k | --[no-]keep-index] [-q | --quiet]
	     [-u | --include-untracked] [-a | --all] [(-m | --message) <message>]
	     [--pathspec-from-file=<file> [--pathspec-file-nul]]
	     [--] [<pathspec>…​]]
git stash save [-p | --patch] [-S | --staged] [-k | --[no-]keep-index] [-q | --quiet]
	     [-u | --include-untracked] [-a | --all] [<message>]
git stash clear
git stash create [<message>]
git stash store [(-m | --message) <message>] [-q | --quiet] <commit>
```
一部を解説します。  
`-u`は新規アップロードファイルを含めることができます。

`list`は退避しているものを一覧として表示させます
```
stash@{0}: WIP on main: 2161f90 first commit
```

`apply stash@{0}`は`stash@{0}`を戻します。listの中からは消えません。

`pop stash@{0}`は`stash@{0}`を戻します。listの中から消えます。

## ブランチをマージする
`main`ブランチから新しく切り替えた`feature/test`ブランチがあるとします。`feature/test`で変更を加えたとします。
`main`ブランチ
```
hello
```
`feature/test`ブランチ
```
hello
world
```
この`feature/test`ブランチで`world`と付け加えた変更を`main`ブランチに反映させるためには以下のコマンドを`main`ブランチで使います。
```
git merge feature/test
```
これで`main`ブランチで変更が反映されます。
```
hello
world
```

## Githubについて
GitHubとはgitを活用したサービスです。GitHub上にソースコードをホスティングすることで数百万人もの他の開発者と一緒にコードのレビューを行ったり、プロジェクトの管理をしながら、ソフトウェアの開発を行うことができます。

## GitHubのセットアップ
[GitHub](https://github.co.jp/)にアクセスしてアカウントを作成してください。

次にGitHubでssh接続します。
まずは公開鍵・秘密鍵を作成します。
```
cd ~/.ssh
```
鍵を生成します。
```
ssh-keygen -t
```
実行時にいろいろと聞かれますが3回ともEnterを押してもらって大丈夫です。
生成された`id_rsa.pub`の中身をコピーしてください。間違っても秘密鍵である`id_rsa`をコピーしないでください。
次に公開鍵をGitHubにアップします。
[shhキーの設定](https://github.com/settings/ssh)ここにアクセルして`New SSH Key`をクリックして、お好きな名前を鍵につけて公開鍵をそこに貼って鍵の設定は完了です。
![](https://hackmd.io/_uploads/BJ768Jfwh.png)
## リポジトリにアップロードする
GitHubでリポジトリを作成してください。任意の名前をつけてパブリックかプライベートを選択して作成できます。
![](https://hackmd.io/_uploads/HkPSXnZP3.png)

作成をするとリポジトリの画面に移動します。
`git remote add origin git@github.com:yuorei/git-test.git`このように書かれているものをコピーしてください。ターミナルでGitリポジトリの場所で先ほどのコマンドを実行します。
`remote`はリモートリポジトリを設定するコマンドです。

設定できたかを確認するには以下のオプションをつけてください。
```
git remote -v
```



最後にアップロードをするために以下のコマンドを使います。
```
git push -u origin main
```
`push`はローカルのリポジトリをリモートリポジトリにアップロードするためのコマンドです。
`-u`は同時にリモートブランチを追跡ブランチ（トラッキングブランチ）として設定できます。次回以降の `git push`コマンドを実行する際に、単に `git push` と入力するだけで、対応するリモートブランチに自動的にプッシュされるようになります。また、`git pull` コマンドを実行する際にも、リモートブランチから自動的に変更内容を取得できます。

## ローカルリポジトリを最新の状態に
何もない状態でリポジトリをコピーする場合は以下のコマンドを使っていください。
```
git clone
```
これでコピーできます。主にGitHubから持ってくるときに使用します。

ローカルリポジトリを最新の状態にするにはいくつかの方法があります。
```
git feach
```
これでリモートリポジトリの情報をローカルリポジトリに持ってきます。
これをマージすればソースコードにも反映されます。
一度に`feach`と`merge`を行うには以下のコマンドを使ってください。
```
git pull
```
これで一度にできます。

## おわりに
これでgit,GitHubは最低限は使えるようになったと思います。これらは慣れるまでは大変ですが、普段から使っていけば快適に開発を行えるのでぜひ扱えるようにがんばってください