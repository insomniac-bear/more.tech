# Репозиторий для работы над проектом online хакатона MORE.Tech

## Обзор
* Запуск проекта
* Состав проекта
* Figma
* Документация по проекту

**Запуск проекта**
<p>Для запуска контейнера необходим Docker и NodeJS</p>
<p>Запуск осуществляется последовательным выпорлнением следующих команд</p>

1. npm run docker:build - сборка проекта
2. npm run docker:up - запуск docker контейнеров с проектом

<p>Для остановки проекта необходимо выполнить команду:</p>

1. npm run docker:down - остановка docker контейнеров с проектом

локально приложение доступно по адресу http://localhost:3000

**Состав проекта**
1. api - api сервер на базе NodeJS (ExpressJS)
2. База Данных - PostgreSQL 12.1
3. client - клиентская часть приложения на базе React 18 (Redux Toolkit, React Router v.6)

**Figma**

* [Ссылка на макет в Figma](https://www.figma.com/file/fjQMBs2RvgPJxDeKJDeOEU/%D0%92%D0%A2%D0%91-%D1%85%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD?node-id=1%3A2)

**Документация по проекту**

* [Ссылка на презентацию](https://drive.google.com/drive/folders/1U3yJilM1gYkYtzqdrQFp6wtqIrdU_jXr)
* [Ссылка на dashboard в Miro](https://miro.com/app/board/uXjVPSriYM0=/?share_link_id=184594433857)
* [Ссылка на описания в Google Docs](https://docs.google.com/document/d/1x_YZWvJoz7GTiJ-p8Vc6sJ_rNMdUve8w/edit?usp=sharing&ouid=102738113006045652183&rtpof=true&sd=true)
* [Ссылка на описание api](https://github.com/insomniac-bear/more.tech/blob/develop/api/README.md)
