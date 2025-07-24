const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let destination;
    if (file.mimetype === "image/png") {
      destination = "images";
    } else if (file.mimetype === "application/pdf") {
      destination = "pdf";
    }
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
    cb(null, fileName)
  }
})

const upload = multer({ storage: storage }).single("uploaded_file");

const uploadFile = (req, res) => {


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

    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      file: req.file
    });
  })


}



module.exports = { uploadFile }