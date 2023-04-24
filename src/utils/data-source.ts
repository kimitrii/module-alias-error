import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

const envPort = process.env.TYPEORM_PORT as number | undefined

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: envPort,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  cache: {
    type: 'redis',
    options: {
      host: 'localhost',
      port: process.env.REDIS_PORT
    }
  },
  entities: [],
  migrations: [path.resolve(__dirname, '../migrations/*.{ts,js}')]

})
