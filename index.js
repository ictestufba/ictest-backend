import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json({ limit: "50mb" }))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(8080, () => {
  console.log("Server started on port http://localhost:8080")
})
