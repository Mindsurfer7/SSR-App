# Accept Order App

## Локальное развертывание проекта

```bash
# Склонировать репозиторий:
git clone https://github.com/Mindsurfer7/SSR-App

# Установить зависимости:
npm i

# ИЛИ  с использованием Yarn:
yarn

# ИЛИ  с использованием PNPM:
pnpm install

# Запустить проект:
npm run dev

# Открыть страницу заказов:
# Откройте ваш веб-браузер и перейдите по следующему адресу:
http://localhost:3000/orders
```

# Верстка

![С одним заказом](screenshots/image_2023-11-14_10-45-12.png)

![С многими заказами](screenshots/image_2023-11-14_10-47-09.png)

![Низ страницы](screenshots/image_2023-11-14_10-47-21.png)

# Запросы

![Все заказы](screenshots/image_2023-11-15_11-37-48.png)

![С лимитом](screenshots/image_2023-11-15_11-38-08.png)

![С лимитом и оффсетом](screenshots/image_2023-11-15_11-38-54.png)

![Проверка с неправильным айди](screenshots/image_2023-11-15_11-39-41.png)

![Конкретная заявка по айди](screenshots/image_2023-11-15_11-40-19.png)

### Дополнительная проверка

![При оффсете 19 отправляет оставшиеся 3](screenshots/image_2023-11-15_11-42-54.png)

### Документация функционала

<video width="320" height="240" controls>
  <source src="screenshots/appfunctions.mp4" type="video/mp4">
</video>

### Проверка с неправильным адресом запроса

<video width="320" height="240" controls>
  <source src="screenshots/errorchecking.mp4" type="video/mp4">
</video>
