const jwt = require("jsonwebtoken")

async function auth(req,res,next) {
try {
   
    const token = req.header("auth-token")
    const validToken = await jwt.verify(token,process.env.SEC)
   
    if(!validToken) return res.status(500).json({error:true,message:"Token is not valid !!!"})
    next()
} catch (error) {
 res.status(500).json({errors:true , message:error.message})   
}
}
module.exports = auth


