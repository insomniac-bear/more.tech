# Описание маршрутов API

##
 API запускается на маршруте http://localhost:5000
### User
* GET /users/:uuid - получение пользователя по uuid
* GET /users/ - получение всех пользователей
<p>
  response:
</p>
<pre>
  <code>
    {
      "status": "success",
      "users": [
          {
              "uuid": "62083ff9-d4fb-4335-96de-6fabaaf981a1",
              "name": "Иван",
              "surname": "Админов",
              "patronymic": "Админович",
              "email": "admin@test.com",
              "password": "qwerty1234",
              "phone": 1111111111,
              "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
              "departmentId": 7,
              "positionId": 13,
              "roleId": 13,
              "department": {
                  "id": 7,
                  "name": "Администратор"
              },
              "position": {
                  "id": 13,
                  "name": "Администратор"
              },
              "role": {
                  "id": 13,
                  "name": "admin"
              },
              "Wallets": [
                  {
                      "id": 7,
                      "publicKey": "0x79d1d20256334326842D05D08707D7a9041BCd95",
                      "privateKey": "7ff36787c08bb74217cd61e666b4dd3b3d8c2e2fe7a5d1fd9bbef3ebc12fd53c",
                      "type": "corporate",
                      "userUuid": "62083ff9-d4fb-4335-96de-6fabaaf981a1"
                  }
              ],
              "Skills": []
          }
      ]
    }
  </code>
</pre>

* POST /users/auth - авторизация пользователя
<p>body:</p>
<pre>
  <code>
    {
      "email": "admin@test.com",
      "password": "qwerty1234"
    }
  </code>
</pre>
<p>response:</p>
<pre>
  <code>
  {
    "status": "success",
    "user": {
        "uuid": "2e3cb390-97f1-4727-9e0c-27bd281ee61d",
        "name": "Иван",
        "surname": "Админов",
        "patronymic": "Админович",
        "email": "admin@test.com",
        "phone": 1111111111,
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        "department": "Администратор",
        "position": "Администратор",
        "role": "admin",
        "wallets": [
            "0x79d1d20256334326842D05D08707D7a9041BCd95"
        ],
        "skills": [
            {
                "name": "soft",
                "value": 100,
                "period": "current"
            },
            {
                "name": "hard",
                "value": 100,
                "period": "current"
            }
        ]
    }
}  </code>
</pre>

* POST /users/registration-user - регистрация пилота
<p>body:</p>
<pre>
  <code>
{
    "name": "Max",
    "surname": "Mad",
    "patronymic": "Sandman",
    "email": "test18@test.com",
    "phone": "1111111111",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "departmentId": 1,
    "positionId": 2,
    "roleId": 2
}  </code>
</pre>
<p>response:</p>
<pre>
  <code>
  {
    "status": "success"
  }
  </code>
</pre>

* POST /users/registration-chief - регистрация капитана
<p>Тело запроса и ответа аналогичны теелу запроса и ответа регистрации Пилота</p>

* POST /users/registration-hr - регистрация HR
<p>Тело запроса и ответа аналогичны теелу запроса и ответа регистрации Пилота</p>

### Wallet
* POST /wallet/respect - отправить монеты пользователю
<p>Тело запроса:</p>
<pre>
  <code>
    {
      "userUuid": "62083ff9-d4fb-4335-96de-6fabaaf981a1",
      "toPublicKey": "0x0289CA162b8a2f5F965A029195E719C61Ee6F8F7",
      "amount": 5,
      "skillType": "soft"
    }
  </code>
</pre>
<p>Тело ответа:</p>
<pre>
  <code>
    {
      status: "success"
    }
  </code>
</pre>
* POST /wallet/checkActivity - выполнить активность
<p>request:</p>
<pre>
  <code>
    recipientUuid: string, - сотрудник участвующий в активности
    authorUuid: string, - автор активности
    profit: number,
    departmentId: number, - департамент автора активности
    type: 'hard' | 'soft'
  </code>
</pre>

### Department
* GET /departments/ - получение всех Отделов
</pre>
  response:
<p>
<pre>
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
</pre>

### Position
* GET /positions/ - получение всех Должностей
<p>
  response:
</p>
<pre>
  <code>
    {
        "status": "success",
        "positions": [
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
</pre>

### Activity
* POST /activity/create/ - создание активности
<p>request body:</p>
<pre>
  <code>
    {
      title: string,
      type: 'hard' | 'soft',
      profit: number,
      description: string,
      authorUuid: string,
      departmentId: number,
    }
  </code>
</pre>

* GET /activity/:id - получение активности по id
* POST /activity/ - получение всех активностей доступных пользователю
<p>request body:</p>
<pre>
  <code>
    {
      userUuid: string,
    }
  </code>
</pre>
