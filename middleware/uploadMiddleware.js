const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Asegúrate de que este directorio exista
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Configuración de multer para aceptar solo imágenes
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Solo se aceptan imágenes jpeg y png'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // Limita el tamaño del archivo a 5MB
    },
    fileFilter: fileFilter
});

module.exports = upload;
