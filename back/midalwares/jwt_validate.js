const jwt = require('jsonwebtoken');
const TOKEN_SECRET = 'sqldklfqlqs545';

module.exports = function (req,res,next){
  console.log(req);
    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.status(401).send('Access Denied');
    try {
    jwt.verify(authHeader, TOKEN_SECRET,(err,user)=>{
    if(err) return res.sendStatus(403)
     req.user = user;
        next();
        });
        
    } catch (error) {
      console.log(error);
      return res.status(401).send('Invalid Token') ;
    }
}