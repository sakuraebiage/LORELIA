# LORELIA

# LORELIA
## Character & Story Interaction Environment
### Specification v0.1

---

# 0. Project Overview

LORELIAは、ユーザーが設定したキャラクターとAIを通じて、
会話・物語・関係性の変化を楽しむための個人向けAIインタラクション環境。

単純なAIチャットではなく、

- キャラクター
- ユーザーキャラクター
- 世界観
- シーン
- 記憶
- 関係性
- 距離感
- AI出力監査

をLORELIA側で管理する。

AIはLORELIAが管理する世界・キャラクター情報を参照し、
その世界の中で会話や物語を生成する。

## 基本思想

> AIが世界を管理するのではなく、
> LORELIAが世界を管理し、
> AIがその世界の中で物語を生成する。

---

# 1. Project Goals

LORELIAの目的は以下。

1. キャラクター性を長期間維持する
2. AIによる設定改変を防止する
3. AIによる勝手な記憶生成を防止する
4. ユーザーキャラクターをAIに勝手に操作させない
5. 関係性を自然な成り行きで変化させる
6. 小説・チャット・メールなど複数の会話形式に対応する
7. キャラクター同士の複数人会話に対応する
8. AI出力をLORELIA側で監査できるようにする
9. 将来的な拡張・商業化を妨げない構造にする

---

# 2. Development Environment

初期開発環境：

- GitHub
- HTML
- CSS
- JavaScript
- GitHub Pages
- ローカル開発環境

初期構成：

```text
LORELIA/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js

LORELIA/
│
├── index.html
│
├── css/
│   ├── base.css
│   ├── theme.css
│   ├── lorelia-ui.css
│   ├── novel.css
│   ├── chat.css
│   └── mail.css
│
├── js/
│   ├── app.js
│   ├── character.js
│   ├── userCharacter.js
│   ├── scene.js
│   ├── memory.js
│   ├── relationship.js
│   ├── audit.js
│   ├── novel.js
│   ├── chat.js
│   └── mail.js
│
├── characters/
│   ├── kaname.json
│   ├── keika.json
│   ├── shizumi.json
│   ├── kohaku.json
│   └── houraku.json
│
├── user/
│   └── character.json
│
├── world/
│   └── world.json
│
├── memory/
│   ├── core.json
│   ├── story.json
│   └── recent.json
│
├── scenes/
│   └── current.json
│
└── assets/
    ├── characters/
    ├── backgrounds/
    └── ui/
