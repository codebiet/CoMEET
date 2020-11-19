module.exports.home=(req,res)=>{
                 req.session.count = 0
                console.log(req.session)
                // let data = await 
                 return res.render('home',
                 {
                     title: 'CoMEET | Home'
                 })
}