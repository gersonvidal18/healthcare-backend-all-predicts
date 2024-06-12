const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    try {
        const tokenValue = token.replace('Bearer ', '');
        const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
        req.user = decoded; // Aquí se adjuntan todos los datos del token al objeto req.user
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = verifyToken;
