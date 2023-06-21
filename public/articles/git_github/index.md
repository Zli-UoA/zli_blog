---
authorId: yuorei
title: git,GitHubについて
tags: git github
---

# git,GitHubについて

こんにちは!
Zliの[ユオレイ](https://yuorei.github.io/)です。
今回はgit, GitHubについて解説していきます。この記事を読めばgit, GitHubを最低限は使えるようになると思います。ぜひ参考にしてみてください。  
gitの全てを知りたい方は

<https://git-scm.com/>

こちらの公式を参考にしてください。

## gitについて

gitとは、小規模なプロジェクトから非常に大規模なプロジェクトまで、あらゆるプロジェクトを迅速かつ効率的に処理できるように設計された、 無料のオープンソースの分散バージョン管理システムです。gitを使うことでソースコードの管理が非常に快適になります。
gitは、プログラムのソースコードなどの変更履歴を記録できて、過去の履歴を参照してその時の状態に戻すことができます。
共同作業をするときは、別にブランチを切って作業できるので本番ブランチへ影響を与えずに作業することができます。

### ダウンロードとインストール

```shell
git -v
```

これでバージョンが出てきていればすでにインストール済みなのでここは飛ばしてください。
出なかった方は今からダウンロードしていきます。
ここからダウンロードしてください。

<https://git-scm.com/downloads>

ダウンロードが終わったら先ほどのコマンドを実行してバージョンが出たらインストール完了です。

### セットアップ

はじめに自分のユーザーネームとメールアドレスをグローバルに設定します。
設定するためには`git config`を使います。
ユーザーネームとメールアドレスは適宜変更してください。

```shell
git config --global user.name "example"
git config --global user.email "example@example.com"
```

`--global`とはグローバルに設定をするという意味があります。つまり今後gitを使う時のデフォルトが、全て今設定したものとなります。ちなみに`--global`をつけないとローカルに設定されます。

設定をしたら確認をします。
`--list`もしくは`-l`をつけることで確認できます。

```shell
git config --global --list
git config --global -l
```

```shell
user.name=example
user.email=example@example.com
init.defaultbranch=main
core.autocrlf=false
```

もしくは`~/.gitconfig`から確認もできます。

### プロジェクトの作成

プロジェクトでgitを使うためにGitリポジトリを作成します。

```shell
mkdir git-practice && cd git-practice
```

`git init`を使うことで作成ができます。もし、リポジトリがもともと存在していた場合は再度作り直されます。。`.git`のあるディレクトリで作業をします。

```shell
git init
```

`.git`があるかを確認するには`ls -a`で確認してみてください。これがあるディレクトリがGitリポジトリです。現在は空のGitリポジトリです。
デフォルトではブランチ名は`main`になっています。ブランチについては後ほど解説をします。もしmain以外のブランチ名を使いたい場合は`git init -b ブランチ名`もしくは`git branch --initial-branch=ブランチ名`となります。

### ファイルの内容をインデックスに追加

ここではファイルの変更をステージングエリアに追加します。
ステージングエリアとはGitレポジトリにコミットするファイルを置いておくためのエリアです。

```shell
git add 変更したファイルのパス
```

もし複数のファイルを追加したい場合は以下のように追加してください。

```shell
git add 変更したファイルのパス1 変更したファイルのパス2
```

`git add`のオプションは以下のものがあります。

```shell
git add [--verbose | -v] [--dry-run | -n] [--force | -f] [--interactive | -i] [--patch | -p]
      [--edit | -e] [--[no-]all | --[no-]ignore-removal | [--update | -u]] [--sparse]
      [--intent-to-add | -N] [--refresh] [--ignore-errors] [--ignore-missing] [--renormalize]
      [--chmod=(+|-)x] [--pathspec-from-file=<file> [--pathspec-file-nul]]
      [--] [<pathspec>…]
```

一部を解説します。  
`--all`もしくは`-A`は変更したもの、新しくアップロードしたものを全てステージングエリアに追加します。

`--update`もしくは `-u`は変更したものを全てステージングエリアに追加します。新しくアップロードしたものは追加されません。

`--interactive`もしくは`-i`はコマンドを対話的に行うことができます。

`--patch`もしくは`-p`は変更をステージングエリアに追加することを対話的に行うことができます。

### ファイルの変更の確認

ステージングエリアに追加されているかどうかを確認するには、以下のコマンドを使います。

```shell
git status
```

変更があってステージングエリアに追加されていない場合は以下のように表示されます。

```shell
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
    test.txt

nothing added to commit but untracked files present (use "git add" to track)
```

`add`を使ってステージングエリアに追加をすると以下のように表示されます。

```shell
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
    new file:   test.txt
```

このようにして確認できます。

### リポジトリへの変更を記録

先ほど変更してステージングエリアに追加したもので、コミットメッセージを含む新しいコミットを作成します。
以下のコマンドを使います。

```shell
git commit
```

このコマンドを使うと`vi`というテキストエディターが開きます。ここで`vi`の操作でコミットを残してコミットを作成できます。

```vi
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

```shell
# On branch main
# Changes to be committed:
#       modified:   test.txt
#
```

`git commit`オプションは以下のものがあります。

```shell
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

`--amend`は直前のコミットを修正するオプションです。コミットをしたけどコミットメッセージを変更したいときや、新たに同じコミットにファイル追加したい時に使います。注意として必ずプッシュをする前に行ってください。

`-a`もしくは`--all`は変更および削除されたファイルを自動的にステージングエリアに追加して、そのままコミットをします。このオプションは変更したファイルを確認することなくコミットしてしまうので、誤って追加するつもりのないファイルまでコミットしてしまう可能性があることから使わない方がよいと思います。

### ファイル名を変更

ファイルの名前を変更したことをコミットする場合には以下のコマンドを使います。

```shell
git mv 古いファイル名 新しいファイル名
```

### 作業ツリーファイルを復元

ステージングエリアに追加したものを取り下げることや、作業ツリーから消したものを復元することや、コミットを復元する時に使います。

```shell
git restore
```

`git restore ファイルのパス`で変更したものをリセットできます。

オプションには以下のものがあります。

```shell
git restore [<options>] [--source=<tree>] [--staged] [--worktree] [--] <pathspec>…​
git restore [<options>] [--source=<tree>] [--staged] [--worktree] --pathspec-from-file=<file> [--pathspec-file-nul]
git restore (-p|--patch) [<options>] [--source=<tree>] [--staged] [--worktree] [--] [<pathspec>…​]
```

一部を解説します。  
`--stage`はステージングエリアに追加したものを取り下げることができます。

### ファイル内の差分について

ファイル内の差分を確認します。

```shell
git diff
```

このコマンドは`git add`する前に変更点を見ることができます。
オプションはいくつかありますがここでは紹介しません。

### ログについて

過去のコミットを遡るには以下のコマンドを使います。

```shell
git log
```

このコマンドを使うと過去のコミットの情報が確認できます。
以下のものが表示されます。

```shell
commit 39c2e9e967cabce71abba975b83f2fadbd758b82 (HEAD -> main)
Author: example <example@example.com>
Date:   Fri Jun 9 17:20:28 2023 +0900

    first commit
```

`39c2e9e967cabce71abba975b83f2fadbd758b82`これはSHA-1でハッシュ化されたものです。これを指定することで、このコミットに対して何かしらのことができます。

```shell
Author: example <example@example.com>
Date:   Fri Jun 9 17:20:28 2023 +0900
```

この部分は作成者と日時が記載されています。
最後の`first commit`はコミットメッセージです。

`git log`のオプションは以下なものがあります。

```shell
git log [<options>] [<revision-range>] [[--] <path>…​]
```

一部を解説します。  

`-n 10`はログを10個表示させるオプションです。数字は自分の好きなように指定できます。

`-p`はコミット時の変更内容を確認できます。

`--stat`は変更があったファイルの一覧を確認できます。

### リセット

gitでリセットをする時に使います。

```shell
git reset
```

特定のコミットまでもどす時には以下のコマンドで復元させることができます。

```shell
git reset --hard ハッシュ値
```

### ブランチについて

ブランチについて解説します。ブランチとは、履歴の流れを分岐して記録していくためのものです。分岐したブランチは他のブランチの影響を受けないため、同じリポジトリ中で複数の変更を同時に進めていくことができます。
おそらくmainもしくはmasterブランチが本番になると思います。このブランチから新しくブランチをきって、そこで新たに開発をして問題がなければ本番のブランチにマージをします。
ブランチに関するものには以下のコマンドを使います。

```shell
git branch
```

`git branch`はブランチの一覧を表示してくれます。
`git branch 作りたいブランチ名`で新しくブランチを作成できます。
オプションは以下のものがあります。

```shell
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

### ブランチの切り替え

ブランチを切り替えるには以下のコマンドを使います。

```shell
git switch ブランチ名
```

```shell
git checkout ブランチ名
```

現在はブランチを切り替えるのであれば`switch`の方が新しいのでそちらを使うことをお勧めします。
オプションは以下のものがあります。

```shell
git switch [<options>] [--no-guess] <branch>
 git switch [<options>] --detach [<start-point>]
 git switch [<options>] (-c|-C) <new -branch> [<start-point>]
 git switch [<options>] --orphan <new-branch>
```

一部を解説します。  

`--create 新しいブランチ名`もしくは`-c 新しいブランチ名`を使うことでブランチを作って、切り替えをしてくれます。`checkout -b 新しいブランチ名`と同じことをします。

### コミットはせずに変更を退避する

コミットはせずにブランチを切り替えたい時に以下のコマンドを使います。

```shell
git stash
```

オプションは以下のものがあります。

```shell
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

```shell
stash@{0}: WIP on main: 2161f90 first commit
```

`apply stash@{0}`は`stash@{0}`を戻します。listの中からは消えません。

`pop stash@{0}`は`stash@{0}`を戻します。listの中から消えます。

### ブランチをマージする

`main`ブランチから新しく切り替えた`feature/test`ブランチがあるとします。`feature/test`で変更を加えたとします。
`main`ブランチ

```main
hello
```

`feature/test`ブランチ

```feature/test
hello
world
```

この`feature/test`ブランチで`world`と付け加えた変更を`main`ブランチに反映させるためには以下のコマンドを`main`ブランチで使います。

```shell
git merge feature/test
```

これで`main`ブランチで変更が反映されます。

```main
hello
world
```

## GitHubについて

GitHubとはgitを活用したサービスです。GitHub上にソースコードをホスティングすることで数百万人もの他の開発者と一緒にコードのレビューを行ったり、プロジェクトの管理をしながら、ソフトウェアの開発を行うことができます。

### GitHubのセットアップ

[GitHub](https://github.co.jp/)にアクセスしてアカウントを作成してください。

次にGitHubでssh接続します。
まずは公開鍵・秘密鍵を作成します。

```shell
cd ~/.ssh
```

鍵を生成します。

```shell
ssh-keygen -t
```

実行時にいろいろと聞かれますが3回ともEnterを押してもらって大丈夫です。
生成された`id_rsa.pub`の中身をコピーしてください。間違っても秘密鍵である`id_rsa`をコピーしないでください。
次に公開鍵をGitHubにアップします。
[shhキーの設定](https://github.com/settings/ssh)ここにアクセルして`New SSH Key`をクリックして、お好きな名前を鍵につけて公開鍵をそこに貼って鍵の設定は完了です。
![shhキーの設定](/articles/git_github/shhKeySettings.png)

### リポジトリにアップロードする

GitHubでリポジトリを作成してください。任意の名前をつけてパブリックかプライベートを選択して作成できます。
![リポジトリにアップロード](/articles/git_github/uploadToRepository.png)

作成をするとリポジトリの画面に移動します。
`git remote add origin git@github.com:example/practice-git.git`このように書かれているものをコピーしてください。ターミナルでGitリポジトリの場所で先ほどのコマンドを実行します。
`remote`はリモートリポジトリを設定するコマンドです。

設定できたかを確認するには以下のオプションをつけてください。

```shell
git remote -v
```

最後にアップロードをするために以下のコマンドを使います。

```shell
git push -u origin main
```

`push`はローカルのリポジトリをリモートリポジトリにアップロードするためのコマンドです。
`-u`は同時にリモートブランチを追跡ブランチ（トラッキングブランチ）として設定できます。次回以降の `git push`コマンドを実行する際に、単に `git push` と入力するだけで、対応するリモートブランチに自動的にプッシュされるようになります。また、`git pull` コマンドを実行する際にも、リモートブランチから自動的に変更内容を取得できます。

### ローカルリポジトリを最新の状態に

何もない状態でリポジトリをコピーする場合は以下のコマンドを使っていください。

```shell
git clone
```

これでコピーできます。主にGitHubから持ってくるときに使用します。

ローカルリポジトリを最新の状態にするにはいくつかの方法があります。

```shell
git feach
```

これでリモートリポジトリの情報をローカルリポジトリに持ってきます。
これをマージすればソースコードにも反映されます。
一度に`feach`と`merge`を行うには以下のコマンドを使ってください。

```shell
git pull
```

これで一度にできます。

## 実践

ここからは学んだことをいかして、実際にやってみましょう。
以下のものは一例なので別のやり方をしても、問題はありません。

- 練習用のディレクトリを作成して移動してください。

```shell
mkdir git-practice && cd git-practice
```

- git configの設定してください。

```shell
git config --global user.name "example"
git config --global user.email "example@example.com"
```

- gitリポジトリを作成してください。

```shell
git init
```

- ブランチを確認してください。

```shell
git branch
```

おそらく`main`になっていると思います。

- ファイルの作成してください。

```shell
echo "hello" > test1.txt
```

- ステージングエリアに追加してください。

```shell
git add test1.txt
```

- ステージングエリアの確認をしてください。

```shell
git status
```

- コミットしてください。

```shell
git commit -m "first commit"
```

- ブランチを作成して移動してください。

```shell
git switch -c feature/practice
git branch
```

- ファイルを編集してください。
`test1.txt`

```test1.txt
hello
world
```

- 差分を確認してください。

```shell
git diff
```

- ファイルをステージングエリアにあげて、コミットをしてください。

```shell
git add test1.txt
git commit -m "commit in feature/practice"
```

- mainブランチに戻ってください
- 変更を取り入れるためにマージをしてください。

```shell
git merge feature/practice
```

- 変更が取り入れられたことを確認してください。

```shell
git log
cat test1.txt
```

- GitHubにプッシュしてください。
**GitHubについて**を参考にしてください。

![プッシュした画像](/articles/git_github/pushedImage.png)

- GitHub上で`Add a README with an overview of your project.`を押して追加してください。
![Add a README with an overview of your project.](/articles/git_github/README.png)

- GitHubから最新の情報をとってきてください。

mainブランチにて行ってください。

```shell
git pull origin main
```

もしくは

```shell
git pull
```

そうすることでGitHub上で追加した`README.md`を取得できます。

- 新しいブランチを作って移動してください。

```shell
git switch -c feature/practice2
```

- ファイルを編集してコミットをしてください。
`test1.txt`

```test1.txt
hello
world
feature/practice2で編集しました
```

```shell
git add test1.txt
git commit -m "feature/practice2で編集しました"
```

- GitHubにプッシュしてください。

```shell
git push origin feature/practice2
```

- GitHubでPull Requestを作成します。

GitHubの作成したリポジトリにPR(プルリクエスト)の作成するボタンがあります。

`Compare&pull request`を押してください。

![Compare&pull request](/articles/git_github/PR.png)

ここでどこからどこにマージをするか、今回のPRで何をしたかを書いてください。完成したら`Create pull request`を押してPRを作成してください。問題なければマージするボタンを押してマージしてください。
最後にmainブランチでプルしてください。

- `feature/practice`に移動してファイルを編集してコミットをしてください。

```shell
git switch feature/practice
```

`test1.txt`

```test1.txt
hello
world
feature/practiceで編集しました
```

```shell
git add test1.txt
git commit -m "feature/practiceで編集しました"
```

- mainをマージしてください。

```shell
git merge main
```

おそらくこのように表示されると思います。

```shell
Auto-merging test1.txt
CONFLICT (content): Merge conflict in test1.txt
Automatic merge failed; fix conflicts and then commit the result.
```

これはコンフリクトというものが起きています。
`test1.txt`の中身をみてください。

```test1.txt
hello
world
<<<<<<< HEAD
feature/practiceで編集しました
=======
feature/practice2で編集しました
>>>>>>> main
```

- コンフリクトの解消します。
`<<<<<<< HEAD`は`feature/practice`で編集した部分です。`>>>>>>> main`は`feature/practice2`で編集した部分です。ここで必要な部分手動で修正してください。

```test1.txt
hello
world
feature/practiceで編集しました

```

コンフリクト解消を行ったらコミットしてプッシュしてください。

```shell
git add test1.txt
git commit -m "Merge branch 'main' into feature/practice"
git push origin feature/practice
```

GitHubでマージしてください。

- 特定のコミットに戻ってみます

まずはログを確認します。

```shell
git log
```

```shell
commit 39bd5daaaac06369d5bb070cc0a658556b55a0db
Author: example <example@example.com>
Date:   Wed Jun 14 16:48:10 2023 +0900

    first commit
```

最初にコメントした`first commit`に戻ろうと思います。

```shell
git reset --hard ハッシュ値
```

これで戻れます。`ハッシュ値`は上の`39bd5daaaac06369d5bb070cc0a658556b55a0db`の部分を自分のものに変えてください。
`git log`で確認してみると戻っていることを確認できます。

- `feature/practice2`に移動してください。
- `.env`ファイルを作成します。
`.env`

```.env
PASSWORD=1234
```

```shell
echo ".envにPASSWORDを追加した" >> test1.txt
```

`.env`とは開発用途での環境変数を設定するためのものです。外部に漏れてはいけないものを設定しておくファイルです。

- プッシュします。
**重要**ここからやることは説明のために行うことであり、開発の際には絶対に行わないようにしてください。

```shell
git add -A
git commit -m ".envも含めてコミット"
git push origin feature/practice2
```

![ファイル変更確認](/articles/git_github/fileChangeConfirmation.png)

- 間違えてプッシュしてしまったので取り消します。

```shell
git reset --hard HEAD~1
```

この例の場合は1回のコミットを全てなかったことにしました。
この修正をGitHubにプッシュしようとしますが、普通のプッシュですと失敗してしまいますので強制的にプッシュをします。
**注意**他のチームメンバーに迷惑がかかる可能性がありますので、基本的にこの行為はしてはいけません。

```shell
git push -f origin feature/practice2
```

GitHubで確認すると、なかったことになっていると思います。ですが実際には完全には消えていません。本当に削除をする場合はGitHubに問い合わせてください。

- 対策
gitの追跡の対象外にするためのものがあります。`.gitignore`というものがあります。これに書かれたものはgitの追跡対象外になります。
`.gitignore`

```.gitignore
.env
```

これで`.env`は追跡の対象外になりました。
`.gitignore`に入れるべきものを自動で生成してくれる良いサイトがあるので紹介しておきます。
**gitignore.io - プロジェクトに役立つ.gitignoreファイルを作成しよう**

<https://www.toptal.com/developers/gitignore>

他の対策としては`git status`できちんと確認をすることがあげられます。

## おわりに

これでgit,GitHubは最低限は使えるようになったと思います。これらは慣れるまでは大変ですが、普段から使っていけば快適に開発を行えるのでぜひ扱えるようにがんばってください。
