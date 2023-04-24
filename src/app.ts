import express from 'express'
import { router } from '@src/exemplo-de-pasta-aliases/routes/routes'

const app = express()

app.use(express.json())
app.use(router)

export { app }
