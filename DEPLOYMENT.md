# Руководство по развертыванию

## Быстрый старт (локальная разработка)

```bash
# Установка зависимостей
bun install

# Запуск dev-сервера
bun run dev
```

Сайт будет доступен по адресу: http://localhost:3000

## Продакшн-сборка (локально)

```bash
# Сборка
bun run build

# Запуск
bun run start
```

## Docker-развертывание

### 1. Сборка Docker-образа

```bash
docker build -t matusevich-landing .
```

### 2. Запуск контейнера

```bash
docker run -p 3000:3000 matusevich-landing
```

### 3. Docker Compose (рекомендуется)

Создайте файл `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

Запуск:

```bash
docker-compose up -d
```

## Развертывание на VPS (Ubuntu/Debian)

### Шаг 1: Установка Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

### Шаг 2: Клонирование проекта

```bash
git clone <repository-url>
cd matusevich-landing
bun install
bun run build
```

### Шаг 3: Настройка PM2 (менеджер процессов)

```bash
# Установка PM2
bun add -g pm2

# Создание файла ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'matusevich-landing',
    script: 'bun',
    args: 'run start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Запуск приложения
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Шаг 4: Настройка Nginx

```bash
# Установка Nginx
sudo apt update
sudo apt install nginx

# Создание конфигурации
sudo nano /etc/nginx/sites-available/matusevich.dev
```

Содержимое файла:

```nginx
server {
    listen 80;
    server_name matusevich.dev www.matusevich.dev;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Активация конфигурации:

```bash
sudo ln -s /etc/nginx/sites-available/matusevich.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Шаг 5: Настройка SSL (Let's Encrypt)

```bash
# Установка Certbot
sudo apt install certbot python3-certbot-nginx

# Получение SSL-сертификата
sudo certbot --nginx -d matusevich.dev -d www.matusevich.dev
```

## Развертывание на популярных платформах

### Vercel (рекомендуется для Next.js)

1. Установите Vercel CLI:
```bash
bun add -g vercel
```

2. Деплой:
```bash
vercel
```

3. Следуйте инструкциям в терминале

### Netlify

1. Установите Netlify CLI:
```bash
bun add -g netlify-cli
```

2. Деплой:
```bash
netlify deploy --prod
```

### Railway

1. Создайте аккаунт на Railway.app
2. Подключите GitHub репозиторий
3. Railway автоматически определит Next.js и развернет приложение

## Настройка переменных окружения

Создайте файл `.env.local` (не коммитить в git!):

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_YANDEX_METRIKA_ID=your-metrika-id

# Other configs
NEXT_PUBLIC_SITE_URL=https://matusevich.dev
```

## Мониторинг

### PM2 (на VPS)

```bash
# Просмотр логов
pm2 logs matusevich-landing

# Статус приложения
pm2 status

# Перезапуск
pm2 restart matusevich-landing
```

### Docker

```bash
# Просмотр логов
docker logs <container-id>

# Статус контейнера
docker ps
```

## Обновление приложения

### На VPS

```bash
cd matusevich-landing
git pull
bun install
bun run build
pm2 restart matusevich-landing
```

### Docker

```bash
docker-compose down
git pull
docker-compose up -d --build
```

## Резервное копирование

Рекомендуется настроить автоматическое резервное копирование:

```bash
# Создание backup-скрипта
cat > backup.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/matusevich-landing"
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/backup_$DATE.tar.gz /path/to/matusevich-landing
# Удаление старых бэкапов (старше 7 дней)
find $BACKUP_DIR -name "backup_*.tar.gz" -mtime +7 -delete
EOF

chmod +x backup.sh

# Добавление в crontab (ежедневно в 2:00 AM)
crontab -e
# Добавьте строку:
# 0 2 * * * /path/to/backup.sh
```

## Проверка производительности

После развертывания проверьте:

1. **Lighthouse Score**: Откройте DevTools → Lighthouse
2. **Core Web Vitals**: 
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1
3. **GTmetrix**: https://gtmetrix.com
4. **PageSpeed Insights**: https://pagespeed.web.dev

## Troubleshooting

### Проблема: "Port 3000 already in use"

```bash
# Найти процесс
lsof -i :3000
# Убить процесс
kill -9 <PID>
```

### Проблема: Nginx не перенаправляет на приложение

```bash
# Проверка конфигурации
sudo nginx -t
# Перезапуск
sudo systemctl restart nginx
# Просмотр логов
sudo tail -f /var/log/nginx/error.log
```

### Проблема: PM2 не запускается

```bash
# Удалить все процессы
pm2 delete all
# Запустить заново
pm2 start ecosystem.config.js
```

## Контакты

При возникновении проблем с развертыванием обращайтесь:
- Telegram: [@digedon](https://t.me/digedon)
