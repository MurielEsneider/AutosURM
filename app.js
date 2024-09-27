const express = require("express")
const app = express();
require("dotenv").config();
const autoRoutes=require("./routes/autoRoutes")
const clienteRoutes=require("./routes/clienteRoutes");

const PORT = process.env.PORT 

app.use(express.json());

app.use("/api", autoRoutes);
app.use("/api", clienteRoutes);


app.listen(PORT, ()=> {
    console.log("conectado en servidor: " +PORT)
})

