const express = require("express")
const cors = require("cors")
const products = require("./lib/products")

// initiallizing the express app
const app = express()
// port
const port = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(cors())

// routes - endpoints
app.get("/", (req, res) => {
    res.send("Wellcome to Trendify shop API..")
})
app.get("/products", (req, res) => {
    res.send(products)
})

app.listen(port, () => console.log(`server running on port ${port}`))
