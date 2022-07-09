// 外部モジュールのインポート
import express from "express";
import { auth } from "./auth/auth.js";

import { registerRouter } from "./routes/register.router.js";

const port = 3000;
const app = express();
app.use(express.json());

app.use("/register",(req, res) => registerRouter(req, res));

app.post("/login", auth, (req, res) => {
  res.status(200).json({
    msg: "承認に成功しました",
  });
});

// set port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

