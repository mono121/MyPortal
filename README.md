# MyPortal

 URLをタイトルと概要付きで管理できる自作ポータルサイト。

![MyPortal](https://user-images.githubusercontent.com/54978940/191066743-be67a89e-594d-4dd3-9025-69e0034c5540.png)

## 概要

社内環境など自身のPCに外部ツールをダウンロードできない環境下で使用できる自作ポータルサイトになります。使用ツールは以下の通り最低限のものになっています。

#### 使用ツール

- GAS
- Google spreadsheet
- javascript
- jquery
- html/css
- chrome

使用ブラウザはchromeでしかテストしていないため他のブラウザでの動作は保証できません。

## 導入方法

 まずはGoogle スプレッドシートを作成します。作成したスプレッドシートにmenuタブとURLのタイトル、概要、リンクを記入するタブを作成します。<br>
注意点

- menuタブに記入したmenu名とURLを記入するタブの名前は一致させる。
- 記入する列と行は以下の画像と一致させる。

 ![menu](https://user-images.githubusercontent.com/54978940/191066944-9205d429-62c3-4ada-b9b9-437fbe03d29c.png)

 ![card_url](https://user-images.githubusercontent.com/54978940/191067022-565a8ebf-724f-432c-8004-5e5b67201a1b.png)

 作成したスプレッドシートで<br>
 拡張機能 -> Apps Script

 ![AppsScript](https://user-images.githubusercontent.com/54978940/191069118-d32895d0-ee8b-4a6f-9e40-82510ce512cf.png)

 コード.gsに、`gas/code.gs`の内容をコピペします。２行目のidはスプレッドシートのidを記入してください。

```javascript
const id = 'ここにスプレッドシートのIDを記入'
```

`https://docs.google.com/spreadsheets/d/スプレッドシートID/edit#gid=XXX` <br>
スプレッドシートidは上記URLのスプレッドシートIDの箇所。<br>
次に<br>
 デプロイ -> 新しいデプロイ

![デプロイ](https://user-images.githubusercontent.com/54978940/191069518-00d1715d-a5de-4190-99bf-fc0dc2163eb4.png)

ユーザーは自身のユーザーを選択し、アクセスできるユーザーは自分のみを選択します。誰かと共有したい場合は全員やGoogleアカウントを持つ全員を選択してください。<br>
デプロイを押した後の画面にURLが表示されるので、それを`js/getData.js`の3行目のURLに記入します。

```javascript
const URL = "ここにURLを記入"
```

あとはブラウザ上でindex.htmlが存在するpathを入力することで、スプレッドシートの内容が反映されたサイトが表示されます。

## 使用方法

スプレッドシートのmenuタブに記入した内容がサイト左にあるサイドバーに反映されます。<br>
menuにあるシート名をクリックすると、シート名と同じシートに記入したタイトル、概要、リンクのカードが表示されます。<br>
サイドバーのトップは全シートのカードを表示させます。<br>
検索は部分一致したカードを表示させます。<br>
スプレッドシートに追記した内容を反映させるにはリロードかトップをクリックしてください。<br>
リロードやドップを押したときのスプレッドシートのデータ取得では数秒かかります。
