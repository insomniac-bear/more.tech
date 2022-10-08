# Описание маршрутов API

## User
* GET /users/:uuid - получение пользователя по uuid
* GET /users/ - получение всех пользователей
* POST /users/auth - авторизация пользователя
* POST /users/registration-user - регистрация пилота
* POST /users/registration-chief - регистрация капитана
* POST /users/registration-hr - регистрация HR

## Wallet
* POST /wallet/respect - отправить монеты пользователю

## Department
* GET /departments/ - получение всех Отделов
### response:
<code>
  {
      "status": "success",
      "departments": [
          {
              "id": 7,
              "name": "Администратор"
          },
          {
              "id": 8,
              "name": "Отдел кадров"
          }
      ]
  }
</code>