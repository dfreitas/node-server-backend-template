import express from "express"
import "dotenv/config"
import cors from "cors"
import exemploExport from "./exemplo_export"

const server = express()
server.use(cors())
server.disable("x-powered-by")

server.get("/", (req, res) => {
  res.json(exemploExport)
})

server.listen(process.env.PORT || 3001, () => {
  console.log(`Listening on port: ${process.env.PORT || 3001}`)
})
