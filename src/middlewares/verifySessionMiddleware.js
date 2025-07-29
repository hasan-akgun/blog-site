const verifySession = (req,res,next)=>{

  const allowedPages = ["home", "blog", "login", "post", "new-client"];
  const page = req.params.page;

  if(page==="login" && req.session.username){
    req.params.page = "dashboard";
    next();
    return;
  }

  if(allowedPages.includes(page)){
    next();
    return;
  }

  if(req.session.username ){
    next();
    return
  }else{
    res.status(404).json({
      success: false,
      message: "Session couldnt find"
    })
  }
}

module.exports = {verifySession}