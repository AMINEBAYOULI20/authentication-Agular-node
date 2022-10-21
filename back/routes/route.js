const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
const validator = require("../midalwares/validator")
const multer = require("multer");
const jwt_middleware = require("../midalwares/jwt_validate");

const storage = multer.diskStorage({

    destination: function (req, file, callback) {
        callback(null, './uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,

})



router.post("/login", controllers.login);
router.post("/inscrit_user", controllers.inscrit_user);
router.put("/modifier_user/:id", controllers.modifier_user);
router.get("/afficher_seuluser/:id", controllers.afficher_user);
router.get("/afficher_users", controllers.affiche_toususers);
router.post("/delete_user/:id", controllers.deletuser);




module.exports = router;  