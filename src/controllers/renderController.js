const renderView = (req, res)=>{
  let page = req.params.page

  if(!page){
    page = "home"
  }
  res.render(`${page}.pug`);
}

module.exports = {renderView}