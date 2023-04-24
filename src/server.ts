
import { app } from './app'
import { AppDataSource } from '@src/utils/data-source'

void AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT)
}).catch((err) => {
  console.error('Error during Data Source initialization', err)
})
