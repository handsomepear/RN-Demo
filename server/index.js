const express = require('express')
const Router = express.Router()
const app = express()

Router.get('/test', (req, res) => {
  res.json({
    code: 0,
    data: [
      {id: 1, text: '测试内容'}
    ]
  })
})

app.use(Router) // 需要use router 否则没作用

app.listen(8082, function  () {
  console.log('port 8082');
})