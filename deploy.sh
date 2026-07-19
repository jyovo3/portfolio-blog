#!/usr/bin/env bash
# 一苇博客 - 一键部署脚本
# 在项目根目录运行：bash deploy.sh
set -euo pipefail

PROJECT_DIR="/root/portfolio-blog"
WWW_DIR="/var/www/portfolio-blog"
LOG_FILE="/tmp/deploy.log"

log() { echo "[$(date '+%H:%M:%S')] $*" | tee -a "$LOG_FILE"; }

log "===== 开始部署 ====="

log "1/5 拉取最新代码"
cd "$PROJECT_DIR"
git pull origin main

log "2/5 安装依赖"
if [ -f package-lock.json ]; then
  npm ci --registry=https://registry.npmmirror.com
else
  npm install --registry=https://registry.npmmirror.com
fi

log "3/5 构建静态站点"
npm run build

log "4/5 同步到 web 根目录"
rm -rf "${WWW_DIR:?}/"*
cp -a "$PROJECT_DIR/out/"* "$WWW_DIR/"
chmod -R o+rX "$WWW_DIR"

log "5/5 重载 nginx"
nginx -t && systemctl reload nginx

log "===== 部署完成 ====="
log "✅ 访问 http://121.43.118.73"
