const endSession = (req, res)=>{
  if(req.session){
    req.session.destroy();
    res.status(200).json({
      success: true,
      message: "Session destroyed"
    })
  }else{
    res.status(200).json({
      success: false,
      message: "Session couldnt be destroyed"
    })
  }
}

module.exports = {endSession}