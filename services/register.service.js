import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const getToken = async (payload) =>{
  try {
    const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);
    return token
  } catch (e) {
    throw Error("トークン作成時にエラーが起きました")
  }
}

// export const auth = async (req, res, next) => {
//   try { 
//     const token = req.headers.token;
//     //トークンからデータをデコード
//     const decoded = jwt.verify(token, config.jwt.secret);
//     console.log(decoded);
//     next();
//   } catch (err) {
//     return res.send(401).json({
//       msg: "認証できません",
//     });
//   }
// };