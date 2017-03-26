const express = require('express')
const path    = require('path')
const app     = express()
const port    = 3000

// Static folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Start Server/Port
app.listen(port, ()=>{
  console.log(`Server Started on port ${port}`)
})
