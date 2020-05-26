---
title: "オプション変更"
date: "2020-05-18"
---

## 音声プランで選択可能なオプションの変更

- FB API を用いてアカウント詳細情報を取得
- selectbox を３個作成。
  - 音声オプションを選択
    - かけ放題（利用しない・15 分・30 分）
    - 留守番電話（利用しない・利用する）
    - 割り込み通話（利用しない・利用する）
  - 現在のオプションをデフォルト値とし、明示する【例：利用しない（現在の設定）】
- 確認画面を表示（修正／送信）
- 入力・選択された内容をメール送信
- 完了画面を表示