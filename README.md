# Town Planning API

## 概要
不動産取引価格を検索するAPI

---

## プロジェクト実行前の確認事項

### 1. レポジトリのクローン
以下の手順でプロジェクトを取得してください。

1. 任意のディレクトリを作成し、そのディレクトリで **Git Bash** を起動します。
2. 以下のコマンドを順に実行します：

   - `git clone https://github.com/AkimJemi/townPlanning-api.git`  

---

### 2. データベース設定

1. ローカルDB情報を基に、以下の設定ファイルを修正します：

   - **設定ファイルパス**: `./townPlanning/town-planning-api/.env`

2. PostgreSQLに接続し、以下のSQLファイルを**postgresユーザー**で実行して、データベースを作成およびデータ登録をします。

   - **SQLファイルパス**: `./townPlanning/town-planning-api/prisma/town-planning-api_init.sql`

---

### 3. プロジェクト実行

以下の手順でプロジェクトを起動します：

1. レポジトリが正常にクローンされたことを確認した後、以下を順に実行します：

   - ディレクトリ移動: `cd townPlanning-api/town-planning-api`  
   - 依存関係インストール: `npm install`  
   - プロジェクト起動: `npm start`  ※開発用： `npm run start:dev`   

2. ブラウザで以下のURLを開き、レスポンスを確認します：

   - **URL**: [http://localhost:3000/api](http://localhost:3000/api)
   - **正常確認完了基準**: 「不動産取引価格を検索するAPI」の画面が表示されること

---
