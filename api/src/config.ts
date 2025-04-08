import dotenv from "dotenv";

dotenv.config();

const Config = {
  BASE_URL: process.env.BASE_URL,
  PORT_API: process.env.PORT_API,
  BASE_URL_FRONT: process.env.BASE_URL_FRONT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  JWT_SECRET: process.env.JWT_SECRET,
};

export default Config;
