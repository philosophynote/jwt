import { getToken } from "../services/register.service.js";

export const register = async (req, res, next) => {
  try { 
    console.log(req);
    const payload = {
      username: req.body.username,
      email: req.body.email,
    };
    // const token = req.headers.token;
    const token = await getToken(payload);
    //トークンからデータをデコード
    // const decoded = jwt.verify(token, config.jwt.secret);
    // console.log(decoded);
  
    const body = {
      username: req.body.username,
      email: req.body.email,
      token: token,
    };

    return res.status(200).json(body);
  } catch (err) {
    return res.send(401).json({
      msg: "認証できません",
    });
  }
}

// const payload = {
//   username: req.body.username,
//   email: req.body.email,
// };

// const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);