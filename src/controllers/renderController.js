const renderView = (req, res)=>{
  const page = req.params.page
  res.render(page);
}

module.exports = {renderView}