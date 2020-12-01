const route = require('express').Router()
const multer =require('multer')
const session = require('express-session')
let count = 0
let {post} = require('../models/post')
let path = require('path')
let u = require('../models/user')
let d = Date.now() 
let storage = multer.diskStorage({
    destination : __dirname + '/media', 
    filename: function (req, file, cb) {
        count = count + 1
        
        const uniqueSuffix = 'avatar' + path.extname(file.originalname)
        cb(null, d + uniqueSuffix)
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
route.get('/profile',async(req,res)=>{
    let avatar = req.query.data
    console.log(req.query)
    let result = await u.findOne({email  : avatar})
    res.render('user_profile1',{user : result})
})

route.post('/makePost',upload.single('avatar'),async (req,res)=>{
   
    if(req.file){
        let temp = await new post({
            title : req.body.postTitle,
            body : req.body.postDesc,
            name : req.user.name,
            year : req.user.Year,
            email : req.user.email,
            branch : req.user.Branch,
            specialist : req.user.Specilist,
            like :req.body.link,        
            media : '/images/'+  d + 'avatar' + path.extname(req.file.originalname)
        })
        temp.save()
        console.log(req.user)
        return res.redirect('/');
    }
    else{
        let temp = await new post({
            title : req.body.postTitle,
            body : req.body.postDesc,
            name : req.user.name,
            year : req.user.Year,
            email : req.user.email,
            branch : req.user.Branch,
            specialist : req.user.Specilist,
            like : req.body.link,        
        })
        temp.save()
        console.log(req.user)
        return res.redirect('/')
    }
})


module.exports = route