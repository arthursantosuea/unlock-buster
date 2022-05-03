import { Sequelize } from "sequelize";
import "dotenv/config";

const connection = new Sequelize(
  `${process.env.DATABASE_NAME}`,
  `${process.env.DATABASE_USERNAME}`,
  `${process.env.DATABASE_PASSWORD}`,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

const auth = async () => {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
}

auth();

export default connection;
