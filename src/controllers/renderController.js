const renderView = (req, res)=>{
  let page = req.params.page

  if(!page){
    page = "home"
  }
  res.render(page);
}

module.exports = {renderView}