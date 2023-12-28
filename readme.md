# Simple CRUD api

## API Docs
App for Managing User Data. Using NodeJs and PostgreSQL.


### HTTP APIs

| HTTP Method | Endpoint                 | Description              |
| ----------- | ------------------------ | ------------------------ |
| GET         | /user                    | Get All User             |
| GET         | /user?id=:id             | Get User With Id         |
| POST        | /user                    | Create New User          |
| PUT         | /user?id=:id             | Update User With Id      |
| DELETE      | /user?id=:id             | Delete User With Id      |

## How To Start

Pastikan telah terinstall daemon Docker pada Mesin anda.

1. Run `docker-compose up`