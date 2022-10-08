# Описание маршрутов API

### User
* GET /users/:uuid - получение пользователя по uuid
* GET /users/ - получение всех пользователей
* POST /users/auth - авторизация пользователя
* POST /users/registration-user - регистрация пилота
* POST /users/registration-chief - регистрация капитана
* POST /users/registration-hr - регистрация HR

### Wallet
* POST /wallet/respect - отправить монеты пользователю

### Department
* GET /departments/ - получение всех Отделов
</p>
  response:
<p>
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

### Position
* GET /positions/ - получение всех Должностей
<p>
  response:
</p>
<code>
  {
      "status": "success",
      "departments": [
          {
              "id": 13,
              "name": "Администратор"
          },
          {
              "id": 14,
              "name": "Специалист"
          },
          {
              "id": 15,
              "name": "Главный Специалист"
          },
          {
              "id": 16,
              "name": "Стажер"
          }
      ]
  }
</code>
