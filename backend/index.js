const express = require("express")
const cors = require("cors")

// initiallizing the express app
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes - endpoints
app.get("/", (req, res) => {
    res.send("Wellcome to Trendify shop API..")
})

// port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("server running on port 5000"))
