# 課題 JWT(JavascriptWebToken)を使用したユーザー認証API

`/register`にユーザー名とメールアドレスをPOSTすると、Tokenが発行されます

Request
curl -X POST -H "Content-Type: application/json" -d '{
    "username": "test",
    "email": "test@email.com"
}' http://localhost:3000/register

Response
{"username":"test",
 "email":"test@email.com",
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwiaWF0IjoxNjU3MzcwNzE3LCJleHAiOjE2NTc0NTcxMTd9.DWEzYhHt7HrxIpCvhnpQxqMJH0PUE3GpENmImhlvg6o"
}

`/login`のヘッダーにTokenを入力し、ユーザー名とメールアドレスをPOSTすると、認証の可否が返ります

curlコマンドでのやり方がわからなかったのでPostmanで送信成功した画像を掲載します。

<img width="1680" alt="スクリーンショット 2022-07-09 21 46 43" src="https://user-images.githubusercontent.com/78991083/178107062-b53e5b36-a82a-41a1-87da-68f1ed2fdd6a.png">
