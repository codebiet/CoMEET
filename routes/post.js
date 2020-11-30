const route = require('express').Router()
const multer =require('multer')
const session = require('express-session')
let count = 0
let {post} = require('../models/post')
let path = require('path')


let storage = multer.diskStorage({
    destination : __dirname + '/media', 
    filename: function (req, file, cb) {
        count = count + 1
        
        const uniqueSuffix = 'avatar' + path.extname(file.originalname)
        cb(null, Date.now() + uniqueSuffix)
    }
})

let upload = multer({
    storage : storage
})



route.get('/s',async(req,res)=>{
// console.log(req.session.count++)
//     res.send('req.session.count')
    let result = await post.remove()
    console.log(result)
    res.send(result)
})
route.post('/postSave',(req,res)=>{
    
})

route.post('/makePost',upload.single('avatar'),async (req,res)=>{
    let d = Date.now()
    if(req.file){
        let temp = await new post({
            title : req.body.postTitle,
            body : req.body.postDesc,
            name : req.user.name,
            year : req.user.Year,
            branch : req.user.Branch,
            specialist : req.user.Specilist,
            like :req.body.link,        
            media : '/images/'+  d + 'avatar' + path.extname(req.file.originalname)
        })
        temp.save()
        console.log(req.user)
        return res.send('hoooo')
    }
    else{
        let temp = await new post({
            title : req.body.postTitle,
            body : req.body.postDesc,
            name : req.user.name,
            year : req.user.Year,
            branch : req.user.Branch,
            specialist : req.user.Specilist,
            like : req.body.link,        
        })
        temp.save()
        console.log(req.user)
        return res.send('hoooo')
    }
})


module.exports = route