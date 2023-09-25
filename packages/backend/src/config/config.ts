import * as dotenv from 'dotenv';

dotenv.config();

export class Config {
  static db_port = parseInt(process.env.DB_PORT);
  static db_type = process.env.DB_TYPE;
  static db_password = process.env.DB_PASSWORD;
  static db_host = process.env.DB_HOST;
  static db_database = process.env.DB_DATABASE;
  static db_user = process.env.DB_USER;
}
