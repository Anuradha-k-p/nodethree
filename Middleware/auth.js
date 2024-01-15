const Allauth = (req,res,next)=>{
    console.log("first auth");
    next()
}
const Specificauth = (req,res,next)=>{
    console.log("second auth");
    next()
}

module.exports ={Allauth,Specificauth}