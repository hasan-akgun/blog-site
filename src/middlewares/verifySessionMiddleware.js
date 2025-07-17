const verifySession = (req,res,next)=>{

  const allowedPages = ["home", "blog", "login"];
  const page = req.params.page;
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