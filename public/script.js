$(()=>{
    $('div.commentTab').hide()
    $('#bt').click((e)=>{
        console.log(e.target)
        $(this.element).hide()
    })
})