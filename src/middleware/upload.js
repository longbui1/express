const path = require('path')
const multer = require('multer');

const storage = multer.diskStorage({

    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/products'));
    },

    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }

})

const upload = multer({ storage: storage }).single('image')
module.exports = upload