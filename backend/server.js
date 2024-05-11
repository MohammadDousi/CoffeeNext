const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
const productsRouter=require('./routes/productsRouter.js')

app.use(bodyParser.json({extended : false}))
app.use(cors())
app.use('/products',productsRouter)
app.use('/assets', express.static('assets'));
app.listen(4000)