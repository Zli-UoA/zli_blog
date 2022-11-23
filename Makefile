# 開発時のサーバー起動
dev: npm run dev

# サービス用のサーバー起動
preview: npm run preview

# ビルド
build: npm run build

# リント
lint: npm run prettier:check; npm run eslint:check

# フォーマット
fmt: npm run prettier:fmt; npm run eslint:fix