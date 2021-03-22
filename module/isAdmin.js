function isAdmin (req, res, next) {
    if (req.session.nameUser == "admin") {
        next();
    } else {
        res.redirect("/fitisova");
    }
}

module.exports = isAdmin;
