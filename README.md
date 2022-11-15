# 研究室 HP

## 概要

千葉大学工学部折田研究室の HP を作りました.

HP リンク : https://www.cfme.chiba-u.jp/~orita/

自分が学士で卒業して居なくなってしまうのでコードとかいじらなくても
運用ができるような作りにしました. CMS は HP と切り離す必要があったため(大学からの圧力)他に作っている研究室のクラウドシステムに組み込めれば良いかなと思っています.

ソースは今後もう少しまとまりを良くしようかなと考えています.(そんな暇あるか分からないが)

## **技術**

### `言語`

- Typescript

### `フレームワーク`

- Next.js (React)
- Tailwind

### `ライブラリ`

- ChakraUI
- React Query
- date-fns

### `DB`

- Cloud Firestore for Firebase
- Cloud Storage for Firebase

## **各種技術の選定理由など**

技術の選定理由についてもしっかり考えた(と思う)ので述べていきたいと思います.

まず, `Next.js`を選んだ理由ですが, 単純に React で作りたかったからです. もっと詳細に言うと, Next.js なら React 使えるし複数ページのルーティングも楽と言う理由で選びました.

`Tailwind`については慣れと短くスタイル記述ができる点で採用しました.

ライブラリ系については以下の理由です.

- ChakraUI → 作者的には Material UI の方が使用経験があったが, MUI と Tailwind の相性の悪さを少し感じていたこと, その逆で相性の良さげな ChakraUI に魅力を感じたこと
- React Query → 自分で全部非同期 fetch, データキャッシュ, etc をやるのがめん d...時間的コストがかかってしまうと判断し採用
- date-fns → 楽に日付が扱いたい

最後に`Firebase`を採用した理由ですが, 当初は最近ハマっている`Supabase`を採用するつもりでした.
しかし, Supabase はフリープランだと 1 週間未使用でプロジェクトが停止してしまうらしいのです.

> Free projects are paused after 1 week of inactivity.  
> 参照 : https://supabase.com/pricing

そのため, 1 週間誰も HP に訪問しないと言う場合が頻発してしまうと, 運用的にかなり良くないのではと思い, 読み取り制限はありつつも停止期限のない(?)Firebase を採用しました.
