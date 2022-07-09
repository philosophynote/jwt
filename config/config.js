import 'dotenv/config';

export const config = {
  jwt: {
    secret: process.env.JWT_SECRET,
    options: {
      algorithm: "HS256",
      expiresIn: "1d",
    },
  },
}
