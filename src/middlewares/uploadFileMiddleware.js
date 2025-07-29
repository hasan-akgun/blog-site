const multer = require("multer");

let fileUrl = "/uploads/"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let destination;
    if (file.mimetype === "image/png") {
      destination = "images";
    } else if (file.mimetype === "application/pdf") {
      destination = "pdf";
    }
    fileUrl= "/uploads/"
    fileUrl += destination
    console.log(fileUrl)
    cb(null, `C:\\Users\\Hasan\\Documents\\Ödevler\\blog-site\\public\\uploads\\${destination}`)
  },
  filename: (req, file, cb) => {
    let name;
    if (file.mimetype === "image/png") {
      name = "image.PNG";
    } else if (file.mimetype === "application/pdf") {
      name = "file.PDF";
    }
    const uniqeSuffix = new Date(Date.now()).toLocaleString().replace(/[/:]/g, '-');
    const fileName = (uniqeSuffix + name).replace(" ", "-")
    fileUrl += "/" + fileName
    console.log(fileUrl)

    cb(null, fileName)
  }
})

const upload = multer({ storage: storage }).single("uploaded_file");

const uploadFile = (req, res, next) => {

  upload(req, res, (error) => {
    // Başarılı yükleme

    if (error) {
      return res.status(400).json({
        success: false,
        message: "enter a valid file"
      });
    }

    if (!req.file) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      });
    }

    req.body.fileurl= fileUrl
    next();
  })


}

const getFile = (req, res) => {
  
}



module.exports = { uploadFile }