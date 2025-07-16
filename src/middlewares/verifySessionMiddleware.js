const verifySession = (req,res,next)=>{

  const page = req.params.page;

  if(page !== "dashboard"){
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